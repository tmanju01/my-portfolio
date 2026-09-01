"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" aria-label="Education & Certifications" className="py-24 relative bg-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Education &amp; Certifications</h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full" />
        </div>

        {/* Education Grid Cards */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {portfolioData.education.map((item) => (
            <div
              key={item.degree}
              className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="bg-violet-500/10 p-3 rounded-xl border border-violet-500/20 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-1">{item.degree}</h3>
                <p className="text-violet-400 font-medium text-lg mb-4">
                  {item.institution} — {item.location}
                </p>
                {item.details && (
                  <p className="text-slate-400 text-sm leading-relaxed font-normal">{item.details}</p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/40 flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-section */}
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-200 flex items-center gap-2">
              <Award className="text-violet-400 w-6 h-6" />
              <span>Professional Certifications</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/40 transition-colors"
                >
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{cert.title}</h4>
                  <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  {cert.year && (
                    <span className="inline-block mt-3 text-xs text-violet-400 font-medium px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20">
                      {cert.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
