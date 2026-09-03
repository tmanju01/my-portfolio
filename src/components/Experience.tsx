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
    <section id="experience" aria-label="Professional Experience" className="py-12 relative bg-sky-50/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-sky-200 ml-4 md:ml-10 space-y-8">
          {portfolioData.experience.map((item, idx) => {
            const isExpanded = !!expandedItems[idx];

            return (
              <div key={item.company + idx} className="relative pl-8 md:pl-12">
                {/* Timeline Bullet */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-sky-500 shadow-xs z-10" />

                {/* Experience Card */}
                <div className="bg-white rounded-xl border border-sky-100 p-6 shadow-md hover:shadow-lg hover:border-sky-300 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                      <p className="text-sky-700 font-semibold text-lg">
                        {item.company}{" "}
                        {item.location && (
                          <span className="text-slate-500 text-sm font-normal">— {item.location}</span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full whitespace-nowrap border border-sky-200 font-medium">
                      <Calendar className="w-4 h-4 text-sky-500" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full border border-sky-200/80 bg-sky-50 text-sky-800 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Collapse Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex items-center gap-2 text-sm text-sky-700 hover:text-sky-800 font-semibold mt-2 focus:outline-none cursor-pointer"
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
                    <ul className="mt-4 space-y-3 pt-4 border-t border-sky-100 animate-fadeIn">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
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
