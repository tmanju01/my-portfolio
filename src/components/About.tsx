"use client";

import { portfolioData } from "@/data/portfolio";
import { Download, Globe, Server, Database, Cpu, Mail, Phone, MapPin } from "lucide-react";

const categoryIcons = {
  Globe: Globe,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
};

export default function About() {
  return (
    <section id="about" aria-label="About Section" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background blur overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full mt-4" />
        </div>

        {/* 2-Column Main Layout matching swapnilpatel.vercel.app */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-20">
          {/* Left Column: Bio Paragraph, Download CV & Contact Grid */}
          <div className="w-full lg:w-3/5 flex flex-col items-start">
            <div className="text-base md:text-lg text-slate-300 leading-relaxed font-normal mb-8 space-y-4">
              <p>{portfolioData.bio}</p>
              <p>
                Experienced in architecting modular component systems, managing complex application state, optimizing API communication layers, and building production-ready, scalable web solutions.
              </p>
            </div>

            {/* Download CV Button */}
            <div className="mb-10">
              <a
                href={portfolioData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-violet-500/10 border border-violet-500/40 hover:bg-violet-600 hover:text-white text-violet-400 rounded-xl transition-all duration-300 font-semibold text-lg group active:scale-95 shadow-lg shadow-violet-950/30"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-800/80 pt-8 w-full">
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-violet-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email
                </span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-sm font-medium text-slate-200 hover:text-violet-400 transition-colors truncate"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-violet-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Phone
                </span>
                <a
                  href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-medium text-slate-200 hover:text-violet-400 transition-colors"
                >
                  {portfolioData.phone}
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-violet-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Location
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {portfolioData.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Highlight Stat Cards */}
          <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-md">
                3+
              </h3>
              <p className="text-base text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-md">
                3+
              </h3>
              <p className="text-base text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                Production SaaS Projects
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl hover:border-violet-500/50 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-md">
                100%
              </h3>
              <p className="text-base text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Skill Category Domain Cards */}
        <div className="border-t border-slate-800/80 pt-16">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.skillCategories.map((category) => {
              const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons] || Globe;

              return (
                <div
                  key={category.title}
                  className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
                >
                  <div className="mb-4 bg-slate-900/60 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-800">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h4 className="text-lg font-semibold mb-4 text-slate-200">
                    {category.title}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded hover:text-white hover:bg-emerald-600/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
