"use client";
import { Slant as Hamburger } from "hamburger-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mt-6 mx-4 lg:mx-8 lg:mt-8 xl:mx-10 xl:mt-10 2xl:max-w-7xl fixed 2xl:mx-auto top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
      <div>
        <nav className="flex flex-row items-center justify-between">
          <Image
            src="/logomark.png"
            alt="TriangleJaune Logo"
            width={60}
            height={40}
          />
          <div className="text-white">
            <Hamburger />
          </div>
        </nav>
      </div>
    </header>
  );
}
