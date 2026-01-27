"use client";

import React from 'react';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import { Mail, Send, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export default function ContactSection() {
  return (
    <section className={`${manrope.className} py-12 px-4 md:px-8`}>
      {/* Main Container with Background */}
      <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-[#152a45] min-h-[600px] flex items-center">

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[100px] -ml-24 -mb-24" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-16">

          {/* Left Side: Header & Info (4 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-4">
                <Globe className="w-3 h-3" />
                Global Presence
              </div>
              <h2 className={`${bricolage.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
                Let's build the <br />
                <span className="text-[#d4af37]">future together.</span>
              </h2>
              <p className="mt-4 text-gray-300 text-lg max-w-sm">
                Start a conversation with our engineering team about your next project.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium">info@trianglejaune.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Offices</p>
                  <p className="text-white font-medium">Lebanon • Nigeria • Syria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Floating Form Card (7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#d4af37] outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#d4af37] outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#d4af37] outline-none transition-all"
                    placeholder="e.g. Hydraulic Engineering"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-[#d4af37] outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button className="w-full bg-[#152a45] hover:bg-[#d4af37] hover:text-[#152a45] py-7 rounded-xl text-lg font-bold transition-all group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
