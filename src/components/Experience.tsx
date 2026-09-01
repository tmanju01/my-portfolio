"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true, // expand first item by default
    1: true,
  });

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experience" aria-label="Professional Experience" className="py-24 relative bg-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
          {portfolioData.experience.map((item, idx) => {
            const isExpanded = !!expandedItems[idx];

            return (
              <div key={item.company + idx} className="relative pl-8 md:pl-12">
                {/* Timeline Bullet */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />

                {/* Experience Card */}
                <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 hover:bg-slate-800/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
                      <p className="text-violet-400 font-medium text-lg">
                        {item.company}{" "}
                        {item.location && (
                          <span className="text-slate-400 text-sm font-normal">— {item.location}</span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-full whitespace-nowrap border border-slate-800">
                      <Calendar className="w-4 h-4 text-violet-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full border border-slate-700 bg-slate-900/40 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 font-medium mt-2 focus:outline-none"
                  >
                    <span>{isExpanded ? "Hide Responsibilities" : "View Responsibilities"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Responsibilities Details */}
                  {isExpanded && (
                    <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50 animate-fadeIn">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
