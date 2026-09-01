"use client";

import { useState, FormEvent } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" aria-label="Contact Section" className="py-24 bg-slate-900/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full mb-6" />
          <p className="text-slate-400 text-lg font-normal">
            Feel free to reach out for full-stack opportunities, project collaborations, or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details Column */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Email Card */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-colors flex items-center gap-5 group"
              >
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-violet-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-slate-200 font-medium group-hover:text-violet-400 transition-colors">
                    {portfolioData.email}
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${portfolioData.phone.replace(/\s+/g, "")}`}
                className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 hover:border-violet-500/50 transition-colors flex items-center gap-5 group"
              >
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-pink-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-slate-200 font-medium group-hover:text-pink-400 transition-colors">
                    {portfolioData.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 flex items-center gap-5">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-slate-200 font-medium">{portfolioData.location}</p>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={portfolioData.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3.5 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full border border-slate-700/50 transition-all hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 bg-slate-800/50 hover:bg-violet-600/20 hover:text-violet-400 text-slate-400 rounded-full border border-slate-700/50 transition-all hover:scale-110"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello, I'd like to discuss a project..."
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? "Message Sent!" : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
