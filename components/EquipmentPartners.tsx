import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { EquipmentMarquee } from "./EquipmentMarquee";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
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
        <div className="mt-5 lg:mt-8">
          <EquipmentMarquee />
        </div>
      </div>
    </section>
  );
}
