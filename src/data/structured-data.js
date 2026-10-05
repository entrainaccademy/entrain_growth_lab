import { SITE_URL, DEFAULT_IMAGE, staticPages } from './seo';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

// Service schema per service page (name, serviceType, optional description override)
const services = {
  '/services/digital-marketing': { name: 'Digital Marketing', serviceType: 'Digital marketing' },
  '/services/social-media-marketing': { name: 'Social Media Marketing', serviceType: 'Social media marketing' },
  '/services/seo': {
    name: 'Search Engine Optimization (SEO)',
    serviceType: 'Search engine optimization',
    description: 'Sustainable organic traffic through technical SEO, strategic keywords, authoritative content, and continuous search performance optimization. Includes keyword strategy and competitor research, on-page SEO and content optimization, and technical SEO audits and fixes.',
  },
  '/services/performance-marketing': { name: 'Performance Marketing', serviceType: 'Performance marketing' },
  '/services/content-marketing': { name: 'Content Marketing', serviceType: 'Content marketing' },
  '/services/branding-creative-design': { name: 'Branding & Creative Design', serviceType: 'Branding and creative design' },
  '/services/website-design-development': { name: 'Website Design & Development', serviceType: 'Website design and development' },
  '/services/marketing-strategy-consulting': { name: 'Marketing Strategy & Consulting', serviceType: 'Marketing strategy consulting' },
};

function serviceNode(path) {
  const service = services[path];
  const url = `${SITE_URL}${path}`;
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description || staticPages[path]?.description,
    url,
    provider: { '@id': ORG_ID },
    areaServed: 'Global',
  };
}

export function getStructuredData(page) {
  const canonicalUrl = `${SITE_URL}${page.path}`;
  const image = page.image ? `${SITE_URL}${page.image}` : DEFAULT_IMAGE;
  const webPageId = `${canonicalUrl}#webpage`;
  const graph = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Entrain Growth Partners',
      alternateName: 'Entrain Growth',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        '@id': LOGO_ID,
        url: DEFAULT_IMAGE,
        caption: 'Entrain Growth Partners',
      },
      image: DEFAULT_IMAGE,
      telephone: '+91 97452 35226',
      email: 'entraingrowthpartners@gmail.com',
      description: 'Entrain Growth Partners is a digital marketing agency that builds tailored, organic-first growth strategies through SEO, performance marketing, social media, web development and strategic digital marketing.',
      slogan: "Growth Isn't Luck. It's Strategy.",
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kozhikode',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://www.instagram.com/entrain.growth.partners/',
        'https://www.facebook.com/people/Entrain-growth-partners/61593178871374/',
        'https://www.linkedin.com/in/entrain-growth-partners-b64109430',
        'https://x.com/entrain_growth_lab',
      ],
      knowsAbout: [
        'Search engine optimization',
        'Performance marketing',
        'Social media marketing',
        'Content marketing',
        'Branding and creative design',
        'Website design and development',
        'Marketing strategy and consulting',
        'Digital marketing',
      ],
      makesOffer: Object.keys(services).map((path) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${SITE_URL}${path}#service` },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: 'Entrain Growth Partners',
      description: 'Tailored, organic-first growth strategies through SEO, performance marketing, social media, web development and strategic digital marketing.',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-IN',
    },
  ];

  const webPage = {
    '@type': page.path === '/contact' ? 'ContactPage' : 'WebPage',
    '@id': webPageId,
    url: canonicalUrl,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-IN',
  };
  if (page.path === '/') {
    webPage.about = { '@id': ORG_ID };
    webPage.primaryImageOfPage = { '@id': LOGO_ID };
  }
  if (page.path === '/contact') {
    webPage.about = {
      '@id': ORG_ID,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'entraingrowthpartners@gmail.com',
        telephone: '+91-97452-35226',
        availableLanguage: ['English'],
      },
    };
  }
  graph.push(webPage);

  if (page.breadcrumb?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumb.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.url}`,
      })),
    });
  }

  if (page.path === '/services') {
    graph.push(...Object.keys(services).map(serviceNode));
  } else if (services[page.path]) {
    graph.push(serviceNode(page.path));
  }

  if (page.post) {
    graph.push({
      '@type': 'BlogPosting',
      headline: page.post.title,
      description: page.post.excerpt,
      image,
      datePublished: page.post.date,
      dateModified: page.post.dateModified || page.post.date,
      author: {
        '@type': 'Organization',
        name: page.post.author || 'Entrain Growth Partners',
        url: SITE_URL,
      },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: { '@id': webPageId },
      inLanguage: 'en-IN',
    });
  }

  if (page.job) {
    graph.push({
      '@type': 'JobPosting',
      title: page.job.title,
      description: page.job.summary,
      datePosted: page.job.datePosted,
      validThrough: page.job.validThrough,
      employmentType: 'FULL_TIME',
      hiringOrganization: {
        '@type': 'Organization',
        name: page.job.organization,
        sameAs: SITE_URL,
        logo: DEFAULT_IMAGE,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manjeri',
          addressRegion: 'Kerala',
          addressCountry: 'IN',
        },
      },
      directApply: true,
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
