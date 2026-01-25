'use client';
import { TextLoop } from '@/components/ui/text-loop';
import { useState } from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export function SynchronizedProjectCounter() {
  const [direction, setDirection] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { year: '2024', count: 6 },
    { year: '2023', count: 16 },
    { year: '2022', count: 19 },
  ];

  return (
    <div className={`${manrope.className}`}>
      <div className="flex items-center gap-2">
        <TextLoop
          className="text-lg font-semibold text-white"
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 19,
            mass: 1.2,
          }}
          interval={2.5}
          onIndexChange={(index:number) => {
            setCurrentIndex(index);
            setDirection(index > currentIndex ? 1 : -1);
          }}
          variants={{
            initial: {
              y: -direction * 20,
              rotateX: -direction * 90,
              opacity: 0,
              filter: 'blur(4px)',
            },
            animate: {
              y: 0,
              rotateX: 0,
              opacity: 1,
              filter: 'blur(0px)',
            },
            exit: {
              y: direction * 20,
              rotateX: direction * 90,
              opacity: 0,
              filter: 'blur(4px)',
            },
          }}
        >
          {projects.map((project) => (
            <span key={project.year}>{project.year}</span>
          ))}
        </TextLoop>
        <span className="text-lg font-semibold text-white">Main Projects</span>
      </div>

      <TextLoop
        className="text-6xl w-full text-right font-bold text-white"
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 19,
          mass: 1.2,
        }}
        interval={2.5}
        onIndexChange={(index:number) => {
          // This ensures both loops stay in sync
          setDirection(index > currentIndex ? 1 : -1);
        }}
        variants={{
          initial: {
            y: -direction * 20,
            rotateX: -direction * 90,
            opacity: 0,
            filter: 'blur(4px)',
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: 'blur(0px)',
          },
          exit: {
            y: direction * 20,
            rotateX: direction * 90,
            opacity: 0,
            filter: 'blur(4px)',
          },
        }}
      >
        {projects.map((project) => (
          <span key={`count-${project.year}`}>{project.count}</span>
        ))}
      </TextLoop>
    </div>
  );
}