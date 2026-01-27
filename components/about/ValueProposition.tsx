"use client";

import React from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { Target, Binoculars } from "lucide-react";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export function ValueProposition() {
  return (
    <section className={`${manrope.className} py-16 md:py-24 bg-white`}>
      <div className="2xl:max-w-7xl 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 space-y-12">
            <span className="text-[#d4af37] font-bold text-sm uppercase tracking-widest block">Our Mission & Vision</span>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-black" strokeWidth={2.5} />
                <h2 className={`${bricolage.className} text-4xl font-bold text-gray-900`}>
                  Our Mission
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                To be the regional water solutions and services provider of choice.
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Binoculars className="w-8 h-8 text-black" strokeWidth={2.5} />
                <h2 className={`${bricolage.className} text-4xl font-bold text-gray-900`}>
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                We provide innovative, world class, independent and value-added water solutions through consulting and integration services that enable clients to improve performance and fulfill their Business needs.
              </p>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl">
              <img
                src="/images/about/dart.webp"
                alt="Targeting water solutions"
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
