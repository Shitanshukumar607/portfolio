import ProjectCard from "@/components/ProjectCard";
import { ProjectType } from "@/types/types";

const projects: ProjectType[] = [
  {
    title: "Drawspace",
    desc: "A collaborative whiteboard app with real-time drawing.",
    stack: "Next.js · Fabric.js · WebSockets",
    image: "/dummy.jpg",
    date: "2025-07-01",
    url: "https://example.com",
    slug: "1",
  },
  {
    title: "Drawspace",
    desc: "A collaborative whiteboard app with real-time drawing.",
    stack: "Next.js · Fabric.js · WebSockets",
    image: "/dummy.jpg",
    date: "2025-07-01",
    url: "https://example.com",
    slug: "2",
  },
  {
    title: "Drawspace",
    desc: "A collaborative whiteboard app with real-time drawing.",
    stack: "Next.js · Fabric.js · WebSockets",
    image: "/dummy.jpg",
    date: "2025-07-01",
    url: "https://example.com",
    slug: "3",
  },
  {
    title: "Drawspace",
    desc: "A collaborative whiteboard app with real-time drawing.",
    stack: "Next.js · Fabric.js · WebSockets",
    image: "/dummy.jpg",
    date: "2025-07-01",
    url: "https://example.com",
    slug: "4",
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
