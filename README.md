# Entrain Growth Partners

This site is built with Next.js and React. The existing page components, styles, fonts, and animations live in `src/`.

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run start
```

The App Router entry point is in `app/`. Existing page components live in `src/views/`; routing links are adapted in `src/lib/router.jsx`. The site URL and page metadata are in `src/data/seo.js`.

## Lead enquiries

The homepage, contact page, and consultation forms post to `/api/leads`. The server saves each successful submission to the private [Growth Partners lead sheet](https://docs.google.com/spreadsheets/d/1kgFavphF2kqcLgnVCLlQ9G0it2_B_DppdMCdjlFAu1c/edit), in the `Leads` tab. The forms report an error when a write fails.

Set the three server-only variables in `.env.example` in `.env.local` for local work and in the hosting project's environment before deployment. The sheet is already shared with the service account shown there as Editor. Keep the private key out of Git and never prefix it with `NEXT_PUBLIC_`.
