"use client";
import React, { useState, useEffect } from "react";
import { Slant as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Wrench, Droplets, Zap, HardHat, Drill, Building2, Factory, Sun, Waves, ChevronRight, X } from "lucide-react";

const services = [
  {
    title: "Work Field - WASH Sector",
    href: "/services/wash-sector",
    description: "Water, Sanitation and Hygiene sector solutions",
    icon: Droplets,
  },
  {
    title: "Mechanical Works",
    href: "/services/mechanical",
    description: "Professional mechanical installation and maintenance",
    icon: Wrench,
  },
  {
    title: "Electrical Works",
    href: "/services/electrical",
    description: "Complete electrical systems and solutions",
    icon: Zap,
  },
  {
    title: "Civil Works",
    href: "/services/civil",
    description: "Construction and civil engineering services",
    icon: HardHat,
  },
];

const projects = [
  {
    title: "Boreholes",
    href: "/projects/boreholes",
    description: "Borehole drilling and development projects",
    icon: Drill,
  },
  {
    title: "Construction",
    href: "/projects/construction",
    description: "Building and infrastructure construction",
    icon: Building2,
  },
  {
    title: "Pumping Stations",
    href: "/projects/pumping-stations",
    description: "Water pumping station installations",
    icon: Factory,
  },
  {
    title: "Solar Systems",
    href: "/projects/solar",
    description: "Solar power system implementations",
    icon: Sun,
  },
  {
    title: "Water Networks",
    href: "/projects/water-networks",
    description: "Water distribution network projects",
    icon: Waves,
  },
];

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // // Prevent scroll when menu is open
  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          marginTop: isScrolled ? 0 : 24,
          width: isScrolled ? "100%" : "calc(100% - 2rem)",
          maxWidth: isScrolled ? "100%" : "80rem",
          borderRadius: isScrolled ? 0 : 12,
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.9)" : "rgba(0, 0, 0, 0.3)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
          padding: isScrolled ? "1rem 2rem" : "0.5rem 1rem",
        }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md"
      >
        <div className="w-full">
          <nav className="flex flex-row items-center justify-between">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logomark.png"
                alt="TriangleJaune Logo"
                width={60}
                height={40}
              />
            </Link>

            {/* Mobile Menu Trigger */}
            <div className="text-white lg:hidden">
              <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10`}>
                    <Link href="/about" className="text-white">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                          icon={service.icon}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10`}>
                    <Link href="/agencies-products" className="text-white hover:text-white/80">
                      Agencies & Products
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-white/80 bg-transparent">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {projects.map((project) => (
                        <ListItem
                          key={project.title}
                          title={project.title}
                          href={project.href}
                          icon={project.icon}
                        >
                          {project.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10`}>
                    <Link href="/contact" className="text-white hover:text-white/80">
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-28 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-12">
              <Link
                href="/"
                className="text-white text-3xl font-bold border-b border-white/10 pb-4 flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <ChevronRight className="text-[#d4af37]" />
              </Link>

              <div className="space-y-4">
                <p className="text-gray-500 uppercase text-xs tracking-widest font-bold">Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="text-white text-xl font-medium p-3 rounded-xl bg-white/5 flex items-center gap-3 active:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-5 h-5 text-[#d4af37]" />
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 uppercase text-xs tracking-widest font-bold">More</p>
                <div className="flex flex-col gap-6">
                  <Link
                    href="/agencies-products"
                    className="text-white text-2xl font-bold flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agencies & Products
                    <ChevronRight className="text-[#d4af37]" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-white text-2xl font-bold flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                    <ChevronRight className="text-[#d4af37]" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
