"use client";

import React from 'react';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={`${manrope.className} my-10 mx-4 md:my-12 lg:my-16 xl:my-20 2xl:max-w-7xl 2xl:mx-auto`}>
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left Column: Image */}
          <div className="relative h-64 lg:h-auto min-h-[400px]">
            <Image
              src="/images/contact-hero.png"
              alt="Triangle Jaune Industrial Projects"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#152a45]/80 to-transparent lg:bg-gradient-to-r"></div>

            {/* Text Overlay for visual impact */}
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-white">
              <h3 className={`${bricolage.className} text-2xl font-bold mb-2`}>Building Tomorrow</h3>
              <p className="text-white/80 text-sm">Excellence in Hydraulic & Civil Engineering</p>
            </div>
          </div>

          {/* Right Column: Content + Form */}
          <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center">

            <div className="mb-10">
              <h2 className={`${bricolage.className} text-3xl md:text-4xl font-bold text-[#152a45] mb-4`}>
                Get in touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Start a conversation with our team about your next project. We are available across Lebanon, Syria, and Nigeria.
              </p>

              <div className="mt-6 flex items-center space-x-3 text-[#152a45]">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">info@trianglejaune.com</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all bg-gray-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all resize-none bg-gray-50"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#152a45] hover:bg-[#1e3a5f] text-white py-6 text-base font-semibold rounded-lg shadow-none transition-all duration-300 mt-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
