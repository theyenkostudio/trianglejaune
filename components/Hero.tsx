"use client";

import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import { Button } from "./ui/button";
import { SynchronizedProjectCounter } from "./SynchronizedProjectCounter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const slides = [
  {
    id: 1,
    image: "/hero.jpg",
    title: "A global mission to give you an edge in ",
    highlight: "water works",
    highlightColor: "text-[#d4af37]",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "A regional legacy and destiny on ",
    highlight: "water solutions ",
    highlightColor: "text-[#d4af37]",
    subtitle: "in the Middle East & Africa",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] xl:h-[85vh] min-h-150 overflow-hidden">
      {/* Background Images - Stack them and crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={`hero-slide-${slide.id}`}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative h-[80%] md:h-[92%] xl:h-[90%] flex flex-col justify-end m-6 lg:m-8 xl:m-10 2xl:max-w-7xl 2xl:mx-auto">
        <div>
          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1
                className={`${bricolage.className} text-white text-left text-4xl font-bold lg:max-w-4xl xl:max-w-5xl md:text-5xl lg:text-6xl`}
              >
                {slides[currentSlide].title}
                <span className={slides[currentSlide].highlightColor}>
                  {slides[currentSlide].highlight}
                </span>
                {slides[currentSlide].subtitle && (
                  <>
                    <span className="text-white">{slides[currentSlide].subtitle}</span>
                  </>
                )}
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Button className="bg-[#d4af37] mt-5 text-white px-8 py-6 rounded-lg font-semibold text-base hover:bg-[#1e3a5f] transition-colors duration-300">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Counter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:flex mt-10 flex-row justify-end"
          >
            <div className="p-5 rounded-xl bg-black/10 backdrop-blur-md">
              <p
                className={`${bricolage.className} uppercase text-sm text-[#d4af37] font-bold mb-2`}
              >
                Celebrating the past, innovating the future
              </p>
              <SynchronizedProjectCounter />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-20 2xl:left-28 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#d4af37]"
                  : "w-2 bg-white/50 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
