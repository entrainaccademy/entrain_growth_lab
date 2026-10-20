import '../src/index.css';
import { SITE_URL } from '../src/data/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Digital Marketing Agency in Malappuram, Kerala | Entrain Growth Partners',
  description: 'Entrain Growth Partners is a digital marketing company in Malappuram, Kerala offering SEO, social media marketing, branding and performance marketing to grow your business.',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/entrain-growth-logo.png',
    apple: '/entrain-growth-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="aK7a9fF9OpGCScXWPFONTXnUHa03x4PJF58a1CF9ihY" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F8FAFC] text-[#0B0F17] antialiased selection:bg-[#3B51A3] selection:text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
