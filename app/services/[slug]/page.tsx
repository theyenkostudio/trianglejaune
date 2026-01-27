"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import { services } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Image from 'next/image';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

const serviceConfig: Record<string, { image: string, slug: string, key: string }> = {
  'wash-sector': {
    image: "/images/wash.png",
    slug: "wash-sector",
    key: 'wash'
  },
  'mechanical': {
    image: "/images/mechanical-works.png",
    slug: "mechanical",
    key: 'mech'
  },
  'electrical': {
    image: "/images/electrical-works.png",
    slug: "electrical",
    key: 'elec'
  },
  'civil': {
    image: "/images/civil-works.png",
    slug: "civil",
    key: 'civil'
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const config = serviceConfig[slug];

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  // @ts-ignore
  const data = services[config.key];

  const otherServices = Object.keys(serviceConfig)
    .filter(s => s !== slug)
    .map(s => ({
      ...serviceConfig[s],
      // @ts-ignore
      title: services[serviceConfig[s].key].title
    }));

  return (
    <main className={`${manrope.className} bg-white min-h-screen`}>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src={config.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#152a45] via-[#152a45]/60 to-transparent"></div>

        <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-[#d4af37] font-bold mb-8 hover:gap-4 transition-all">
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </Link>
            <h1 className={`${bricolage.className} text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-tight`}>
              {data.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-7">
              <h2 className={`${bricolage.className} text-4xl font-bold text-[#152a45] mb-8`}>
                Comprehensive Solutions in <span className="text-[#d4af37]">{data.title}</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Triangle Jaune Group provides world-class expertise in {data.title.toLowerCase()}. We deliver integrated engineering systems developed to empower our customers by capitalizing on their existing infrastructure while meeting the diversified needs of public and private organizations.
              </p>

              <div className="space-y-6">
                {data.items.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-[#152a45] rounded-[2rem] p-8 md:p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] opacity-10 rounded-full blur-2xl"></div>

                <h3 className={`${bricolage.className} text-3xl font-bold mb-8`}>Other Services</h3>
                <div className="space-y-4">
                  {otherServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-[#d4af37] hover:bg-white/5 transition-all"
                    >
                      <span className="font-bold text-lg group-hover:text-[#d4af37] transition-colors">{service.title}</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#d4af37]" />
                    </Link>
                  ))}
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-[#d4af37] text-white">
                  <p className="font-bold text-[#152a45] text-lg mb-2">Technical Expertise</p>
                  <p className="text-[#152a45]/80 text-sm">Our vast experience ensures all diversified applications operate smoothly together as one total solution.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />

      <Footer />
    </main>
  );
}
