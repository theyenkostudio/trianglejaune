"use client";

import React from "react";
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.webp"
          alt="About Triangle Jaune Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#152a45]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#152a45]/20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className={`${bricolage.className} text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight`}>
          About <span className="text-[#d4af37]">Us</span>
        </h1>
        <div className="h-1.5 w-24 bg-[#d4af37] mx-auto mb-8" />
        <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
          Pioneering water solutions and engineering excellence across the Middle East and Africa since 1998.
        </p>
      </div>
    </section>
  );
}
