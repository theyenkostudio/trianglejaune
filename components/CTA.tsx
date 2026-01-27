"use client";

import React from 'react';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export default function CTA() {
  return (
    <section className={`${manrope.className} py-20 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] bg-[#152a45] p-8 md:p-16 lg:p-24 shadow-2xl">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#d4af37] opacity-5 rounded-full blur-2xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`${bricolage.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}>
              Ready to start your <br />
              <span className="text-[#d4af37]">next project?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4 max-w-md leading-relaxed">
              Connect with our experts today for integrated engineering solutions tailored to your business needs and existing infrastructure.
            </p>
            <p className="text-[#d4af37] text-sm font-semibold mb-10">
              Please feel free to contact us. We will get back to you with 1-2 business days.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#d4af37] hover:bg-[#b3952f] text-[#152a45] font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:info@trianglejaune.com"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 backdrop-blur-sm transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <h3 className="text-white font-bold text-2xl mb-6">Global Support</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">Nigeria</p>
                  <p className="text-white font-medium">+234 810 068 3583</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">Lebanon</p>
                  <p className="text-white font-medium">+961 1 878733</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">Syria</p>
                  <p className="text-white font-medium">+963 959 099 938</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
