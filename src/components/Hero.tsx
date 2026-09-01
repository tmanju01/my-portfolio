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
      className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden bg-[#0f172a]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[130px] -z-0 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-pink-600/15 rounded-full blur-[130px] -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & Actions */}
        <div className="md:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for opportunities</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-slate-100">
            Hi, I&apos;m <br />
            <span className="text-gradient drop-shadow-[0_2px_15px_rgba(139,92,246,0.3)]">
              {portfolioData.name}
            </span>
          </h1>

          {/* Animated Role Subtitle */}
          <p className="text-xl sm:text-2xl text-violet-400 font-semibold mb-4 min-h-[36px] flex items-center gap-1">
            <span>{typingText}</span>
            <span className="inline-block w-0.5 h-6 bg-violet-400 animate-pulse ml-0.5" />
          </p>

          {/* Subhead Description */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed font-normal">
            {portfolioData.subTitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-violet-600/25 active:scale-95 cursor-pointer"
            >
              View Projects
            </a>
            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 border border-slate-700 hover:border-violet-500 hover:text-violet-400 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2 group hover:bg-violet-500/5 active:scale-95"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
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
              className="p-3 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full transition-all border border-slate-700/50 hover:border-violet-500/50 hover:scale-110"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full transition-all border border-slate-700/50 hover:border-violet-500/50 hover:scale-110"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email profile"
              className="p-3 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full transition-all border border-slate-700/50 hover:border-violet-500/50 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Circular Round Profile Image */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-violet-600 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(139,92,246,0.35)] transition-all duration-500 hover:scale-105">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0f172a]">
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
