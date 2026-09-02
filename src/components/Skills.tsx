"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Sparkles, Code2, Layers, CheckCircle2 } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaBootstrap,
  FaNpm,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiMui,
  SiWebpack,
  SiMongoose,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

// Map each skill name to its specific brand icon & color
const skillIconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  "React.js": { icon: FaReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10 border-[#61DAFB]/30" },
  "Next.js": { icon: SiNextdotjs, color: "text-slate-900", bg: "bg-slate-100 border-slate-300" },
  "JavaScript (ES6+)": { icon: FaJsSquare, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10 border-[#F7DF1E]/30" },
  "TypeScript": { icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10 border-[#3178C6]/30" },
  "HTML5": { icon: FaHtml5, color: "text-[#E34F26]", bg: "bg-[#E34F26]/10 border-[#E34F26]/30" },
  "CSS3": { icon: FaCss3Alt, color: "text-[#1572B6]", bg: "bg-[#1572B6]/10 border-[#1572B6]/30" },
  "Vanilla JS": { icon: SiJavascript, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10 border-[#F7DF1E]/30" },
  "Redux": { icon: SiRedux, color: "text-[#764ABC]", bg: "bg-[#764ABC]/10 border-[#764ABC]/30" },
  "Node.js": { icon: FaNodeJs, color: "text-[#339933]", bg: "bg-[#339933]/10 border-[#339933]/30" },
  "Express.js": { icon: SiExpress, color: "text-slate-800", bg: "bg-slate-100 border-slate-300" },
  "MongoDB": { icon: SiMongodb, color: "text-[#47A248]", bg: "bg-[#47A248]/10 border-[#47A248]/30" },
  "Mongoose": { icon: SiMongoose, color: "text-[#880000]", bg: "bg-[#880000]/10 border-[#880000]/30" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10 border-[#06B6D4]/30" },
  "Material UI": { icon: SiMui, color: "text-[#007FFF]", bg: "bg-[#007FFF]/10 border-[#007FFF]/30" },
  "Bootstrap": { icon: FaBootstrap, color: "text-[#7952B3]", bg: "bg-[#7952B3]/10 border-[#7952B3]/30" },
  "Git & GitHub": { icon: FaGitAlt, color: "text-[#F05032]", bg: "bg-[#F05032]/10 border-[#F05032]/30" },
  "Postman": { icon: SiPostman, color: "text-[#FF6C37]", bg: "bg-[#FF6C37]/10 border-[#FF6C37]/30" },
  "OpenAI Integration": { icon: TbBrandOpenai, color: "text-[#10A37F]", bg: "bg-[#10A37F]/10 border-[#10A37F]/30" },
  "Docker": { icon: FaDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10 border-[#2496ED]/30" },
  "NPM/Yarn": { icon: FaNpm, color: "text-[#CB3837]", bg: "bg-[#CB3837]/10 border-[#CB3837]/30" },
  "Webpack": { icon: SiWebpack, color: "text-[#8DD6F9]", bg: "bg-[#8DD6F9]/10 border-[#8DD6F9]/30" },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...portfolioData.skillCategories.map((c) => c.title)];

  const allSkillsList = portfolioData.skillCategories.flatMap((category) =>
    category.skills.map((skillName) => ({
      name: skillName,
      category: category.title,
    }))
  );

  const filteredSkills =
    selectedCategory === "All"
      ? allSkillsList
      : allSkillsList.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" aria-label="Skills & Expertise" className="py-24 bg-sky-50/50 relative overflow-hidden scroll-mt-20">
      {/* Ambient glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sky-300/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Skills &amp; Technologies
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mt-4 mb-4" />
          <p className="text-slate-600 max-w-2xl text-base md:text-lg font-normal">
            Explore my core technical stack, libraries, and frameworks used to build scalable web applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-500 to-cyan-600 text-white shadow-md shadow-sky-500/25 scale-105"
                      : "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-600 border border-sky-200/80 shadow-2xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Box-Type Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-16">
          {filteredSkills.map((skillItem, idx) => {
            const iconData = skillIconMap[skillItem.name] || {
              icon: Code2,
              color: "text-sky-600",
              bg: "bg-sky-50 border-sky-200",
            };
            const IconComponent = iconData.icon;

            return (
              <div
                key={skillItem.name + idx}
                className="bg-white rounded-2xl p-5 border border-sky-100/90 shadow-sm hover:shadow-xl hover:shadow-sky-100/80 hover:border-sky-400 transition-all duration-300 flex flex-col items-center justify-between text-center group hover:-translate-y-1.5 relative overflow-hidden min-h-[140px]"
              >
                {/* Subtle sky top accent border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Box Icon Container */}
                <div className={`w-14 h-14 rounded-2xl mb-3 flex items-center justify-center border ${iconData.bg} group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                  <IconComponent className={`w-7 h-7 ${iconData.color}`} />
                </div>

                {/* Skill Name */}
                <div className="w-full">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {skillItem.name}
                  </h3>
                  <span className="inline-block mt-1 text-[10px] uppercase font-bold tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                    {skillItem.category.split(" ")[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
