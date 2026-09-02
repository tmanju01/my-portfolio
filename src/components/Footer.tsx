"use client";

import { portfolioData } from "@/data/portfolio";
import { CodeXml, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-sky-50 via-cyan-50/50 to-sky-50 border-t border-sky-100 text-slate-700 text-sm py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#home" aria-label="Go to top of page" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-sky-500/20">
            <span className="text-base font-extrabold text-white tracking-wider">MT</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
            {portfolioData.name}
          </span>
        </a>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-xs text-slate-600">
          <span>&copy; {currentYear} {portfolioData.name}. Built with Next.js &amp;</span>
          <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-500 inline-block animate-pulse" />
        </p>
      </div>
    </footer>
  );
}
