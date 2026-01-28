"use client";

import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Droplets } from "lucide-react";
import Link from "next/link";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <main
      className={`${manrope.className} min-h-screen bg-[#152a45] flex items-center justify-center relative overflow-hidden`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        {/* Animated water drops */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, 100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 20}%`,
            }}
          >
            <Droplets className="w-6 h-6 text-[#d4af37]/20" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className={`${bricolage.className} text-[150px] md:text-[200px] lg:text-[250px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] to-[#d4af37]/30`}
          >
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className={`${bricolage.className} text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 -mt-8 md:-mt-12`}
          >
            Page Not Found
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto mb-8">
            Looks like this page has dried up. Let&apos;s get you back to
            familiar waters.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-[#152a45] font-semibold rounded-lg hover:bg-[#e5c04b] transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
        </motion.div>

        {/* Contact hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-500 text-sm mt-12"
        >
          Need help?{" "}
          <Link
            href="/contact"
            className="text-[#d4af37] hover:underline"
          >
            Contact our team
          </Link>
        </motion.p>
      </div>
    </main>
  );
}
