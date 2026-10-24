import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manju Thakor | Frontend Developer Portfolio",
  description:
    "Welcome to Manju Thakor's portfolio! I'm a Frontend Developer with 3+ years of experience in React.js, Next.js, JavaScript, and modern web development. Explore my projects, skills, and experience.",
  keywords: [
    "Manju Thakor",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "React Developer Portfolio",
    "Personal Portfolio",
    "Frontend Developer Ahmedabad",
  ],
  authors: [{ name: "Manju Thakor" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/profile-pic.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
