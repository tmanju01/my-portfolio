"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const typingText = useTypingEffect(portfolioData.roles);

  return (
    <section
      id="home"
      aria-label="Hero — Introduction"
      className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden bg-slate-50"
    >
      {/* Ambient background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-[130px] -z-0 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-[130px] -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & Actions */}
        <div className="md:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-emerald-300 rounded-full bg-emerald-50 text-emerald-800 text-sm font-semibold shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-slate-900">
            Hi, I&apos;m <br />
            <span className="text-gradient drop-shadow-[0_2px_15px_rgba(2,132,199,0.2)]">
              {portfolioData.name}
            </span>
          </h1>

          {/* Animated Role Subtitle */}
          <p className="text-xl sm:text-2xl text-sky-600 font-semibold mb-4 min-h-[36px] flex items-center gap-1">
            <span>{typingText}</span>
            <span className="inline-block w-0.5 h-6 bg-sky-500 animate-pulse ml-0.5" />
          </p>

          {/* Subhead Description */}
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-normal">
            {portfolioData.subTitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-sky-500/25 active:scale-95 cursor-pointer"
            >
              View Projects
            </a>
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 bg-white border border-sky-200 hover:border-sky-500 hover:text-sky-700 text-slate-700 rounded-xl font-semibold transition-all flex items-center gap-2 group hover:bg-sky-50 shadow-sm active:scale-95"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-sky-600" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4" role="list" aria-label="Social profiles">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="p-3.5 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full transition-all border border-sky-100 hover:border-sky-300 shadow-xs hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-3.5 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full transition-all border border-sky-100 hover:border-sky-300 shadow-xs hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email profile"
              className="p-3.5 bg-white hover:bg-sky-50 hover:text-sky-600 text-slate-600 rounded-full transition-all border border-sky-100 hover:border-sky-300 shadow-xs hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Circular Round Profile Image */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2.5 bg-gradient-to-tr from-sky-400 via-cyan-500 to-teal-400 shadow-[0_10px_40px_rgba(2,132,199,0.25)] transition-all duration-500 hover:scale-105">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
              <Image
                src="/profile-pic.png"
                alt={portfolioData.name}
                fill
                priority
                className="object-cover object-[center_15%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
