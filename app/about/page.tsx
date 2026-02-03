"use client";

import { aboutData } from "@/data/about";
import { pageLoadGSAP } from "@/utils/use-gsap";
import { useEffect, useRef } from "react";

const About = () => {
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
      <h1 className="text-5xl sm:text-6xl font-extrabold">About Shitanshu</h1>
      <h2 className="mt-2 text-xl sm:text-2xl">
        A bit about me and how I got into coding.
      </h2>

      <div className="mt-12 flex flex-col gap-10">
        {aboutData.map((d, i) => {
          return (
            <div key={i}>
              <h3 className="text-xl text-gray-500 font-semibold">
                {d.topicName}
              </h3>
              <p className="text-lg">{d.details}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default About;
