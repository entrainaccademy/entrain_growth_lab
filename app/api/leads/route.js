import { createSign } from 'node:crypto';

export const runtime = 'nodejs';

const limits = { name: 120, email: 254, phone: 40, company: 160, website: 300, service: 120, message: 3000, source: 80 };
const clean = (value, limit) => typeof value === 'string' ? value.trim().slice(0, limit) : '';
const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');

async function getAccessToken(email, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  const assertion = `${unsigned}.${signer.sign(privateKey).toString('base64url')}`;
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`Google authentication failed (${response.status})`);
  const data = await response.json();
  return data.access_token;
}

export async function POST(request) {
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return Response.json({ error: 'Invalid request.' }, { status: 415 });
  }

  let body;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return Response.json({ error: 'Request is too large.' }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const lead = Object.fromEntries(Object.entries(limits).map(([key, limit]) => [key, clean(body[key], limit)]));
  if (!lead.name || !/^[+\d][\d\s()+.-]{6,39}$/.test(lead.phone) || !lead.message ||
      (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) ||
      !['Homepage form', 'Contact form', 'Consultation modal'].includes(lead.source)) {
    return Response.json({ error: 'Please check the required fields and try again.' }, { status: 400 });
  }

  const { GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY } = process.env;
  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    console.error('Lead sheet is not configured.');
    return Response.json({ error: 'The enquiry form is temporarily unavailable. Please try again later.' }, { status: 503 });
  }

  try {
    const token = await getAccessToken(GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'));
    const range = encodeURIComponent('Leads!A:I');
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(GOOGLE_SHEET_ID)}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ values: [[new Date().toISOString(), lead.name, lead.email, lead.phone, lead.company, lead.website, lead.service, lead.message, lead.source]] }),
        cache: 'no-store',
      },
    );
    if (!response.ok) throw new Error(`Google Sheets append failed (${response.status})`);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Lead submission failed:', error);
    return Response.json({ error: "We couldn't save your enquiry. Please try again." }, { status: 502 });
  }
}
