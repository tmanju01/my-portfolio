"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" aria-label="Featured Software Projects" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-500 rounded-full mb-6" />
          <p className="text-slate-600 max-w-2xl text-lg font-normal">
            A selection of software applications, platforms, and SaaS products I&apos;ve built.
          </p>
        </div>

        {/* Equal-Height Responsive Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {portfolioData.projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-md hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/80 group transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              {/* Card Thumbnail Header */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-sky-50 border-b border-sky-100 flex-shrink-0">
                {/* SVG Project Image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 shadow-md backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body with flex-grow & bottom lock */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3 min-h-[28px]">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-sky-50 text-sky-800 border border-sky-200/80"
                      >
                        <Tag className="w-3 h-3 text-sky-500" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Footer Buttons Baseline */}
                  <div className="pt-4 border-t border-sky-100 flex items-center gap-3">
                    {project.links.view ? (
                      <>
                        <a
                          href={project.links.view}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-600 hover:to-cyan-700 shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {project.links.code && (
                          <a
                            href={project.links.code}
                            target="_blank"
                            rel="noreferrer"
                            className="py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-sky-50 hover:text-sky-600 border border-sky-200 shadow-2xs flex items-center justify-center gap-1.5 transition-all duration-200"
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
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-sky-50 hover:text-sky-600 border border-sky-200 hover:border-sky-400 shadow-2xs flex items-center justify-center gap-2 transition-all duration-200"
                      >
                        <FaGithub className="w-4 h-4 text-sky-600" />
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
