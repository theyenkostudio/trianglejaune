"use client";

import React from 'react';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import { ArrowRight, Mail, Phone, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export default function CTA() {
  const offices = [
    { country: "Nigeria", num: "+234 810 068 3583" },
    { country: "Lebanon", num: "+961 1 878733" },
    { country: "Syria", num: "+963 959 099 938" }
  ];

  return (
    <section className={`${manrope.className} py-12 px-4 md:px-8 bg-gray-50/50`}>
      <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl bg-[#152a45] shadow-xl relative">
        {/* Subtle accent line at the top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#d4af37]" />

        <div className="p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

          {/* Left Side: Copy */}
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              <Globe2 className="w-3 h-3" />
              Get Started
            </div>
            <h2 className={`${bricolage.className} text-3xl md:text-4xl font-bold text-white leading-tight`}>
              Ready for your <span className="text-[#d4af37]">next project?</span>
            </h2>
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              Connect with our experts today for integrated engineering solutions tailored to your business needs.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#d4af37] hover:bg-white text-[#152a45] font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@trianglejaune.com"
                className="text-white hover:text-[#d4af37] font-semibold px-2 py-3 flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>

          {/* Right Side: Contact Grid */}
          <div className="lg:w-1/3 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
            <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">Offices</p>
            <div className="grid gap-5">
              {offices.map((office) => (
                <div key={office.country} className="flex flex-col group">
                  <span className="text-gray-500 text-[10px] font-bold uppercase">{office.country}</span>
                  <a href={`tel:${office.num.replace(/\s/g, '')}`} className="text-white group-hover:text-[#d4af37] transition-colors text-sm font-medium">
                    {office.num}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
