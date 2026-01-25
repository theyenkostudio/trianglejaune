"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight, Droplets, HardHat, Zap, Building2 } from "lucide-react";
import Image from "next/image";

const serviceImages = {
  "wash-sector": "/images/wash.png", 
  "mechanical-works": "/images/mechanical-works.png",
  "electrical-works": "/images/electrical-works.png",
  "civil-works": "/images/civil-works.png",
};

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState("wash-sector");

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div className="hidden md:block relative h-125 rounded-2xl overflow-hidden">
        {Object.entries(serviceImages).map(([key, imagePath]) => (
          <div
            key={key}
            className={`absolute inset-0 transition-all duration-500 ${
              activeService === key
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={imagePath}
              alt={key}
              fill
              className="object-cover"
              priority={key === "wash-sector"}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        ))}
      </div>

      <div className="w-full">
        <Accordion
          className="flex w-full flex-col gap-3"
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          variants={{
            expanded: {
              opacity: 1,
              scale: 1,
            },
            collapsed: {
              opacity: 0,
              scale: 0.7,
            },
          }}
        >
          <AccordionItem
            value="wash-sector"
            className="p-2 border rounded-xl border-blue-200"
          >
            <AccordionTrigger className="w-full text-left text-zinc-950 py-4 dark:text-zinc-50">
              <div
                onClick={() => setActiveService("wash-sector")}
                className="flex items-center w-full"
              >
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="ml-2 text-zinc-950 font-semibold dark:text-zinc-50">
                    WASH Sector Works
                  </p>
                  <Droplets className="text-blue-600" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Our comprehensive WASH sector services cover the complete
                rehabilitation of water infrastructure including boreholes,
                pumping stations, and extensive pipeline networks. We specialize
                in restoring and upgrading water pipelines, sewage systems, and
                agricultural irrigation networks to ensure optimal performance.
                Our expertise extends to implementing modern solar energy
                solutions and conducting thorough construction and building
                rehabilitation work to meet the highest industry standards.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="mechanical-works"
            className="p-2 border rounded-xl border-blue-200"
          >
            <AccordionTrigger className="w-full py-4 text-left text-zinc-950 dark:text-zinc-50">
              <div
                onClick={() => setActiveService("mechanical-works")}
                className="flex items-center w-full"
              >
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="ml-2 font-semibold text-zinc-950 dark:text-zinc-50">
                    Mechanical Works
                  </p>
                  <HardHat className="text-blue-600" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                We provide complete mechanical solutions for water systems, from
                supplying and installing advanced booster and submersible pumps
                for boreholes to configuring horizontal and vertical pumps for
                pumping stations. Our services include comprehensive pipeline
                implementation using various materials such as galvanized steel,
                polyethylene, and ductile iron. We ensure system reliability
                through professional installation of valves, accessories, and
                sophisticated anti-water hammer systems to protect your
                infrastructure.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="electrical-works"
            className="p-2 border rounded-xl border-blue-200"
          >
            <AccordionTrigger className="w-full py-4 text-left text-zinc-950 dark:text-zinc-50">
              <div
                onClick={() => setActiveService("electrical-works")}
                className="flex items-center w-full"
              >
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="ml-2 font-semibold text-zinc-950 dark:text-zinc-50">
                    Electrical Works
                  </p>
                  <Zap className="text-blue-600" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Our electrical services encompass the full spectrum of power and
                control systems for water infrastructure. We design and install
                Motor Control Centers for pump operations, sophisticated
                electrical control panels, and comprehensive power and low
                current cable networks. Our expertise includes advanced controls
                and instrumentation for water and wastewater treatment plants,
                featuring motorized valves, sensors, and switches. We also
                specialize in sustainable energy solutions through PV solar
                system installations and reliable generator set implementations
                for uninterrupted operations.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="civil-works"
            className="p-2 border rounded-xl border-blue-200"
          >
            <AccordionTrigger className="w-full py-4 text-left text-zinc-950 dark:text-zinc-50">
              <div
                onClick={() => setActiveService("civil-works")}
                className="flex items-center w-full"
              >
                <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-90 dark:text-zinc-50" />
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="ml-2 font-semibold text-zinc-950 dark:text-zinc-50">
                    Civil Works
                  </p>
                  <Building2 className="text-blue-600" />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="origin-left">
              <p className="pl-6 pr-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                We deliver robust civil engineering solutions for water
                infrastructure projects, specializing in the rehabilitation of
                pumping stations, buildings, and water storage facilities with
                professional isolation work. Our construction capabilities
                include building tanks, specialized rooms, and complete
                structures tailored to your needs. We excel in implementing
                various tank systems including elevated tanks, ground-level
                reservoirs, and rainwater collection facilities. Our
                comprehensive piping system services cover excavation,
                backfilling, and asphalt restoration to ensure minimal
                disruption and lasting quality.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
