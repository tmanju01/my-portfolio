"use client";

import { portfolioData } from "@/data/portfolio";
import { Globe, Server, Database, Cpu } from "lucide-react";

const categoryIcons = {
  Globe: Globe,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Professional Skillset</h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full mt-4" />
        </div>

        {/* Skills organized by category */}
        <div className="space-y-10">
          {portfolioData.skillCategories.map((category) => {
            const IconComp = categoryIcons[category.icon as keyof typeof categoryIcons] || Globe;
            return (
              <div key={category.title}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-violet-500/10 p-2.5 rounded-lg border border-violet-500/20">
                    <IconComp className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">{category.title}</h3>
                </div>

                {/* Individual skill cards for this category */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-slate-800/40 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:shadow-md hover:shadow-violet-500/10 hover:scale-110 cursor-default flex items-center justify-center text-center group min-h-20"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition-colors line-clamp-2">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
