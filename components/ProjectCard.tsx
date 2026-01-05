"use client";

import { ProjectType } from "@/types/types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Home } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import AnchorButton from "./ui/AnchorButton";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 55%",
            end: "top 10%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Image
        ref={imgRef}
        src={project.image}
        alt={project.title}
        width={50000}
        height={50000}
        loading="lazy"
        className="w-full h-full rounded-lg opacity-0 invisible"
      />

      <div className="work-text pt-2 pb-6 sticky bottom-0">
        <time
          className="mt-4 sm:mt-8 text-lg text-neutral-400"
          dateTime={project.date}
        >
          {project.date}
        </time>

        <h2 className="text-2xl sm:text-4xl font-semibold">{project.title}</h2>

        <p className="my-2 text-xl sm:text-2xl">{project.desc}</p>

        <p className="my-2 text-lg">{project.stack}</p>

        <div className="flex gap-4 mt-4">
          <AnchorButton text="Visit" href={project.url} icon={<Home />} />
          <AnchorButton
            text="Details"
            href={`/projects/${project.slug}`}
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </div>
  );
}
