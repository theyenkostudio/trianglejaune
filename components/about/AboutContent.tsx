"use client";

import React from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export function AboutContent() {
  return (
    <section className={`${manrope.className} py-24 bg-white overflow-hidden`}>
      <div className="2xl:max-w-7xl 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[#d4af37] font-bold text-sm uppercase tracking-widest block">Our Strength</span>
              <h2 className={`${bricolage.className} text-4xl md:text-5xl font-bold text-[#152a45]`}>
                An Unmatched Foundation for <span className="text-[#d4af37]">Success</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                The shared commitment, experience and skillset of the men and women who make up the Triangle Jaune workforce, underpins the company&rsquo;s leadership and provides an unmatched foundation for the successful realization of waterworks projects, regardless of the scale.
              </p>
              <p>
                Additional resources strengthen our capacity to realize multifaceted projects at the highest level of performance. Supporting our ability to effectively mobilize and operate diverse projects across Lebanon, Syria, and Nigeria.
              </p>
              <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100 flex items-start gap-4">
                <div className="w-1.5 h-full self-stretch bg-[#d4af37] rounded-full shrink-0" />
                <p className="font-medium text-[#152a45]">
                  These resources together with our group of subsidiaries form an internal support network. This unique aspect to our brand and business augments efficiency and reinforces our edge in delivering projects on-time at the highest quality standards, no matter the challenge.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/about.jpg"
                alt="Triangle Jaune Industrial"
                fill
                className="object-cover"
              />
            </div>


            <div className="absolute -bottom-10 -right-10 bg-[#152a45] p-8 md:p-10 rounded-[2rem] text-white z-20 shadow-xl max-w-[280px]">
              <p className={`${bricolage.className} text-4xl font-bold text-[#d4af37] mb-2`}>25+</p>
              <p className="text-sm font-semibold opacity-80 uppercase tracking-widest">Years of Engineering Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
