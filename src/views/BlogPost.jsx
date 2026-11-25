import React from 'react';
import { useParams, Link, Navigate } from '../lib/router';
import { ArrowLeft } from 'lucide-react';
import BlogCover from '../components/BlogCover';
import { blogPosts, getPostBySlug, categoryIcons } from '../data/blog';

// Inline markup in text: [link text](/path) and **bold**
function renderInline(text, onDark = false) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    const bold = /^\*\*(.+)\*\*$/.exec(label);
    const className = onDark
      ? 'text-white underline underline-offset-4 hover:text-white/80'
      : 'text-[#4355A5] underline underline-offset-4 hover:text-[#34448F]';
    const content = bold ? <strong className="font-bold">{bold[1]}</strong> : label;
    return /^(tel:|mailto:|https?:)/.test(href)
      ? <a key={i} href={href} className={className}>{content}</a>
      : <Link key={i} to={href} className={className}>{content}</Link>;
  });
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h3':
      return <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111] mt-8 mb-3">{block.text}</h3>;
    case 'link':
      return <p className="mb-6"><Link to={block.href} className="font-semibold text-[#4355A5] hover:underline">{block.text} ↗</Link></p>;
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
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-neutral-300/60 bg-white">
          <table className="w-full min-w-[520px] text-left text-sm sm:text-base">
            <thead className="bg-[#4355A5] text-white">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-neutral-200 align-top">
                  {row.map((cell, c) => (
                    <td key={c} className={`px-4 py-3 text-neutral-700 ${c === 0 ? 'font-semibold text-[#111111]' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'faq':
      return (
        <div className="faq-simple my-6 divide-y divide-[#101827]/15 border-y border-[#101827]/20">
          {block.items.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_2rem] items-center gap-3 py-5 text-left sm:py-6">
                <span className="font-display text-lg font-medium leading-snug tracking-[-0.02em] text-[#101827] sm:text-xl">{question}</span>
                <span className="faq-simple-toggle text-center text-2xl font-light text-[#4355A5]" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pb-6 pr-8 text-sm leading-relaxed text-[#101827]/70 sm:pb-8 sm:text-base">{answer}</p>
            </details>
          ))}
        </div>
      );
    case 'callout':
      return (
        <div className="my-10 rounded-3xl bg-[#4355A5] px-6 py-6 sm:px-8 sm:py-7 text-white shadow-lg shadow-[#4355A5]/20">
          <p className="font-display text-lg sm:text-2xl font-semibold leading-snug tracking-tight">
            {renderInline(block.text, true)}
          </p>
        </div>
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
          {renderInline(block.text)}
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

          <div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-[#4355A5] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </div>

          <div>
            <BlogCover
              category={post.category}
              iconName={categoryIcons[post.category]}
              image={post.image}
              alt={`${post.title} illustration`}
              className="aspect-[3/2] rounded-3xl mb-8 shadow-lg"
            />
          </div>

          <div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
          </div>

          <div>
            <div className="text-sm font-mono pb-6 mb-8 border-b border-neutral-300/50">
              <span className="font-semibold text-neutral-800">{post.author}</span>
            </div>
          </div>

          <div>
            <div>
              {post.content.map((block, i) => (
                <ContentBlock key={i} block={block} />
              ))}
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-neutral-300/50">
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
            </div>
          )}

        </div>
      </article>

    </main>
  );
}
