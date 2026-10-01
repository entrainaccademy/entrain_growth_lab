import { notFound, redirect } from 'next/navigation';
import App from '../../src/App';
import { blogPosts, getPostBySlug } from '../../src/data/blog';
import { jobs, getJobBySlug } from '../../src/data/careers';
import { staticRoutes } from '../../src/data/routes';
import { SITE_URL, DEFAULT_IMAGE, staticPages, canonicalAliases } from '../../src/data/seo';
import { getStructuredData } from '../../src/data/structured-data';

function getPath(slug = []) {
  return slug.length ? `/${slug.join('/')}` : '/';
}

function getPage(path) {
  const canonicalPath = canonicalAliases[path] || path;
  if (staticRoutes.includes(path) || canonicalAliases[path]) {
    return { path: canonicalPath, ...staticPages[canonicalPath] };
  }
  if (path.startsWith('/blog/')) {
    const post = getPostBySlug(path.slice('/blog/'.length));
    if (post) return {
      path, title: `${post.title} | Entrain Growth Partners`,
      description: post.excerpt, type: 'article', image: post.image, post,
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: path },
      ],
    };
  }
  if (path.startsWith('/careers/')) {
    const job = getJobBySlug(path.slice('/careers/'.length));
    if (job) return {
      path, title: `${job.title} | Careers at ${job.organization}`,
      description: job.briefSummary, type: 'website', job,
      breadcrumb: [
        { name: 'Home', url: '/' },
        { name: 'Careers', url: '/careers' },
        { name: job.title, url: path },
      ],
    };
  }
  return null;
}

export async function generateStaticParams() {
  const paths = [
    ...staticRoutes,
    ...Object.keys(canonicalAliases),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    ...jobs.map((job) => `/careers/${job.slug}`),
  ];
  return paths.map((path) => ({ slug: path === '/' ? [] : path.slice(1).split('/') }));
}

export async function generateMetadata({ params }) {
  const path = getPath((await params).slug);
  const page = getPage(path);
  if (!page) return {};

  const url = `${SITE_URL}${page.path}`;
  const image = page.image ? `${SITE_URL}${page.image}` : DEFAULT_IMAGE;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
    openGraph: {
      title: page.title, description: page.description, url,
      siteName: 'Entrain Growth Partners', type: page.type || 'website',
      locale: 'en_US', images: [{ url: image, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image', title: page.title,
      description: page.description, images: [image],
    },
  };
}

export default async function Page({ params }) {
  const path = getPath((await params).slug);
  const page = getPage(path);
  if (!page) {
    if (path.startsWith('/blog/')) redirect('/blog');
    if (path.startsWith('/careers/')) redirect('/careers');
    notFound();
  }
  const schema = JSON.stringify(getStructuredData(page)).replace(/</g, '\\u003c');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <App />
    </>
  );
}
