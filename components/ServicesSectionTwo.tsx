"use client";

import React, { useState } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Droplets, HardHat, Zap, Building2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    image: "/images/wash.png",
    color: "#3B82F6"
  },
  {
    id: "mechanical",
    title: "Mechanical Works",
    description: "Advanced installation of booster pumps, industrial piping, and precision anti-water hammer systems.",
    icon: HardHat,
    image: "/images/mechanical-works.png",
    color: "#F59E0B"
  },
  {
    id: "electrical",
    title: "Electrical Works",
    description: "Design of Motor Control Centers (MCC), power networks, and renewable solar energy configurations.",
    icon: Zap,
    image: "/images/electrical-works.png",
    color: "#EAB308"
  },
  {
    id: "civil",
    title: "Civil Works",
    description: "Construction of strategic reservoirs, elevated tanks, and specialized water storage facilities.",
    icon: Building2,
    image: "/images/civil-works.png",
    color: "#EF4444"
  }
];

export default function ServicesSectionTwo() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className={`${manrope.className} py-24 bg-white overflow-hidden`}>
      <div className="2xl:max-w-7xl 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">

        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <h2 className={`${bricolage.className} text-5xl md:text-6xl lg:text-7xl font-bold text-[#152a45] mb-8 leading-tight`}>
            Integrated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#b3952f]">
              Engineering Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-[#d4af37] pl-6">
            Triangle Jaune Group empowers public and private organizations with integrated water, mechanical, and civil solutions.
            We capitalize on existing infrastructure to deliver seamless, total engineering systems tailored to your unique needs.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch h-[600px]">

          {/* Left: The Navigation List */}
          <div className="flex-1 flex flex-col justify-between py-4">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className="group relative cursor-pointer"
              >
                <div className={`
                  flex items-center justify-between py-6 border-b border-gray-100 
                  transition-all duration-300
                  ${activeService.id === service.id ? 'opacity-100 translate-x-4' : 'opacity-40 hover:opacity-70'}
                `}>
                  <div className="flex items-center gap-6">
                    <span className={`
                      text-sm font-bold tracking-widest uppercase transition-colors
                      ${activeService.id === service.id ? 'text-[#d4af37]' : 'text-gray-400'}
                    `}>
                      0{services.indexOf(service) + 1}
                    </span>
                    <h3 className={`${bricolage.className} text-3xl md:text-4xl font-bold text-[#152a45]`}>
                      {service.title}
                    </h3>
                  </div>

                  <ArrowRight className={`
                    w-6 h-6 text-[#d4af37] transform transition-transform duration-300
                    ${activeService.id === service.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                  `} />
                </div>
              </div>
            ))}
          </div>

          {/* Right: The Visual Showcase */}
          <div className="flex-1 relative rounded-3xl overflow-hidden shadow-2xl bg-[#152a45]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover opacity-60"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-[#152a45] via-[#152a45]/80 to-transparent w-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#d4af37] rounded-xl text-white">
                      <activeService.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-white text-xl font-bold tracking-wide">Overview</h4>
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                    {activeService.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
