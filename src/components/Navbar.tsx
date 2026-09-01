"use client";

import { useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { portfolioData } from "@/data/portfolio";
import { CodeXml, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(
    ["home", "about", "experience", "projects", "education", "contact"],
    150
  );

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="container mx-auto px-4 md:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 cursor-pointer group"
          aria-label="Go to top of page"
        >
          <CodeXml className="text-violet-500 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight text-slate-100">
            {portfolioData.name.split(" ")[0]}
            <span className="text-violet-500">.</span>
          </span>
        </a>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                  isActive
                    ? "text-violet-400 font-semibold"
                    : "text-slate-300 hover:text-violet-400"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-violet-500 rounded-full shadow-[0_0_8px_#8b5cf6]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-300 hover:text-white p-2 focus:outline-none"
          aria-label="Open navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-[#0f172a]/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 origin-top ${
          isOpen
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
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-violet-400 bg-violet-500/10 font-bold border-l-4 border-violet-500"
                    : "text-slate-300 hover:text-violet-400 hover:bg-slate-800/50"
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