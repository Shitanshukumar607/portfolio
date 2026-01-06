"use client";

import { pageLoadGSAP } from "@/utils/use-gsap";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    date: "Current",
    description:
      "Deepening my understanding of distributed systems, scalability, and database design patterns. Reading 'Designing Data-Intensive Applications' and applying concepts in side projects.",
  },
  {
    date: "Q4 2025",
    description:
      "Built several complex applications using Next.js, including a real-time collaboration tool and an e-commerce platform with Stripe integration.",
  },
  {
    date: "Mid 2025",
    description:
      "Started contributing to open-source repositories. Fixed bugs and added features to popular React libraries, improving my code reading skills and collaboration ability.",
  },
  {
    date: "Early 2025",
    description:
      "Transitioned from basic knowledge to advanced concepts like Server Components, Suspense, and advanced hooks. Built a comprehensive portfolio of projects.",
  },
  {
    date: "Late 2024",
    description:
      "Started my coding journey. Focused on core web technologies: HTML, CSS, and JavaScript. Built foundational understanding through LeetCode and small projects.",
  },
];

const Now = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { cleanup } = pageLoadGSAP(containerRef.current);

    return () => {
      cleanup();
    };
  }, []);

  return (
    <main ref={containerRef} className="my-25">
      <h1 className="text-5xl sm:text-6xl font-extrabold">What's New?</h1>
      <h2 className="text-xl sm:text-2xl mt-2">
        Updates on life and what I’m working on.
      </h2>

      <div className="mt-12 flex flex-col ">
        {timelineData.map((item, index) => (
          <div key={index} className="relative group pb-8 last:pb-0">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-[.3rem] before:h-full before:px-px before:bg-neutral-300 dark:before:bg-gray-700 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-[.3rem] after:w-3 after:h-3 after:bg-neutral-300 dark:after:bg-gray-700 after:mt-[-4.5px] after:border-8 after:box-content after:border-background after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">
              <div className="pl-6 sm:pl-8 text-xl text-gray-500 font-semibold">
                <time>{item.date}</time>
              </div>
            </div>
            <div className="pl-6 sm:pl-8 mt-1">
              <p className="text-lg text-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Now;
