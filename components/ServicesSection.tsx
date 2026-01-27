"use client";

import React, { useState } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Droplets, HardHat, Zap, Building2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const services = [
  {
    id: "wash",
    title: "WASH Sector",
    description: "Complete rehabilitation of water infrastructure, boreholes, and pumping stations ensuring sustainable water access.",
    icon: Droplets,
    image: "/images/wash.png"
  },
  {
    id: "mechanical",
    title: "Mechanical Works",
    description: "Advanced installation of booster pumps, industrial piping, and precision anti-water hammer systems.",
    icon: HardHat,
    image: "/images/mechanical-works.png"
  },
  {
    id: "electrical",
    title: "Electrical Works",
    description: "Design of Motor Control Centers (MCC), power networks, and renewable solar energy configurations.",
    icon: Zap,
    image: "/images/electrical-works.png"
  },
  {
    id: "civil",
    title: "Civil Works",
    description: "Construction of strategic reservoirs, elevated tanks, and specialized water storage facilities.",
    icon: Building2,
    image: "/images/civil-works.png"
  }
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className={`${manrope.className} py-20 bg-[#F9FAFB]`}>
      <div className="2xl:max-w-7xl 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className={`${bricolage.className} text-4xl md:text-5xl lg:text-6xl font-bold text-[#152a45] mb-6`}>
              Engineering <span className="text-[#d4af37]">Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver comprehensive turnkey solutions across four key pillars of infrastructure development.
            </p>
          </div>

          <button className="group flex items-center gap-2 text-[#152a45] font-semibold border-b border-[#152a45] pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
            View all services
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative h-[360px] lg:h-[420px] rounded-3xl overflow-hidden bg-white cursor-pointer shadow-xs hover:shadow-xl transition-shadow duration-500"
            >
              {/* Background Image (Reveals on Hover) */}
              <div className="absolute inset-0 bg-[#152a45]">
                <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredService === service.id ? 'opacity-40' : 'opacity-100'}`}>
                  {/* Default dark background content if needed, currently just color */}
                </div>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${hoveredService === service.id ? 'scale-110 opacity-60' : 'opacity-0 scale-100'}`}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between z-10">
                {/* Top: Icon & Arrow */}
                <div className="flex justify-between items-start">
                  <div className={`
                    p-4 rounded-2xl transition-all duration-300
                    ${hoveredService === service.id ? 'bg-[#d4af37] text-white' : 'bg-white/10 backdrop-blur-md text-white'}
                  `}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                    ${hoveredService === service.id ? 'border-white bg-white text-[#152a45]' : 'border-white/30 text-white'}
                  `}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom: Text */}
                <div>
                  <h3 className={`${bricolage.className} text-3xl text-white font-bold mb-3`}>
                    {service.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${hoveredService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-20 md:opacity-70'}`}>
                    <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
