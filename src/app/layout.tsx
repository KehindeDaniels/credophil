import React from "react";
import "./global.css";
import type { Metadata } from "next";
import { Inter as BodyFont, Sora as HeadingFont } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = BodyFont({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const heading = HeadingFont({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Credophil",
  description: "Credophil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${heading.variable} antialiased`}
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
