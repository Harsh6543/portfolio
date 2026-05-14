import { projects, personalInfo } from "../data"; 
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";
import { Github } from "lucide-react";

/**
 * Projects — grid of ProjectCard components.
 * GitHub profile link at the bottom.
 */
export default function Projects() {
  return (
    <SectionWrapper id="projects" className="max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="03 — Projects"
        title="Things I've Built"
        subtitle="A collection of projects I've built to sharpen my skills and solve real problems."
      />

      {/* Project grid — responsive 1 → 2 col */}
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>

      {/* View all on GitHub */}
      <div className="mt-12 flex justify-center">
        <Button
          href={personalInfo.github}
          variant="outline"
          external
          icon={<Github size={16} />}
        >
          See All Projects on GitHub
        </Button>
      </div>
    </SectionWrapper>
  );
}
