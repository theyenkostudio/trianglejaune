import { Facebook, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const locations = [
  {
    name: "Beirut - Lebanon",
    branch: "T.J Group S.A.L. Offshore",
    phone: "+961 1 878733 | +961 1 878732",
  },
  {
    name: "Damascus - Syria",
    branch: "Chahine & Partners Co",
    phone: "+963 959 099 938",
  },
  {
    name: "Abuja - Nigeria",
    branch: "Triangle Jaune Nig Ltd",
    phone: " +234 810 068 3583 | +234 903 770 0754",
  },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Agencies & Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className={`bg-[#152a45] text-white w-full ${manrope.className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Logo Section */}
        <div className="mb-12 lg:mb-16">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={150}
            height={50}
            className="object-contain hidden lg:block"
          />
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={100}
            height={50}
            className="object-contain lg:hidden"
          />
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {locations.map((location) => (
            <div key={location.name} className="space-y-3">
              <p className="text-xl lg:text-2xl font-bold text-[#d4af37] mb-4">
                {location.branch}
              </p>
              <p className=" text-gray-300 text-sm lg:text-base leading-relaxed">
                {location.name}
              </p>
              <a
                href={`tel:${location.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-gray-300 hover:text-[#d4af37] transition-colors text-sm lg:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>Telephone: {location.phone}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-8"></div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-0">
          <nav className="flex flex-wrap  lg:justify-start gap-6 lg:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#d4af37] transition-colors text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#d4af37] hover:text-[#d4af37] transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-gray-400 text-xs lg:text-sm">
            Copyright © 2026. All rights reserved. Website by{" "}
            <Link
              target="_blank"
              href="https://www.yenko.studio/"
              className="text-[#d4af37] hover:underline"
            >
              Yenko Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
