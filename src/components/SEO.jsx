import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { getJobBySlug } from '../data/careers';

const SITE_URL = 'https://entrain-growth-lab.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/entrain-growth-logo.png`;

// Primary static pages metadata
const staticPages = {
  '/': {
    title: 'Entrain Growth Lab | Growth Partners & Digital Marketing Agency',
    description: 'Entrain Growth Lab builds tailored, organic-first growth strategies through SEO, performance marketing, social media, web development and strategic consulting.',
    type: 'website',
  },
  '/about': {
    title: 'About Us | Strategy-Led Growth Partners | Entrain Growth Lab',
    description: 'Learn about Entrain Growth Lab, an honest, strategy-led growth partner helping ambitious businesses achieve sustainable compounding revenue and brand reach.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
  },
  '/services': {
    title: 'Digital Marketing & Growth Services | Entrain Growth Lab',
    description: 'Explore full-spectrum growth services: Search Engine Optimization (SEO), Paid Ads, Social Media, Content Marketing, Web Development, and Brand Strategy.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
  },
  // Dedicated Service Detail Pages
  '/services/digital-marketing': {
    title: 'Digital Marketing Strategy & Growth | Entrain Growth Lab',
    description: 'Scale customer acquisition with end-to-end digital marketing strategies connecting audience research, conversion rate optimization, analytics, and ROI reporting.',
    type: 'website',
    serviceType: 'Digital Marketing Services',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Digital Marketing', url: '/services/digital-marketing' },
    ],
  },
  '/services/social-media-marketing': {
    title: 'Social Media Marketing & Content Strategy | Entrain Growth Lab',
    description: 'Build an engaged organic following with high-retention video content, strategic community management, and consistent social brand storytelling.',
    type: 'website',
    serviceType: 'Social Media Marketing',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Social Media Marketing', url: '/services/social-media-marketing' },
    ],
  },
  '/services/seo': {
    title: 'Search Engine Optimization (SEO) Agency | Entrain Growth Lab',
    description: 'Drive compounding, high-intent organic traffic through rigorous technical SEO audits, intent-based keyword research, on-page optimization, and earned authority.',
    type: 'website',
    serviceType: 'Search Engine Optimization (SEO)',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'SEO', url: '/services/seo' },
    ],
  },
  '/services/performance-marketing': {
    title: 'Performance Marketing (Meta & Google Ads) | Entrain Growth Lab',
    description: 'Launch high-performing Meta Ads and Google Ads campaigns engineered for measurable ROAS, rigorous A/B creative testing, and multi-touch attribution.',
    type: 'website',
    serviceType: 'Performance Marketing',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Performance Marketing', url: '/services/performance-marketing' },
    ],
  },
  '/services/content-marketing': {
    title: 'Content Marketing & Organic Distribution | Entrain Growth Lab',
    description: 'Engage and educate high-intent customers with authoritative content pillars, case studies, and editorial assets that compound search and brand reach.',
    type: 'website',
    serviceType: 'Content Marketing',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Content Marketing', url: '/services/content-marketing' },
    ],
  },
  '/services/branding-creative-design': {
    title: 'Branding & Identity Design Studio | Entrain Growth Lab',
    description: 'Build an unmistakable brand identity with custom typography, cohesive visual systems, positioning strategy, and comprehensive brand guidelines.',
    type: 'website',
    serviceType: 'Branding & Creative Design',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Branding & Creative Design', url: '/services/branding-creative-design' },
    ],
  },
  '/services/website-design-development': {
    title: 'Web Design & Modern Development | Entrain Growth Lab',
    description: 'Custom, blazing-fast, conversion-engineered websites designed for modern digital brands. Built with clean code, technical SEO, and responsive UX.',
    type: 'website',
    serviceType: 'Website Design & Development',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Website Design & Development', url: '/services/website-design-development' },
    ],
  },
  '/services/marketing-strategy-consulting': {
    title: 'Marketing Strategy & Growth Consulting | Entrain Growth Lab',
    description: 'Executive marketing consulting and growth advisory for businesses seeking clear acquisition channels, offer positioning, and revenue growth frameworks.',
    type: 'website',
    serviceType: 'Marketing Strategy Consulting',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Marketing Strategy Consulting', url: '/services/marketing-strategy-consulting' },
    ],
  },
  // Work & Case Studies
  '/work': {
    title: 'Selected Client Work & Growth Case Studies | Entrain Growth Lab',
    description: 'Review proven client case studies, digital marketing campaigns, and custom web experiences delivered by Entrain Growth Lab for growing brands.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
    ],
  },
  '/workdetails': {
    title: 'Client Results & Project Showcase | Entrain Growth Lab',
    description: 'In-depth breakdown of creative direction, campaign execution, and measurable growth results achieved across client engagements.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work Details', url: '/workdetails' },
    ],
  },
  '/buckeez': {
    title: 'Buckeez Case Study | Brand & Campaign Growth | Entrain Growth Lab',
    description: 'See how Entrain Growth Lab developed brand identity guidelines, social strategy, and creative campaigns for Buckeez.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Buckeez', url: '/buckeez' },
    ],
  },
  '/cobolt': {
    title: 'Cobolt Machineries Case Study | Entrain Growth Lab',
    description: 'Discover how strategic positioning and digital creative elevated Cobolt Machineries into an industry-leading industrial presence.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Cobolt', url: '/cobolt' },
    ],
  },
  '/culinary': {
    title: 'Entrain Culinary Academy Case Study | Entrain Growth Lab',
    description: 'Explore how organic search optimization and brand storytelling scaled admissions for Entrain Culinary Academy.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Culinary Academy', url: '/culinary' },
    ],
  },
  '/entrainlabs': {
    title: 'Entrain Labs Case Study | Tech & Web Design | Entrain Growth Lab',
    description: 'Behind the scenes of Entrain Labs web experience, UI/UX design architecture, and high-performance digital presence.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Entrain Labs', url: '/entrainlabs' },
    ],
  },
  // Content & Hubs
  '/blog': {
    title: 'The Growth Journal | Organic Marketing Insights & Playbooks',
    description: 'Tactical playbooks, case studies, and actionable insights on SEO, social algorithms, web design, and sustainable business growth.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blog' },
    ],
  },
  '/testimonials': {
    title: 'Client Reviews & Testimonials | Entrain Growth Lab',
    description: 'What founders, business owners, and marketing directors say about collaborating with Entrain Growth Lab as their growth partner.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Testimonials', url: '/testimonials' },
    ],
  },
  '/contact': {
    title: 'Contact Us | Book a Growth Strategy Consultation | Entrain Growth Lab',
    description: 'Connect with Entrain Growth Lab for a 30-minute growth strategy consultation. Discuss SEO, performance marketing, or custom web development.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  '/careers': {
    title: 'Careers at Entrain Growth Lab | Join Our Growth Team',
    description: 'Explore open roles for marketing strategists, creative designers, copywriters, and developers at Entrain Growth Lab.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Careers', url: '/careers' },
    ],
  },
  '/privacy': {
    title: 'Privacy Policy | Entrain Growth Lab',
    description: 'Our privacy commitment: how Entrain Growth Lab collects, protects, and respects your data and privacy.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' },
    ],
  },
  '/terms': {
    title: 'Terms of Service | Entrain Growth Lab',
    description: 'Read the terms of service and website usage agreements for Entrain Growth Lab.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Terms of Service', url: '/terms' },
    ],
  },
};

// Route aliases mapped to their primary canonical paths
const canonicalAliases = {
  '/services/branding': '/services/branding-creative-design',
  '/services/meta-ads': '/services/performance-marketing',
  '/services/google-ads': '/services/performance-marketing',
  '/services/web-design-development': '/services/website-design-development',
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
}

function setStructuredData(schemas) {
  let script = document.head.querySelector('#seo-schema');
  if (!script) {
    script = document.createElement('script');
    script.id = 'seo-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas,
  });
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize path by stripping trailing slash unless root
    const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

    // Check if path is an alias that should canonicalize to its primary page
    const canonicalPath = canonicalAliases[cleanPath] || cleanPath;
    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;

    let pageMeta = staticPages[cleanPath] || staticPages[canonicalPath];
    let isBlogPost = false;
    let postData = null;
    let isJobPost = false;
    let jobData = null;

    // Resolve dynamic blog post metadata
    if (!pageMeta && cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '').trim();
      postData = blogPosts.find((p) => p.slug === slug);
      if (postData) {
        isBlogPost = true;
        pageMeta = {
          title: `${postData.title} | Entrain Growth Lab`,
          description: postData.excerpt,
          type: 'article',
          image: postData.image ? `${SITE_URL}${postData.image}` : DEFAULT_IMAGE,
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: postData.title, url: `/blog/${postData.slug}` },
          ],
        };
      }
    }

    // Resolve dynamic careers job posting metadata
    if (!pageMeta && cleanPath.startsWith('/careers/')) {
      const slug = cleanPath.replace('/careers/', '').trim();
      jobData = getJobBySlug(slug);
      if (jobData) {
        isJobPost = true;
        pageMeta = {
          title: `${jobData.title} | Careers at ${jobData.organization}`,
          description: jobData.briefSummary,
          type: 'website',
          breadcrumb: [
            { name: 'Home', url: '/' },
            { name: 'Careers', url: '/careers' },
            { name: jobData.title, url: `/careers/${jobData.slug}` },
          ],
        };
      }
    }

    // Fallback for unmatched / 404 routes
    const isNotFound = !pageMeta;
    if (isNotFound) {
      pageMeta = {
        title: 'Page Not Found (404) | Entrain Growth Lab',
        description: 'The page you requested could not be found. Explore our digital marketing services, case studies, or return to our homepage.',
        type: 'website',
        robots: 'noindex, follow',
      };
    }

    const title = pageMeta.title;
    const description = pageMeta.description;
    const ogImage = pageMeta.image || DEFAULT_IMAGE;
    const ogType = pageMeta.type || 'website';
    const robotsContent = pageMeta.robots || 'index, follow, max-image-preview:large';

    // 1. Standard HTML Head Metadata
    document.title = title;
    setCanonical(canonicalUrl);
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', robotsContent);

    // 2. Open Graph Metadata
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:type"]', 'content', ogType);
    setMeta('meta[property="og:site_name"]', 'content', 'Entrain Growth Lab');
    setMeta('meta[property="og:locale"]', 'content', 'en_US');
    setMeta('meta[property="og:image"]', 'content', ogImage);
    setMeta('meta[property="og:image:alt"]', 'content', title);
    setMeta('meta[property="og:image:width"]', 'content', '1200');
    setMeta('meta[property="og:image:height"]', 'content', '630');

    // 3. Twitter Card Metadata
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', ogImage);
    setMeta('meta[name="twitter:image:alt"]', 'content', title);

    // 4. Dynamic Schema.org JSON-LD Generation
    const graphSchemas = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Entrain Growth Lab',
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/entrain-growth-logo.png`,
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
        name: 'Entrain Growth Lab',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
    ];

    // Add BreadcrumbList schema if breadcrumbs are present
    if (pageMeta.breadcrumb && pageMeta.breadcrumb.length > 0) {
      graphSchemas.push({
        '@type': 'BreadcrumbList',
        itemListElement: pageMeta.breadcrumb.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.url === '/' ? '/' : crumb.url}`,
        })),
      });
    }

    // Add Service Schema for service detail pages
    if (pageMeta.serviceType) {
      graphSchemas.push({
        '@type': 'Service',
        name: pageMeta.serviceType,
        serviceType: pageMeta.serviceType,
        description: pageMeta.description,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'Global',
        url: canonicalUrl,
      });
    }

    // Add BlogPosting Schema for blog articles
    if (isBlogPost && postData) {
      graphSchemas.push({
        '@type': 'BlogPosting',
        headline: postData.title,
        description: postData.excerpt,
        image: ogImage,
        datePublished: postData.date,
        dateModified: postData.date,
        author: {
          '@type': 'Organization',
          name: postData.author || 'Entrain Growth Lab',
          url: SITE_URL,
        },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      });
    }

    // Add JobPosting Schema for career pages
    if (isJobPost && jobData) {
      graphSchemas.push({
        '@type': 'JobPosting',
        title: jobData.title,
        description: jobData.summary,
        datePosted: jobData.datePosted,
        validThrough: jobData.validThrough,
        employmentType: 'FULL_TIME',
        hiringOrganization: {
          '@type': 'Organization',
          name: jobData.organization,
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

    setStructuredData(graphSchemas);
  }, [pathname]);

  return null;
}
