import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-slate-200 selection:bg-violet-500/30">
      {/* Navigation bar */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer information */}
      <Footer />
    </div>
  );
}
