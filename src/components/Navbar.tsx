"use client";

import { useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { portfolioData } from "@/data/portfolio";
import { CodeXml, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(
    ["home", "about", "skills", "experience", "projects", "education", "contact"],
    150
  );

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm shadow-sky-100/40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          aria-label="Go to top of page"
        >
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-sky-500/25">
            <span className="text-base font-extrabold text-white tracking-wider">MT</span>
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors whitespace-nowrap">
            {portfolioData.name}
          </span>
        </a>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7" aria-label="Main navigation">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-base font-semibold transition-colors cursor-pointer relative py-1 whitespace-nowrap ${isActive
                    ? "text-sky-600 font-bold"
                    : "text-slate-800 hover:text-sky-600"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-sky-500 rounded-full shadow-[0_0_8px_#0284c7]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-900 hover:text-sky-600 p-2 focus:outline-none flex-shrink-0"
          aria-label="Open navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xl transition-all duration-300 origin-top ${isOpen
            ? "max-h-96 opacity-100 py-6 px-6"
            : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
          }`}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`text-lg font-semibold py-2 px-3 rounded-lg transition-colors ${isActive
                    ? "text-sky-600 bg-sky-50 font-bold border-l-4 border-sky-500"
                    : "text-slate-800 hover:text-sky-600 hover:bg-sky-50"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}