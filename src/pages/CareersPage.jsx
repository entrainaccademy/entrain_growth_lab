import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Video,
  Share2,
  Search,
  BriefcaseBusiness,
  Mail
} from 'lucide-react';
import { getAllJobs } from '../data/careers';

export default function CareersPage() {
  const allJobs = getAllJobs();

  const getRoleIcon = (id) => {
    switch (id) {
      case 'videographer-cum-video-editor':
        return Video;
      case 'social-media-manager':
        return Share2;
      case 'seo-executive-specialist':
        return Search;
      default:
        return BriefcaseBusiness;
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F1EE] text-[#101827] pt-24 sm:pt-32 font-sans selection:bg-[#4355A5] selection:text-white">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-10 text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4355A5] bg-[#4355A5]/10 px-3 py-1 rounded-full inline-block mb-4">
          We're Hiring
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#101827]">
          Join Our Team
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
          Open positions at Entrain Growth Lab in Manjeri, Kerala.
        </p>
      </section>

      {/* Brief Job Listings */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {allJobs.map((job) => {
            const Icon = getRoleIcon(job.id);

            return (
              <article 
                key={job.id}
                className="group bg-white p-5 sm:p-6 rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-[#4355A5]/40 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3F1EE] group-hover:bg-[#4355A5] group-hover:text-white transition-colors flex items-center justify-center shrink-0 text-[#4355A5] mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-2">
                    {/* Badges without redundant company or location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full font-medium">
                        {job.employmentType}
                      </span>
                      <span className="text-neutral-500 font-light">
                        {job.department}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#101827] group-hover:text-[#4355A5] transition-colors leading-snug">
                      <Link to={`/careers/${job.slug}`}>
                        {job.title}
                      </Link>
                    </h2>

                    {/* Short Description */}
                    <p className="text-neutral-600 text-sm font-light line-clamp-2 max-w-xl">
                      {job.briefSummary}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.highlights.map((h, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-[#F3F1EE] text-neutral-600 text-xs">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="sm:shrink-0 pt-2 sm:pt-0">
                  <Link
                    to={`/careers/${job.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#101827] group-hover:bg-[#4355A5] text-white text-xs font-semibold transition-all"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* General spontaneous application footer box */}
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl border border-neutral-200/90 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-base text-[#101827]">
              Don't see a role that fits?
            </h3>
            <p className="text-neutral-500 text-xs sm:text-sm font-light mt-0.5">
              Send your resume and work samples to <a href="mailto:hr.entrain@gmail.com" className="font-medium text-[#4355A5] hover:underline">hr.entrain@gmail.com</a>.
            </p>
          </div>
          <a
            href="mailto:hr.entrain@gmail.com?subject=Job%20Inquiry%20-%20Entrain%20Growth%20Lab"
            className="px-5 py-2.5 rounded-full bg-[#101827] hover:bg-[#4355A5] text-white text-xs font-semibold transition-colors shrink-0 flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5" /> Email HR Team
          </a>
        </div>
      </section>
    </main>
  );
}
