import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Jigar Sable",
  description: "Welcome to Jigar's Portfolio. Full-Stack Web Developer and Android App Developer",
  keywords: ["jigar sable", "portfolio", "jigar", "full stack dev", "personal portfolio lifecodes", "portfolio design", "portfolio website", "personal portfolio"],
  authors: [{ name: "Jigar Sable" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-[#030014] text-[#f3f4f6] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
