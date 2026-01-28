"use client";

import React, { useState } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { FileText, MessageSquareQuote, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
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

interface CatalogueItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  featured?: boolean;
}

// TODO: Replace placeholder images with actual catalogue images
const catalogueItems: CatalogueItem[] = [
  {
    id: 1,
    title: "Pumping Systems",
    subtitle: "Booster & Submersible",
    description:
      "High-performance pumping solutions for boreholes, water supply, and industrial applications.",
    image: "/images/mechanical-works.png", // Placeholder - replace with actual catalogue image
    featured: true,
  },
  {
    id: 2,
    title: "Pipes & Fittings",
    subtitle: "GLV, PE & Ductile Iron",
    description:
      "Complete range of piping systems and accessories for water transmission networks.",
    image: "/images/wash.png", // Placeholder - replace with actual catalogue image
  },
  {
    id: 3,
    title: "Solar Solutions",
    subtitle: "PV Systems & Inverters",
    description:
      "Sustainable energy systems for off-grid and hybrid water pumping installations.",
    image: "/images/electrical-works.png", // Placeholder - replace with actual catalogue image
  },
  {
    id: 4,
    title: "Control Systems",
    subtitle: "MCC & Automation",
    description:
      "Motor control centers, SCADA systems, and intelligent monitoring solutions.",
    image: "/images/civil-works.png", // Placeholder - replace with actual catalogue image
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CataloguesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      className={`${manrope.className} py-16 md:py-20 lg:py-24 bg-[#F9FAFB]`}
    >
      <div className="mx-4 md:mx-8 2xl:max-w-7xl 2xl:mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">
              Our Product Range
            </span>
            <h2
              className={`${bricolage.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#152a45] mt-2`}
            >
              Equipment{" "}
              <span className="text-[#d4af37]">Catalogues</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl text-base md:text-lg">
              Partnering with world-leading manufacturers, we supply premium
              pumps, piping systems, and control equipment built to perform in
              the most demanding environments. Browse our catalogues to find
              the right solution for your project.
            </p>
          </div>

          <Link
            href="/catalogues"
            
            className="group flex items-center gap-2 text-[#152a45] font-semibold border-b border-[#152a45] pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
          >
            View full catalogue
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Catalogue Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 auto-rows-[320px] lg:auto-rows-[260px]"
        >
          {catalogueItems.map((item) => (
            <motion.div
              key={item.id}
              // @ts-expect-error - sometimes ts is noisy
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                item.featured ? "sm:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Card Container */}
              <div className="relative w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[#152a45]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-out"
                    sizes={item.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152a45] via-[#152a45]/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  {/* Category Badge */}
                  <motion.div
                    initial={false}
                    animate={{
                      y: hoveredId === item.id ? 0 : 10,
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-auto"
                  >
                    <span className="inline-block px-3 py-1 bg-[#d4af37] text-[#152a45] text-xs font-bold uppercase tracking-wider rounded-full">
                      {item.subtitle}
                    </span>
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3
                      className={`${bricolage.className} text-white font-bold ${
                        item.featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl lg:text-2xl"
                      } mb-2`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-gray-300 ${
                        item.featured ? "text-sm sm:text-base" : "text-xs sm:text-sm"
                      } mb-4 sm:mb-6 line-clamp-2`}
                    >
                      {item.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
                      <button
                        disabled
                        className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <FileText className="w-4 h-4 shrink-0" />
                        <span>View Brochure</span>
                      </button>
                      <button
                        disabled
                        className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#d4af37] text-[#152a45] text-xs sm:text-sm font-bold rounded-lg hover:bg-[#e5c04b] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <MessageSquareQuote className="w-4 h-4 shrink-0" />
                        <span>Request Quote</span>
                      </button>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={false}
                    animate={{
                      x: hoveredId === item.id ? 0 : 20,
                      opacity: hoveredId === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#152a45]" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
