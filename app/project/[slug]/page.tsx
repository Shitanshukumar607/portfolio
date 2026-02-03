"use client";

import AnchorButton from "@/components/ui/AnchorButton";
import { getProjectBySlug } from "@/data/projects";
import { ProjectParagraph } from "@/types/types";
import { pageLoadGSAP } from "@/utils/use-gsap";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect, useRef } from "react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { cleanup } = pageLoadGSAP(containerRef.current);

    return () => {
      cleanup();
    };
  }, []);

  if (!project) {
    notFound();
  }

  return (
    <main ref={containerRef} className="min-h-screen my-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={20} />
      </Link>

      {/* Project Header */}
      <header className="mb-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold">{project.title}</h1>
      </header>

      {/* Hero Image */}
      <div className="my-6">
        <Image
          className="w-full h-auto block rounded-lg"
          src={project.image}
          alt={project.title}
          width={800}
          height={510}
          priority
        />
      </div>

      {/* Project Description */}
      <article className="prose prose-lg max-w-none">
        {project.paragraphs?.map((p, index) => (
          <p key={index} className="my-4 text-lg text-foreground">
            {typeof p === "object" ? (
              <>
                {(p as ProjectParagraph).text}
                {(p as ProjectParagraph).link && (
                  <a
                    href={(p as ProjectParagraph).link!.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {(p as ProjectParagraph).link!.text}
                  </a>
                )}
              </>
            ) : (
              p
            )}
          </p>
        ))}

        {/* Tech Stack */}
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Built with:</span> {project.stack}
        </p>
      </article>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8">
        <AnchorButton
          text="Visit"
          href={project.url}
          icon={<LinkIcon size={18} />}
        />
        {project.githubUrl && (
          <AnchorButton
            text="Code"
            href={project.githubUrl}
            icon={<Github size={18} />}
          />
        )}
      </div>
    </main>
  );
}
