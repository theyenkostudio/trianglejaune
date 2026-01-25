import React from "react";
import { ServicesAccordion } from "./ServicesAccordion";
import { Bricolage_Grotesque, Manrope } from "next/font/google";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export default function Services() {
  return (
    <div className={`${manrope.className} my-10 mx-4 md:my-12 lg:my-16 xl:my-20 2xl:max-w-7xl 2xl:mx-auto `}>
      <p className={`${bricolage.className} font-bold text-2xl md:text-3xl lg:text-4xl  text-[#152a45]`}>Our Services</p>
      <div className="mt-5 lg:mt-8">
        <ServicesAccordion />
      </div>
    </div>
  );
}
