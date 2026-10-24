import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Manju Thakor",
  description: "Welcome to Manju's Portfolio. Full-Stack Web Developer and Android App Developer",
  keywords: ["Manju Thakor", "portfolio", "manju", "full stack dev", "personal portfolio lifecodes", "portfolio design", "portfolio website", "personal portfolio"],
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
