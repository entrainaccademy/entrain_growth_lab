// Single source of truth for the full service list (Services page + footer).
export const serviceGroups = [
  {
    title: 'Digital marketing services',
    route: '/services/digital-marketing',
    items: [
      { title: 'SEO, AEO & GEO', route: '/services/seo', desc: 'Rank in Google, Maps and AI answers with technical SEO, answer-ready content, and Google Business Profile optimization.' },
      { title: 'Social Media Marketing', route: '/services/social-media-marketing', desc: 'Grow your audience with platform-specific content and community strategy.' },
      { title: 'Performance Marketing', route: '/services/performance-marketing', desc: 'Google Ads and Meta Ads for measurable leads, sales, and growth.' },
      { title: 'Content Marketing', route: '/services/content-marketing', desc: 'Useful, search-friendly content that educates buyers and builds authority.' },
      { title: 'Ecommerce Solutions', route: '/services/website-design-development', desc: 'Online stores and product pages built to turn browsers into buyers.' },
    ],
  },
  {
    title: 'Design and development services',
    route: '/services/website-design-development',
    items: [
      { title: 'Web Design', route: '/services/website-design-development', desc: 'Build a responsive website that communicates clearly and turns visits into enquiries.' },
      { title: 'App & Software Development', route: '/services/website-design-development', desc: 'Custom apps and software built around how your business operates.' },
      { title: 'Graphic Design', route: '/services/branding-creative-design', desc: 'Posters, social creatives, and marketing collateral that look consistent and professional.' },
    ],
  },
  {
    title: 'Branding',
    route: '/services/branding-creative-design',
    items: [
      { title: 'Branding', route: '/services/branding-creative-design', desc: 'Create a distinctive identity and a consistent presence across every channel.', inFooter: false },
      { title: 'Logo Design', route: '/services/branding-creative-design', desc: 'A memorable logo and visual identity that makes your business instantly recognizable.' },
      { title: 'Video Production', route: '/services/branding-creative-design', desc: 'Reels, brand videos, and product films that show your business at its best.' },
    ],
  },
];
