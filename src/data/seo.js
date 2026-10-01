export const SITE_URL = 'https://www.entraingrowthpartners.com';
export const DEFAULT_IMAGE = `${SITE_URL}/entrain-growth-logo.png`;

// Primary static pages metadata
export const staticPages = {
  '/': {
    title: 'Entrain Growth Partners | Digital Marketing Agency',
    description: 'Entrain Growth Partners builds tailored, organic-first growth strategies through SEO, performance marketing, social media, web development and strategic consulting.',
    type: 'website',
  },
  '/about': {
    title: 'About Us | Strategy-Led Growth Partners | Entrain Growth Partners',
    description: 'Learn about Entrain Growth Partners, an honest, strategy-led growth partner helping ambitious businesses achieve sustainable compounding revenue and brand reach.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ],
  },
  '/services': {
    title: 'Digital Marketing & Growth Services | Entrain Growth Partners',
    description: 'Explore full-spectrum growth services: Search Engine Optimization (SEO), Paid Ads, Social Media, Content Marketing, Web Development, and Brand Strategy.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
    ],
  },
  // Dedicated Service Detail Pages
  '/services/digital-marketing': {
    title: 'Digital Marketing Strategy & Growth | Entrain Growth Partners',
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
    title: 'Social Media Marketing & Content Strategy | Entrain Growth Partners',
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
    title: 'Search Engine Optimization (SEO) Agency | Entrain Growth Partners',
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
    title: 'Performance Marketing (Meta & Google Ads) | Entrain Growth Partners',
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
    title: 'Content Marketing & Organic Distribution | Entrain Growth Partners',
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
    title: 'Branding & Identity Design Studio | Entrain Growth Partners',
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
    title: 'Web Design & Modern Development | Entrain Growth Partners',
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
    title: 'Marketing Strategy & Growth Consulting | Entrain Growth Partners',
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
    title: 'Selected Client Work & Growth Case Studies | Entrain Growth Partners',
    description: 'Review proven client case studies, digital marketing campaigns, and custom web experiences delivered by Entrain Growth Partners for growing brands.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
    ],
  },
  '/workdetails': {
    title: 'Client Results & Project Showcase | Entrain Growth Partners',
    description: 'In-depth breakdown of creative direction, campaign execution, and measurable growth results achieved across client engagements.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work Details', url: '/workdetails' },
    ],
  },
  '/buckeez': {
    title: 'Buckeez Case Study | Brand & Campaign Growth | Entrain Growth Partners',
    description: 'See how Entrain Growth Partners developed brand identity guidelines, social strategy, and creative campaigns for Buckeez.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Buckeez', url: '/buckeez' },
    ],
  },
  '/cobolt': {
    title: 'Cobolt Machineries Case Study | Entrain Growth Partners',
    description: 'Discover how strategic positioning and digital creative elevated Cobolt Machineries into an industry-leading industrial presence.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Cobolt', url: '/cobolt' },
    ],
  },
  '/culinary': {
    title: 'Entrain Culinary Academy Case Study | Entrain Growth Partners',
    description: 'Explore how organic search optimization and brand storytelling scaled admissions for Entrain Culinary Academy.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Work', url: '/work' },
      { name: 'Culinary Academy', url: '/culinary' },
    ],
  },
  '/entrainlabs': {
    title: 'Entrain Labs Case Study | Tech & Web Design | Entrain Growth Partners',
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
    title: 'Client Reviews & Testimonials | Entrain Growth Partners',
    description: 'What founders, business owners, and marketing directors say about collaborating with Entrain Growth Partners as their growth partner.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Testimonials', url: '/testimonials' },
    ],
  },
  '/contact': {
    title: 'Contact Us | Book a Growth Strategy Consultation | Entrain Growth Partners',
    description: 'Connect with Entrain Growth Partners for a 30-minute growth strategy consultation. Discuss SEO, performance marketing, or custom web development.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  '/careers': {
    title: 'Careers at Entrain Growth Partners | Join Our Growth Team',
    description: 'Explore open roles for marketing strategists, creative designers, copywriters, and developers at Entrain Growth Partners.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Careers', url: '/careers' },
    ],
  },
  '/privacy': {
    title: 'Privacy Policy | Entrain Growth Partners',
    description: 'Our privacy commitment: how Entrain Growth Partners collects, protects, and respects your data and privacy.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' },
    ],
  },
  '/terms': {
    title: 'Terms of Service | Entrain Growth Partners',
    description: 'Read the terms of service and website usage agreements for Entrain Growth Partners.',
    type: 'website',
    breadcrumb: [
      { name: 'Home', url: '/' },
      { name: 'Terms of Service', url: '/terms' },
    ],
  },
};

// Route aliases mapped to their primary canonical paths
export const canonicalAliases = {
  '/services/branding': '/services/branding-creative-design',
  '/services/meta-ads': '/services/performance-marketing',
  '/services/google-ads': '/services/performance-marketing',
  '/services/web-design-development': '/services/website-design-development',
};
