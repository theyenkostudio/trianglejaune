import React from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { EquipmentMarquee } from "./EquipmentMarquee";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function EquipmentPartners() {
  return (
    <section className="py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="mx-4">
        <p
          className={`${bricolage.className} font-bold text-2xl md:text-3xl lg:text-4xl text-center text-[#152a45]`}
        >
          Our Equipment Partners
        </p>
        <p className={`${manrope.className} text-center text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg`}>
          Partnering with world-class manufacturers to ensure the highest standards of quality and reliability in every project.
        </p>
        <div className="mt-5 lg:mt-8">
          <EquipmentMarquee />
        </div>
      </div>
    </section>
  );
}
