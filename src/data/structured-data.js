import { SITE_URL, DEFAULT_IMAGE } from './seo';

export function getStructuredData(page) {
  const canonicalUrl = `${SITE_URL}${page.path}`;
  const image = page.image ? `${SITE_URL}${page.image}` : DEFAULT_IMAGE;
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Entrain Growth Partners',
      url: `${SITE_URL}/`,
      logo: DEFAULT_IMAGE,
      telephone: '+91 97452 35226',
      email: 'growth@entrain.in',
      description: 'A strategy-led digital growth partner providing SEO, performance marketing, social media, content marketing, and web development.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kozhikode',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://instagram.com/entrain_growth_lab',
        'https://linkedin.com/company/entrain-growth-lab',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Entrain Growth Partners',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
    },
  ];

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

  if (page.serviceType) {
    graph.push({
      '@type': 'Service',
      name: page.serviceType,
      serviceType: page.serviceType,
      description: page.description,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Global',
      url: canonicalUrl,
    });
  }

  if (page.post) {
    graph.push({
      '@type': 'BlogPosting',
      headline: page.post.title,
      description: page.post.excerpt,
      image,
      datePublished: page.post.date,
      dateModified: page.post.date,
      author: {
        '@type': 'Organization',
        name: page.post.author || 'Entrain Growth Partners',
        url: SITE_URL,
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
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
