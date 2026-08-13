import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://entrain-growth-lab.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/entrain-growth-logo.png`;

const pages = {
  '/': {
    title: 'Entrain Growth Lab | Digital Marketing & Growth Partners',
    description: 'Build sustainable business growth with Entrain Growth Lab through SEO, paid advertising, social media, content strategy and web development.',
  },
  '/about': {
    title: 'About Entrain Growth Lab | Strategy-Led Growth Partners',
    description: 'Meet Entrain Growth Lab, a strategy-led growth partner helping businesses achieve measurable, sustainable growth through honest marketing and consistent execution.',
  },
  '/services': {
    title: 'Digital Marketing Services | Entrain Growth Lab',
    description: 'Explore SEO, paid advertising, social media marketing, content strategy, branding and web development services designed to generate measurable business growth.',
  },
  '/work': {
    title: 'Selected Work & Case Studies | Entrain Growth Lab',
    description: 'Explore digital marketing, campaign and website projects delivered by Entrain Growth Lab for ambitious businesses and growing brands.',
  },
  '/workdetails': {
    title: 'Our Work & Client Results | Entrain Growth Lab',
    description: 'See how Entrain Growth Lab combines strategy, creative execution and digital experiences to help clients strengthen their online presence and grow.',
  },
  '/buckeez': {
    title: 'Buckeez Campaign Case Study | Entrain Growth Lab',
    description: 'Discover the digital campaign and creative work developed by Entrain Growth Lab for Buckeez.',
  },
  '/cobolt': {
    title: 'Cobolt Machineries Case Study | Entrain Growth Lab',
    description: 'Explore the campaign strategy and digital creative produced by Entrain Growth Lab for Cobolt Machineries.',
  },
  '/culinary': {
    title: 'Culinary Campaign Case Study | Entrain Growth Lab',
    description: 'View the culinary brand campaign and digital work created by Entrain Growth Lab.',
  },
  '/entrainlabs': {
    title: 'Entrain Labs Project Case Study | Entrain Growth Lab',
    description: 'Explore the Entrain Labs digital project, including strategy, design and execution by Entrain Growth Lab.',
  },
  '/blog': {
    title: 'The Growth Journal | Entrain Growth Lab Blog',
    description: 'Strategy notes, case studies and organic growth playbooks from Entrain Growth Lab, covering SEO, social media, content and paid-free customer acquisition.',
  },
  '/testimonials': {
    title: 'Client Testimonials | Entrain Growth Lab',
    description: 'Read what clients say about working with Entrain Growth Lab on strategy, marketing, campaigns and digital growth.',
  },
  '/contact': {
    title: 'Contact Entrain Growth Lab | Book a Consultation',
    description: 'Contact Entrain Growth Lab to discuss SEO, paid advertising, social media, web development or a tailored strategy for your business.',
  },
  '/careers': {
    title: 'Careers at Entrain Growth Lab',
    description: 'Explore career opportunities at Entrain Growth Lab and learn about joining our team of strategists, creatives and digital growth specialists.',
  },
  '/privacy': {
    title: 'Privacy Policy | Entrain Growth Lab',
    description: 'Read the Entrain Growth Lab privacy policy and learn how information submitted through this website is handled.',
  },
  '/terms': {
    title: 'Terms of Service | Entrain Growth Lab',
    description: 'Review the terms governing use of the Entrain Growth Lab website and services.',
  },
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

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || pages['/'];
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;

    document.title = page.title;
    setMeta('meta[name="description"]', 'content', page.description);
    setMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large');
    setMeta('meta[property="og:title"]', 'content', page.title);
    setMeta('meta[property="og:description"]', 'content', page.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:image"]', 'content', DEFAULT_IMAGE);
    setMeta('meta[property="og:image:alt"]', 'content', 'Entrain Growth Lab');
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', page.title);
    setMeta('meta[name="twitter:description"]', 'content', page.description);
    setMeta('meta[name="twitter:image"]', 'content', DEFAULT_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}
