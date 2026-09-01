"use client";

import { portfolioData } from "@/data/portfolio";
import { CodeXml, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gradient-to-r from-violet-600/10 via-slate-900/50 to-violet-600/10 border-t border-violet-500/30 text-slate-400 text-sm">
      <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <CodeXml className="text-violet-500 w-5 h-5" />
          <span className="font-bold text-slate-100">
            {portfolioData.name}
            <span className="text-violet-500">.</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>&copy; {currentYear} {portfolioData.name}. Built with Next.js &amp;</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block animate-pulse" />
        </p>
      </div>
    </footer>
  );
}
