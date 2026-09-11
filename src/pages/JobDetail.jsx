import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  UserCheck, 
  Check, 
  Send, 
  Mail
} from 'lucide-react';
import { getJobBySlug } from '../data/careers';

export default function JobDetail() {
  const { slug } = useParams();
  const job = getJobBySlug(slug);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const applyEmail = 'hr.entrain@gmail.com';
  const mailtoUrl = `mailto:${applyEmail}?subject=Application for ${encodeURIComponent(job.title)}&body=Hi Entrain Team,%0D%0A%0D%0AI am applying for the ${encodeURIComponent(job.title)} position.%0D%0A%0D%0AMy resume and portfolio/work links are attached.%0D%0A%0D%0AThank you,%0D%0A`;

  return (
    <main className="min-h-screen bg-[#F3F1EE] text-[#101827] pt-24 sm:pt-32 font-sans selection:bg-[#4355A5] selection:text-white">
      {/* Top Breadcrumb & Job Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-8 border-b border-neutral-300/70">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#4355A5] hover:text-[#101827] transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Openings
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs mb-3">
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full font-medium">
                  {job.employmentType}
                </span>
                <span className="text-neutral-600 bg-white border border-neutral-200/80 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-light">
                  <MapPin className="w-3 h-3 text-neutral-400" /> {job.location}
                </span>
                {job.department && (
                  <span className="text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                    {job.department}
                  </span>
                )}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101827] tracking-tight">
                {job.title}
              </h1>

              {/* Reporting */}
              {job.reportsTo && (
                <div className="text-xs sm:text-sm text-neutral-500 mt-3 flex items-center gap-1.5">
                  {/* <UserCheck className="w-3.5 h-3.5 text-[#4355A5]" /> Reports to: {job.reportsTo} */}
                </div>
              )}
            </div>

            {/* Quick Apply CTA */}
            <div className="shrink-0">
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#4355A5] text-white text-xs sm:text-sm font-semibold hover:bg-[#344485] transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5" /> Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* About the Role */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-sm space-y-3">
            <h2 className="font-display text-xl font-bold text-[#101827]">
              About the Role
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
              {job.summary}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-sm space-y-6">
            <h2 className="font-display text-xl font-bold text-[#101827]">
              Key Responsibilities
            </h2>

            <div className="space-y-6">
              {job.responsibilities.map((group, idx) => (
                <div key={idx} className="space-y-2.5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#4355A5]">
                    {group.category}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                        <Check className="w-4 h-4 text-[#4355A5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Required Skills */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-[#101827]">
                Required Skills
              </h2>
              <ul className="space-y-2">
                {job.requiredSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4355A5] mt-2 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {job.softwareSkills && (
                <div className="pt-3 border-t border-neutral-100">
                  <span className="text-xs font-mono text-[#4355A5] block mb-2 font-bold uppercase">Software / Tools:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {job.softwareSkills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-[#F3F1EE] text-xs text-neutral-700 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Candidate Profile & Qualifications */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/90 shadow-sm space-y-4">
              <h2 className="font-display text-lg font-bold text-[#101827]">
                Qualifications & Profile
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-700 font-light">
                <div>
                  <span className="font-semibold text-neutral-900 block mb-1">Education / Experience:</span>
                  <ul className="space-y-1.5">
                    {job.qualifications.map((q, idx) => (
                      <li key={idx}>• {q}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <span className="font-semibold text-neutral-900 block mb-1">Languages:</span>
                  <p>{job.languages.join(', ')}</p>
                </div>

                {job.preferredCandidate && (
                  <div className="pt-3 border-t border-neutral-100">
                    <span className="font-semibold text-neutral-900 block mb-1">Preferred:</span>
                    <ul className="space-y-1">
                      {job.preferredCandidate.map((p, idx) => (
                        <li key={idx}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Application Box */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#4355A5]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-display text-xl font-bold text-[#101827]">
                Interested in this role?
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm font-light">
                Email your resume and portfolio to <a href={`mailto:${applyEmail}`} className="font-medium text-[#4355A5] hover:underline">{applyEmail}</a>.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={mailtoUrl}
                className="px-6 py-2.5 rounded-full bg-[#4355A5] text-white text-xs sm:text-sm font-semibold hover:bg-[#344485] transition-all flex items-center gap-2 shadow-sm"
              >
                <Mail className="w-4 h-4" /> Email Resume
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
