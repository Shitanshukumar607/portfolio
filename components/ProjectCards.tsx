import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

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
