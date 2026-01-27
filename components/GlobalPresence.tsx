import React from 'react';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import Image from 'next/image';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export default function GlobalPresence() {
  return (
    <div className={`${manrope.className} my-10 mx-4 md:my-12 lg:my-16 xl:my-20 2xl:max-w-7xl 2xl:mx-auto`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Text Content - appears second on mobile, first on desktop */}
        <div className="text-center lg:text-left">
          <h2 className={`${bricolage.className} font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#152a45] mb-6 lg:mb-8`}>
            <span className="text-[#d4af37]">Global presence</span>{' '}
            <span className="block mt-2">across two continents in 3 nations</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
            Triangle Jaune has established a strong regional presence across the Middle East
            and Africa, delivering world-class water solutions since 1998.
          </p>

          <button className="bg-[#152a45] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1e3a5f] transition-colors duration-300">
            Discover our services
          </button>

          {/* Legend */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 lg:mt-10">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#7cb342]"></div>
              <span className="font-semibold text-sm md:text-base text-gray-800">Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#d4af37]"></div>
              <span className="font-semibold text-sm md:text-base text-gray-800">Syria</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#1a237e]"></div>
              <span className="font-semibold text-sm md:text-base text-gray-800">Lebanon</span>
            </div>
          </div>
        </div>

        {/* Map Image - appears first on mobile, second on desktop */}
        <div className="order-1 lg:order-2">
          <div className="">
            <div className="relative w-full aspect-4/3 overflow-hidden">
              {/* Replace this with your actual map image */}
              <Image
                src="/images/map.png"
                alt="Triangle Jaune Global Presence Map"
                fill
                className="object-contain"
                priority
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
