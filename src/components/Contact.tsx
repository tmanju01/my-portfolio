"use client";

import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact Section" className="py-12 bg-white relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mb-6" />
          <p className="text-slate-600 text-lg font-normal">
            Feel free to reach out for fullstack opportunities, project collaborations, or just a friendly chat.
          </p>
        </div>

        {/* Centered 3 Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.email}`}
              className="bg-white p-6 rounded-2xl border border-sky-100 shadow-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/80 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 text-sky-600 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300 mb-4 shadow-2xs">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email</h4>
              <p className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors truncate max-w-full">
                {portfolioData.email}
              </p>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${portfolioData.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-2xl border border-sky-100 shadow-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/80 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="bg-cyan-50 p-4 rounded-2xl border border-cyan-200 text-cyan-600 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300 mb-4 shadow-2xs">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">WhatsApp</h4>
              <p className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                {portfolioData.phone}
              </p>
            </a>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-sky-100 shadow-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/80 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
              <div className="bg-teal-50 p-4 rounded-2xl border border-teal-200 text-teal-600 group-hover:bg-gradient-to-br group-hover:from-sky-500 group-hover:to-cyan-600 group-hover:text-white transition-all duration-300 mb-4 shadow-2xs">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</h4>
              <p className="text-sm font-bold text-slate-900">{portfolioData.location}</p>
            </div>
          </div>

          {/* Centered Social Profiles Row */}
          <div className="flex justify-center items-center gap-4">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-4 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full border border-sky-200 shadow-sm transition-all hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-4 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full border border-sky-200 shadow-sm transition-all hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="p-4 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full border border-sky-200 shadow-sm transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
