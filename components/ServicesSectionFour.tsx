"use client";

import React, { useRef } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
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

const serviceConfig: Record<string, { image: string, color: string, subtitle: string }> = {
  wash: {
    image: "/images/wash.png",
    color: "#3B82F6",
    subtitle: "01 / WASH Sector"
  },
  mech: {
    image: "/images/mechanical-works.png",
    color: "#F59E0B",
    subtitle: "02 / Mechanical"
  },
  elec: {
    image: "/images/electrical-works.png",
    color: "#EAB308",
    subtitle: "03 / Electrical"
  },
  civil: {
    image: "/images/civil-works.png",
    color: "#EF4444",
    subtitle: "04 / Civil Works"
  }
};

function ServiceCard({ id, data, config, index }: { id: string, data: any, config: any, index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Parallax effect for image
  const isEven = index % 2 === 0;

  return (
    <div ref={containerRef} className="relative py-24 lg:py-32">
      <div className="2xl:max-w-7xl 2xl:mx-auto px-4 md:px-8">

        {/* The "Broken Grid" Layout */}
        <div className={`flex flex-col lg:flex-row items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

          {/* Image Block with "Cut Off" Background Effect */}
          <div className="w-full lg:w-3/5 relative z-10">
            <motion.div
              style={{ y }}
              className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] w-full"
            >
              {/* The Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={config.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* The "Background Color Thing" - Offset Block */}
            <div className={`
              absolute -z-10 w-full h-full top-0 bg-[#f4f4f4]
              ${isEven ? '-left-12 top-12 md:-left-24 md:top-24' : '-right-12 top-12 md:-right-24 md:top-24'}
            `}></div>

            {/* Decorative Solid Accents */}
            <div className={`absolute -bottom-10 w-40 h-40 bg-[#152a45] z-20 ${isEven ? '-right-10' : '-left-10'}`}>
              <div className="w-full h-full flex items-center justify-center">
                <ArrowUpRight className="text-white w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`
              w-full lg:w-2/5 pt-16 lg:pt-0 relative z-20
              ${isEven ? 'lg:pl-24' : 'lg:pr-24'}
            `}
          >
            <span className="text-[#d4af37] font-bold tracking-widest uppercase mb-4 block text-sm">
              {config.subtitle}
            </span>

            <h3 className={`${bricolage.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#152a45] mb-8 leading-[1.1]`}>
              {data.title}
            </h3>

            <div className="space-y-4 mb-10">
              {data.items.slice(0, 4).map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d4af37] group-hover:scale-150 transition-transform" />
                  <p className="text-gray-600 text-lg leading-relaxed">{item}</p>
                </div>
              ))}
              {data.items.length > 4 && (
                <p className="text-gray-400 italic text-sm pl-6 pt-2">+ {data.items.length - 4} more capabilities</p>
              )}
            </div>

            <button className="text-[#152a45] font-bold border-b-2 border-[#152a45] pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-all text-lg">
              View Full Specifications
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default function ServicesSectionFour() {
  const serviceKeys = ['wash', 'mech', 'elec', 'civil'];

  return (
    <section className={`${manrope.className} bg-white overflow-hidden`}>
      {serviceKeys.map((key, index) => (
        <ServiceCard
          key={key}
          index={index}
          id={key}
          // @ts-ignore
          data={services[key]}
          config={serviceConfig[key]}
        />
      ))}
    </section>
  );
}
