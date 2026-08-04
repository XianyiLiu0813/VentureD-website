import type { Metadata } from "next";
import { Space_Grotesk, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "VentureD Hackathon — Agent for the Real World",
  description: "VentureD Hackathon 2026 · 48小时极限创造 · 杭州 → 新加坡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${spaceGrotesk.variable} ${dancingScript.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientProviders>
          <Navbar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
