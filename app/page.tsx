"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroText, { HeroTextHandle } from "@/components/HeroText";
import Image from "next/image";

export default function Page() {
  const heroRef = useRef<HeroTextHandle>(null);

  useEffect(() => {
    const master = gsap.timeline();

    if (heroRef.current) {
      master.add(heroRef.current.gsapText());
    }
  }, []);

  return (
    <main className="flex flex-col px-6 gap-8 py-10">
      <HeroText ref={heroRef} />
      <Image
        src="/hero.webp"
        width="50"
        height="50"
        alt="Me at computer"
        className="w-full h-full rounded-xl"
      />
    </main>
  );
}
