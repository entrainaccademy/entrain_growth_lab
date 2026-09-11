import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal';
import CTA from '../sections/CTA';
import BlogCover from '../components/BlogCover';
import { blogPosts, getPostBySlug, categoryIcons } from '../data/blog';

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'list':
      return (
        <ul className="space-y-3 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4355A5] mt-3 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="my-8 pl-6 border-l-4 border-[#4355A5] text-xl sm:text-2xl font-serif italic text-[#101827]">
          {block.text}
        </blockquote>
      );
    case 'p':
    default:
      return (
        <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light mb-6">
          {block.text}
        </p>
      );
  }
}

export default function BlogPost({ onOpenConsultation }) {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#111111] min-h-screen">

      <article className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">

          <Reveal direction="down" delay={0.05}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-[#4355A5] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </Reveal>

          <Reveal direction="up" delay={0.12}>
            <BlogCover
              category={post.category}
              iconName={categoryIcons[post.category]}
              image={post.image}
              alt={`${post.title} illustration`}
              className="aspect-[3/2] rounded-3xl mb-8 shadow-lg"
            />
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="text-sm font-mono pb-6 mb-8 border-b border-neutral-300/50">
              <span className="font-semibold text-neutral-800">{post.author}</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div>
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>
          </Reveal>

          {relatedPosts.length > 0 && (
            <Reveal direction="up" delay={0.1} className="mt-16 pt-10 border-t border-neutral-300/50">
              <h3 className="font-display text-lg font-bold text-[#111111] mb-5">More on {post.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    to={`/blog/${rp.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="font-display font-bold text-[#111111] group-hover:text-[#4355A5] transition-colors">
                      {rp.title}
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          )}

        </div>
      </article>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
