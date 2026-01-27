"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const team = [
  {
    name: "Eng. Patrick C.",
    role: "Leadership / Principal Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Eng. Abed Subh",
    role: "Leadership / Principal Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Eng. Ali Eskander",
    role: "Leadership / Principal Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    linkedin: "https://linkedin.com",
  },
];

export function TeamSection() {
  return (
    <section className={`${manrope.className} py-24 bg-gray-50`}>
      <div className="2xl:max-w-7xl 2xl:mx-auto mx-4 md:mx-8 lg:mx-12">
        <div className="text-center mb-16">
          <h2 className={`${bricolage.className} text-4xl md:text-5xl font-bold text-[#152a45] mb-6`}>
            Meet Our <span className="text-[#d4af37]">Leadership</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            The Triangle Jaune Group&rsquo;s greatest resource is our staff. The shared commitment, experience and skillset of the men and women who make up the Triangle Jaune workforce, underpins the company&rsquo;s leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-4/5 rounded-[2rem] overflow-hidden mb-8 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#152a45]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-110 transition-transform duration-500 delay-100"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>

              <h3 className={`${bricolage.className} text-2xl font-bold text-[#152a45] mb-1`}>
                {member.name}
              </h3>
              <p className="text-[#d4af37] font-semibold text-sm uppercase tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
