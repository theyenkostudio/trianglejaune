import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import { Button } from "./ui/button";
import { SynchronizedProjectCounter } from "./SynchronizedProjectCounter";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});


export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] xl:h-[85vh] min-h-150 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Freight transport railway"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative h-[80%] md:h-[92%] xl:h-[90%]  flex flex-col justify-end m-6 lg:m-8 xl:m-10 2xl:max-w-7xl 2xl:mx-auto ">
        <div className="">
          <div>
            <h1
              className={`${bricolage.className} text-white text-left text-4xl font-bold lg:max-w-xl xl:max-w-200 md:text-5xl lg:text-6xl`}
            >
              A global mission to give you an edge in <span className="text-blue-500">water works</span>.
            </h1>
            <Button className="bg-[#d4af37] mt-5 text-white px-8 py-6 rounded-lg font-semibold text-base hover:bg-[#1e3a5f] transition-colors duration-300">
              Learn More
            </Button>
          </div>
          <div className="hidden md:flex mt-10 flex-row justify-end">
            <div className="p-5 rounded-xl bg-black/10 backdrop-blur-md ">
              <p className={`${bricolage.className} uppercase text-sm text-[#d4af37] font-bold mb-2`}>
                Celebrating the past, innovating the future
              </p>
              <SynchronizedProjectCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
