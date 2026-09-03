"use client";

import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" aria-label="Education & Certifications" className="py-12 relative bg-sky-50/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Education &amp; Certifications</h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full" />
        </div>

        {/* Education Grid Cards */}
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {portfolioData.education.map((item) => (
            <div
              key={item.degree}
              className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
                    <Calendar className="w-4 h-4 text-sky-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                <p className="text-sky-600 font-semibold text-lg mb-4">
                  {item.institution} — {item.location}
                </p>
                {item.details && (
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">{item.details}</p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Sub-section */}
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <Award className="text-sky-600 w-6 h-6" />
              <span>Professional Certifications</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white p-6 rounded-xl border border-sky-100 shadow-sm hover:border-sky-300 transition-colors"
                >
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{cert.title}</h4>
                  <p className="text-slate-600 text-sm">{cert.issuer}</p>
                  {cert.year && (
                    <span className="inline-block mt-3 text-xs text-sky-700 font-semibold px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200">
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
