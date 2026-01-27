"use client";

import React, { useState } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

const serviceConfig: Record<string, { image: string, id: string, slug: string }> = {
  wash: {
    image: "/images/wash.png",
    id: "01",
    slug: "wash-sector"
  },
  mech: {
    image: "/images/mechanical-works.png",
    id: "02",
    slug: "mechanical"
  },
  elec: {
    image: "/images/electrical-works.png",
    id: "03",
    slug: "electrical"
  },
  civil: {
    image: "/images/civil-works.png",
    id: "04",
    slug: "civil"
  }
};

export default function ServicesSectionFive() {
  const servicesList = Object.keys(services).map(key => ({
    key,
    // @ts-ignore
    ...services[key],
    ...serviceConfig[key]
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // Stop scrolling before reaching empty space
    if (currentIndex < servicesList.length - 2) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const isAtStart = currentIndex === 0;
  // Adjusted to prevent empty space at the end
  const isAtEnd = currentIndex >= servicesList.length - 2;

  return (
    <section className={`${manrope.className} bg-[#f8f9fa] py-24 overflow-hidden`}>
      <div className="2xl:max-w-[1600px] 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">

        {/* Header with Navigation Controls */}
        <div className="flex flex-col xl:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8 gap-8">
          <div className="max-w-3xl">
            <h2 className={`${bricolage.className} text-5xl md:text-7xl font-bold text-[#152a45] mb-6 uppercase tracking-tight`}>
              Explore Our <br /> Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              We offer integrated solutions for public, private, and development sectors, empowering you by capitalizing on existing infrastructure. Our technical expertise ensures all applications operate smoothly as a seamless, total solution.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={isAtStart}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                 ${isAtStart
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                  : 'border-gray-300 hover:bg-[#152a45] hover:text-white hover:border-[#152a45]'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAtEnd}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                ${isAtEnd
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                  : 'border-gray-300 hover:bg-[#152a45] hover:text-white hover:border-[#152a45]'
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            // Use custom framer motion variants for better responsiveness
            animate={{ x: `calc(-${currentIndex} * (min(500px, 80vw) + 2rem))` }}
            transition={{ type: "spring", stiffness: 150, damping: 25 }}
          >
            {servicesList.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                key={service.key}
                className={`
                    relative min-w-[320px] md:min-w-[420px] lg:min-w-[500px] 
                    group cursor-pointer select-none
                 `}
              >
                {/* Card Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-8 bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152a45] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating Stat Pill (Decorative) */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                    <span className="text-white text-xs font-bold tracking-widest uppercase">
                      {service.key === 'wash' ? 'INFRASTRUCTURE' :
                        service.key === 'mech' ? 'INDUSTRIAL' :
                          service.key === 'elec' ? 'POWER SYSTEMS' : 'CONSTRUCTION'}
                    </span>
                  </div>

                  {/* Corner Action Button */}
                  <div className="absolute bottom-0 right-0 p-6">
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-6 h-6 text-[#152a45]" />
                    </div>
                  </div>
                </div>

                {/* Text Content Below Image */}
                <div className="pr-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`${bricolage.className} text-3xl font-bold text-[#152a45] group-hover:text-[#d4af37] transition-colors uppercase`}>
                      {service.title}
                    </h3>
                    <span className="text-gray-300 font-bold text-xl group-hover:text-[#d4af37] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <div className="h-px w-full bg-gray-200 mb-4 group-hover:bg-[#d4af37] transition-colors duration-500" />

                  <ul className="space-y-2">
                    {service.items.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="text-gray-500 text-sm md:text-base flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#d4af37]" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
