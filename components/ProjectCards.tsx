import ProjectCard from "@/components/ProjectCard";
import { ProjectType } from "@/types/types";

const projects: ProjectType[] = [
  {
    title: "Craft Your Portfolio",
    desc: "Automatically turns your resume into a clean portfolio and deploys it on GitHub Pages.",
    stack: "Next.js · Github API · GitHub Pages",
    image: "/craftYourPortfolio.png",
    date: "2026-01",
    url: "https://CraftYourPortfolio.vercel.app",
    slug: "1",
  },
  {
    title: "Drawspace",
    desc: "A collaborative whiteboard app with real-time drawing.",
    stack: "Next.js · Konva.js · WebSockets",
    image: "/dummy.jpg",
    date: "2025-12",
    url: "https://Drawspace.vercel.app",
    slug: "2",
  },
  {
    title: "AsciiYou",
    desc: "Turns your live webcam feed into real-time ASCII art using pixel sampling and canvas rendering.",
    stack: "React · getUserMedia · Canvas API",
    image: "/dummy.jpg",
    date: "2025-11",
    url: "https://asciiYou.vercel.app",
    slug: "3",
  },
];

export default function ProjectCards() {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-4xl sm:text-5xl mb-24">Selected Work</h1>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
