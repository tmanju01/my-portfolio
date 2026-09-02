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
    <section id="about" aria-label="About Section" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      {/* Background blur overlays */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mt-4" />
        </div>

        {/* 2-Column Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between mb-20">
          {/* Left Column: Bio Paragraph, Download CV & Contact Grid */}
          <div className="w-full lg:w-3/5 flex flex-col items-start">
            <div className="text-base md:text-lg text-slate-700 leading-relaxed font-normal mb-8 space-y-4">
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-sky-50 border border-sky-200 hover:bg-sky-500 hover:text-white text-sky-700 rounded-xl transition-all duration-300 font-semibold text-lg group active:scale-95 shadow-md shadow-sky-100/60"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-sky-100 pt-8 w-full">
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-sky-600 uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-500" /> Email
                </span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors truncate"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-sky-600 uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-500" /> Phone
                </span>
                <a
                  href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors"
                >
                  {portfolioData.phone}
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-sky-600 uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" /> Location
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {portfolioData.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Highlight Stat Cards */}
          <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="bg-white border border-sky-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-sky-100/50 hover:border-sky-300 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-xs">
                3+
              </h3>
              <p className="text-base text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                Years Experience
              </p>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-sky-100/50 hover:border-sky-300 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-xs">
                3+
              </h3>
              <p className="text-base text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                Production SaaS Projects
              </p>
            </div>

            <div className="bg-white border border-sky-100 p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg shadow-sky-100/50 hover:border-sky-300 transition-all hover:-translate-y-1 group">
              <h3 className="text-5xl md:text-6xl font-extrabold text-gradient mb-2 drop-shadow-xs">
                100%
              </h3>
              <p className="text-base text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
