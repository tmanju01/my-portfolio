"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" aria-label="Featured Software Projects" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl text-lg font-normal">
            A selection of software applications, platforms, and SaaS products I&apos;ve built.
          </p>
        </div>

        {/* Equal-Height Responsive Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {portfolioData.projects.map((project) => (
            <div
              key={project.name}
              className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 group transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Card Thumbnail Header */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#100b22] border-b border-slate-800/80 flex-shrink-0">
                {/* SVG Project Image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-violet-200 px-3 py-1 rounded-full bg-slate-950/80 border border-violet-500/40 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body with flex-grow & bottom lock */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors mb-3 min-h-[28px]">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-normal mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full bg-violet-950/50 text-violet-300 border border-violet-800/40"
                      >
                        <Tag className="w-3 h-3 text-violet-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Footer Buttons Baseline */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                    {project.links.view ? (
                      <>
                        <a
                          href={project.links.view}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-md shadow-violet-950/40 flex items-center justify-center gap-1.5 transition-all duration-200"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {project.links.code && (
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center justify-center gap-1.5 transition-all duration-200"
                          >
                            <FaGithub className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        )}
                      </>
                    ) : (
                      <a
                        href={project.links.code || portfolioData.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700 hover:border-violet-500/50 flex items-center justify-center gap-2 transition-all duration-200"
                      >
                        <FaGithub className="w-4 h-4 text-violet-400" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
