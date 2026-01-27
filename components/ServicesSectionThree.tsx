"use client";

import React, { useRef } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Check, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { services } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// Helper to map keys from constants to image paths and colors
const serviceConfig: Record<string, { image: string, color: string, subtitle: string }> = {
  wash: {
    image: "/images/wash.png",
    color: "#3B82F6",
    subtitle: "Sustainable Water Access"
  },
  mech: {
    image: "/images/mechanical-works.png",
    color: "#F59E0B",
    subtitle: "Precision Engineering"
  },
  elec: {
    image: "/images/electrical-works.png",
    color: "#EAB308",
    subtitle: "Power & Control Systems"
  },
  civil: {
    image: "/images/civil-works.png",
    color: "#EF4444",
    subtitle: "Infrastructure Development"
  }
};

export default function ServicesSectionThree() {
  const containerRef = useRef(null);

  // Convert the object from constants.ts into an array we can map over
  // Preserving the order: wash, mech, elec, civil
  const serviceKeys = ['wash', 'mech', 'elec', 'civil'];

  return (
    <section ref={containerRef} className={`${manrope.className} bg-white pb-20`}>
      <div className="2xl:max-w-7xl 2xl:mx-auto">

        {/* Section Header */}
        <div className="px-4 md:px-8 lg:px-12 py-20 text-center max-w-4xl mx-auto">
          <h2 className={`${bricolage.className} text-5xl md:text-6xl font-bold text-[#152a45] mb-6`}>
            Our Areas of <span className="text-[#d4af37]">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Delivering integrated engineering solutions across the full spectrum of water and infrastructure development.
          </p>
        </div>

        {/* Services Stack */}
        <div className="flex flex-col gap-0">
          {serviceKeys.map((key, index) => {
            // @ts-ignore -- we know the keys exist in both objects
            const data = services[key];
            const config = serviceConfig[key];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative min-h-[600px] flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-gray-100 last:border-0"
              >
                {/* Visual Side (Image) - Alternates Left/Right */}
                <div className={`
                  lg:w-1/2 relative min-h-[400px] lg:min-h-auto overflow-hidden
                  ${isEven ? 'lg:order-1' : 'lg:order-2'}
                `}>
                  <div className="absolute inset-0 bg-[#152a45]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <Image
                    src={config.image}
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />

                  {/* Decorative corner accent */}
                  <div className={`
                    absolute z-20 w-32 h-32 bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity duration-500
                    ${isEven ? 'top-0 right-0 rounded-bl-full' : 'bottom-0 left-0 rounded-tr-full'}
                  `} />
                </div>

                {/* Content Side - Alternates Right/Left */}
                <div className={`
                  lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white
                  ${isEven ? 'lg:order-2' : 'lg:order-1'}
                `}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-gray-100 text-[#152a45]">
                      0{index + 1}
                    </span>
                    <span className="text-[#d4af37] font-semibold text-sm tracking-wide uppercase">
                      {config.subtitle}
                    </span>
                  </div>

                  <h3 className={`${bricolage.className} text-4xl md:text-5xl font-bold text-[#152a45] mb-8`}>
                    {data.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-10">
                    {data.items.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 min-w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50">
                          <Check className="w-3 h-3 text-[#d4af37]" />
                        </div>
                        <span className="text-gray-600 text-sm md:text-base leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="self-start flex items-center gap-2 text-[#152a45] font-bold text-lg group/btn">
                    Explore Details
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2 text-[#d4af37]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
