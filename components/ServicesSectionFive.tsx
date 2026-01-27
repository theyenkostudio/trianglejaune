"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";
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

const serviceConfig: Record<string, { image: string; id: string; slug: string }> = {
  wash: { image: "/images/wash.png", id: "01", slug: "wash-sector" },
  mech: { image: "/images/mechanical-works.png", id: "02", slug: "mechanical" },
  elec: { image: "/images/electrical-works.png", id: "03", slug: "electrical" },
  civil: { image: "/images/civil-works.png", id: "04", slug: "civil" },
};

export default function ServicesSectionFive() {
  const servicesList = useMemo(
    () =>
      Object.keys(services).map((key) => ({
        key,
        // @ts-ignore
        ...services[key],
        ...serviceConfig[key],
      })),
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const GAP = 32; // gap-8 = 2rem = 32px

  /* ----------------------------
     Measure dimensions + Responsive
  -----------------------------*/
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;

      const cWidth = containerRef.current.offsetWidth;
      setContainerWidth(cWidth);

      // Determine how many cards we want to see (fractional for the 'peek' effect)
      let visibleCount = 1;
      if (window.innerWidth >= 1280) visibleCount = 3;
      else if (window.innerWidth >= 1024) visibleCount = 2.2;
      else if (window.innerWidth >= 768) visibleCount = 1.3;

      // Calculate width of a single card so that 'visibleCount' cards and their gaps fit cWidth
      // Formula: cWidth = (visibleCount * cardW) + (floor(visibleCount) * GAP)
      // Actually simpler: let the card have a natural width and just scroll through the track.
      // Let's use the provided width logic but cleaner.
      const cardW = (cWidth - (Math.ceil(visibleCount) - 1) * GAP) / visibleCount;
      setCardWidth(Math.max(cardW, 300));

      const totalTrackWidth = (servicesList.length * cardW) + ((servicesList.length - 1) * GAP);
      setMaxTranslate(Math.max(0, totalTrackWidth - cWidth));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [servicesList.length]);

  /* ----------------------------
     Navigation Logic
  -----------------------------*/
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, servicesList.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // The magical clamped value that eliminates white space:
  // We calculate the raw translation based on index, then clamp it at -maxTranslate
  const targetTranslate = Math.max(-maxTranslate, -currentIndex * (cardWidth + GAP));

  const isAtStart = currentIndex === 0 || targetTranslate === 0;
  const isAtEnd = targetTranslate <= -maxTranslate + 5; // buffer for floating point

  /* ----------------------------
     Sync motion value
  -----------------------------*/
  useEffect(() => {
    x.set(targetTranslate);
  }, [targetTranslate, x]);

  /* ----------------------------
     Drag snap logic
  -----------------------------*/
  const handleDragEnd = (_: any, info: any) => {
    const dragged = info.offset.x;
    const threshold = cardWidth / 4;

    if (dragged < -threshold && !isAtEnd) {
      nextSlide();
    } else if (dragged > threshold && !isAtStart) {
      prevSlide();
    } else {
      x.set(targetTranslate);
    }
  };

  return (
    <section className={`${manrope.className} bg-[#f8f9fa] py-16 md:py-24 overflow-hidden`}>
      <div className="2xl:max-w-[1600px] 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">

        {/* Header */}
        <div className="flex flex-col xl:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8 gap-8">
          <div className="max-w-3xl">
            <h2 className={`${bricolage.className} text-5xl md:text-7xl font-bold text-[#152a45] mb-6 uppercase tracking-tight`}>
              Explore Our <br /> Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              We offer integrated solutions for public, private, and development sectors,
              empowering you through technical expertise and world-class infrastructure delivery.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              disabled={isAtStart}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                ${isAtStart ? "opacity-30 border-gray-200 cursor-not-allowed" : "border-gray-300 hover:bg-[#152a45] hover:text-white hover:border-[#152a45]"}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAtEnd}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300
                ${isAtEnd ? "opacity-30 border-gray-200 cursor-not-allowed" : "border-gray-300 hover:bg-[#152a45] hover:text-white hover:border-[#152a45]"}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div ref={containerRef} className="relative">
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -maxTranslate,
              right: 0,
            }}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {servicesList.map((service) => (
              <Link
                key={service.key}
                href={`/services/${service.slug}`}
                style={{ width: cardWidth }}
                className="group select-none block shrink-0"
              >
                {/* Image Card */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-8 bg-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152a45] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating Tag */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                    <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
                      {service.key === 'wash' ? 'INFRASTRUCTURE' :
                        service.key === 'mech' ? 'INDUSTRIAL' :
                          service.key === 'elec' ? 'POWER SYSTEMS' : 'CONSTRUCTION'}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-0 right-0 p-6">
                    <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      <ArrowUpRight className="w-6 h-6 text-[#152a45]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pr-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`${bricolage.className} text-2xl md:text-3xl font-bold text-[#152a45] group-hover:text-[#d4af37] transition-colors uppercase`}>
                      {service.title}
                    </h3>
                    <span className="text-gray-300 font-bold text-xl group-hover:text-[#d4af37] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <div className="h-px w-full bg-gray-200 mb-4 group-hover:bg-[#d4af37] transition-colors duration-500" />

                  <ul className="space-y-2">
                    {service.items.slice(0, 3).map((item: string, i: number) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
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
