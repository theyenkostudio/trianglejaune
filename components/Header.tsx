"use client";
import React from "react";
import { Slant as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Wrench, Droplets, Zap, HardHat, Drill, Building2, Factory, Sun, Waves } from "lucide-react";

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
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        marginTop: isScrolled ? 0 : 24,
        width: isScrolled ? "100%" : "calc(100% - 2rem)",
        maxWidth: isScrolled ? "100%" : "80rem",
        borderRadius: isScrolled ? 0 : 12,
        backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        padding: isScrolled ? "1rem 2rem" : "0.5rem 1rem",
      }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md"
    >
      <div className="w-full">
        <nav className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src="/logomark.png"
              alt="TriangleJaune Logo"
              width={60}
              height={40}
            />
          </Link>

          {/* Mobile Menu */}
          <div className="text-white lg:hidden">
            <Hamburger />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList >
              <NavigationMenuItem >
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10`}>
                  <Link href="/" className="text-white ">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white/80">
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
                <NavigationMenuTrigger className="text-white hover:text-white/80">
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
  );
}
