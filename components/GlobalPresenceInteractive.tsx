"use client";

import React, { useState } from "react";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CountryData {
  name: string;
  coordinates: [number, number];
  color: string;
  iso: string;
  description: string;
  projects: string;
  since: string;
}

const countries: CountryData[] = [
  {
    name: "Nigeria",
    coordinates: [8.6753, 9.0820],
    color: "#7cb342",
    iso: "NGA",
    description: "West African hub for water infrastructure and treatment solutions",
    projects: "15+ Projects",
    since: "Since 2005",
  },
  {
    name: "Syria",
    coordinates: [38.9968, 34.8021],
    color: "#d4af37",
    iso: "SYR",
    description: "Pioneering water solutions in challenging environments",
    projects: "25+ Projects",
    since: "Since 1998",
  },
  {
    name: "Lebanon",
    coordinates: [35.8623, 33.8547],
    color: "#1a237e",
    iso: "LBN",
    description: "Regional headquarters and center of excellence",
    projects: "40+ Projects",
    since: "Since 1998",
  },
];

const countryISOs = countries.map((c) => c.iso);

// Colorful palette for non-highlighted countries
const mapColors = [
  "#a8d5ba", // soft green
  "#f7d794", // warm yellow
  "#dda0dd", // plum
  "#87ceeb", // sky blue
  "#f4a460", // sandy brown
  "#98d8c8", // mint
  "#c9b1ff", // lavender
  "#ffb6c1", // light pink
  "#90ee90", // light green
  "#ffd700", // gold
  "#e6e6fa", // lavender mist
  "#b0e0e6", // powder blue
];

// Simple hash function for consistent country colors
const getCountryColor = (id: string): string => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return mapColors[Math.abs(hash) % mapColors.length];
};

export default function GlobalPresenceInteractive() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMarkerHover = (
    country: CountryData,
    event: React.MouseEvent
  ) => {
    setHoveredCountry(country.name);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMarkerLeave = () => {
    setHoveredCountry(null);
  };

  const handleMarkerClick = (country: CountryData) => {
    setSelectedCountry(selectedCountry?.name === country.name ? null : country);
  };

  const handleLegendClick = (country: CountryData) => {
    setSelectedCountry(selectedCountry?.name === country.name ? null : country);
  };

  return (
    <div
      className={`${manrope.className} my-10 mx-4 md:mx-8 md:my-12 lg:my-16 xl:my-20 2xl:max-w-7xl 2xl:mx-auto`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2
            className={`${bricolage.className} font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#152a45] mb-6 lg:mb-8`}
          >
            <span className="text-[#d4af37]">Global presence</span>{" "}
            <span className="block mt-2">across two continents in 3 nations</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
            Triangle Jaune has established a strong regional presence across the
            Middle East and Africa, delivering world-class water solutions since
            1998.
          </p>

          <button className="bg-[#152a45] text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-[#1e3a5f] transition-colors duration-300">
            Discover our services
          </button>

          {/* Interactive Legend */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 lg:mt-10">
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => handleLegendClick(country)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  selectedCountry?.name === country.name
                    ? "bg-gray-100 ring-2 ring-[#d4af37]"
                    : "hover:bg-gray-50"
                }`}
              >
                <motion.div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: country.color }}
                  animate={
                    selectedCountry?.name === country.name
                      ? { scale: [1, 1.2, 1] }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <span className="font-semibold text-sm md:text-base text-gray-800">
                  {country.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                center: [25, 20],
                scale: 350,
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomableGroup>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isHighlighted = countryISOs.includes(
                        geo.properties.ISO_A3 || geo.id
                      );
                      const countryData = countries.find(
                        (c) => c.iso === (geo.properties.ISO_A3 || geo.id)
                      );
                      const isSelected =
                        selectedCountry?.iso === (geo.properties.ISO_A3 || geo.id);
                      const isHovered =
                        hoveredCountry === countryData?.name;

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={(e) => {
                            if (countryData) {
                              handleMarkerHover(countryData, e as unknown as React.MouseEvent);
                            }
                          }}
                          onMouseLeave={handleMarkerLeave}
                          onClick={() => {
                            if (countryData) {
                              handleMarkerClick(countryData);
                            }
                          }}
                          style={{
                            default: {
                              fill: isHighlighted
                                ? isSelected
                                  ? countryData?.color
                                  : `${countryData?.color}99`
                                : getCountryColor(geo.rsmKey),
                              stroke: isHighlighted ? countryData?.color : "#ffffff",
                              strokeWidth: isHighlighted ? 1.5 : 0.5,
                              outline: "none",
                              transition: "all 0.3s ease",
                              cursor: isHighlighted ? "pointer" : "default",
                            },
                            hover: {
                              fill: isHighlighted
                                ? countryData?.color
                                : getCountryColor(geo.rsmKey),
                              stroke: isHighlighted ? countryData?.color : "#ffffff",
                              strokeWidth: isHighlighted ? 2 : 0.75,
                              outline: "none",
                              cursor: isHighlighted ? "pointer" : "default",
                            },
                            pressed: {
                              fill: isHighlighted
                                ? countryData?.color
                                : getCountryColor(geo.rsmKey),
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Animated Markers */}
                {countries.map((country) => (
                  <Marker
                    key={country.name}
                    coordinates={country.coordinates}
                    onMouseEnter={(e) => handleMarkerHover(country, e as unknown as React.MouseEvent)}
                    onMouseLeave={handleMarkerLeave}
                    onClick={() => handleMarkerClick(country)}
                  >
                    {/* Outer glow / pulse animation */}
                    <motion.circle
                      r={16}
                      fill={country.color}
                      fillOpacity={0.4}
                      animate={{
                        r: [16, 28, 16],
                        fillOpacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {/* Dark shadow ring for contrast */}
                    <circle
                      r={14}
                      fill="none"
                      stroke="#152a45"
                      strokeWidth={3}
                      strokeOpacity={0.3}
                      style={{ pointerEvents: "none" }}
                    />
                    {/* Main marker - larger */}
                    <motion.circle
                      r={11}
                      fill={country.color}
                      stroke="#fff"
                      strokeWidth={3}
                      style={{ cursor: "pointer", filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                      whileHover={{ scale: 1.3 }}
                      animate={
                        selectedCountry?.name === country.name
                          ? { scale: [1, 1.2, 1] }
                          : {}
                      }
                      transition={{
                        duration: 0.3,
                        ...(selectedCountry?.name === country.name && {
                          repeat: Infinity,
                          duration: 1,
                        }),
                      }}
                    />
                    {/* Inner dot - larger */}
                    <circle r={4} fill="#fff" style={{ pointerEvents: "none" }} />
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Hover Tooltip - hidden on touch devices */}
            <AnimatePresence>
              {hoveredCountry && !selectedCountry && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="hidden sm:block absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: countries.find(
                          (c) => c.name === hoveredCountry
                        )?.color,
                      }}
                    />
                    <span className="font-semibold text-[#152a45]">
                      {hoveredCountry}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Click to view details
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile tap hint - only show on mobile when nothing selected */}
            {!selectedCountry && (
              <div className="sm:hidden absolute bottom-4 left-4 right-4 text-center text-xs text-gray-500 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                Tap a marker to view country details
              </div>
            )}

            {/* Zoom hint - moves up when info card is shown, different text for mobile */}
            <div className={`absolute right-4 text-xs text-gray-400 bg-white/80 px-2 py-1 rounded transition-all duration-300 ${selectedCountry ? 'bottom-32 sm:bottom-28' : 'bottom-14 sm:bottom-4'}`}>
              <span className="hidden sm:inline">Scroll to zoom • Drag to pan</span>
              <span className="sm:hidden">Pinch to zoom</span>
            </div>

            {/* Selected Country Info Card - Bottom of Map */}
            <AnimatePresence>
              {selectedCountry && (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-r from-[#152a45] to-[#1e3a5f] text-white rounded-b-2xl"
                >
                  {/* Close button - top right */}
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-400 hover:text-white transition-colors cursor-pointer z-10"
                    aria-label="Close"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Mobile: Clean compact layout */}
                  <div className="sm:hidden flex items-center justify-between pr-8">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: selectedCountry.color }}
                      />
                      <h3 className="font-bold text-base">{selectedCountry.name}</h3>
                    </div>
                    <p className="text-[#d4af37] font-bold text-base">
                      {selectedCountry.projects}
                    </p>
                  </div>

                  {/* Desktop: Horizontal layout */}
                  <div className="hidden sm:flex items-center justify-between gap-4 pr-8">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-4 h-4 rounded-full shrink-0"
                        style={{ backgroundColor: selectedCountry.color }}
                      />
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg">{selectedCountry.name}</h3>
                        <p className="text-gray-300 text-sm truncate">
                          {selectedCountry.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <div className="text-center">
                        <p className="text-[#d4af37] font-bold text-lg">
                          {selectedCountry.projects}
                        </p>
                        <p className="text-gray-400 text-xs">Completed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#d4af37] font-bold text-lg">
                          {selectedCountry.since}
                        </p>
                        <p className="text-gray-400 text-xs">Operations</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
