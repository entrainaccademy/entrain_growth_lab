import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import CTA from '../sections/CTA';
import BlogCover from '../components/BlogCover';
import { blogPosts, categoryIcons } from '../data/blog';

export default function BlogPage({ onOpenConsultation }) {
  return (
    <main className="pt-24 sm:pt-32 pb-0 bg-[#F3F1EE] text-[#111111] min-h-screen">

      {/* Header */}
      <section className="pt-8 sm:pt-10 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal direction="up" delay={0.2}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111111] tracking-tight leading-tight mb-2">
              The Growth Journal
            </h1>
          </Reveal>

        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 sm:pb-32 px-4 sm:px-6 lg:px-12 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={0.05 * (index % 6)}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <BlogCover
                  category={post.category}
                  iconName={categoryIcons[post.category]}
                  image={post.image}
                  alt=""
                  className="aspect-[3/2]"
                />

                <div className="flex flex-col flex-grow p-6 sm:p-7">
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight leading-snug mb-3 group-hover:text-[#4355A5] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-neutral-600 text-sm leading-relaxed font-light flex-grow mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-end pt-2 mt-auto">
                    <ArrowUpRight className="w-4 h-4 text-[#4355A5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </section>

      <CTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
}
