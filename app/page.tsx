"use client";

import HeroText, { HeroTextHandle } from "@/components/HeroText";
import ProjectCards from "@/components/ProjectCards";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Page() {
  const heroRef = useRef<HeroTextHandle>(null);

  useEffect(() => {
    const master = gsap.timeline();

    if (heroRef.current) {
      master.add(heroRef.current.gsapText());
    }
  }, []);

  return (
    <main className="flex flex-col gap-8 mt-25">
      <HeroText ref={heroRef} />
      <Image
        src="/hero.webp"
        width="50"
        height="50"
        alt="Me at computer"
        className="w-full h-full rounded-xl"
      />
      <ProjectCards />
    </main>
  );
}
