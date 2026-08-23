import { projects } from "@/lib/portfolio-data";
import ProjectColumnDropdown from "../ui/ProjectColumnDropdown";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center px-4 py-20 sm:px-8 sm:py-24"
    >
      <div className="w-full">
        <div className="mb-8 flex items-end justify-between gap-4 border-b pb-4">
          <div className="flex items-end">
            <h2
              className="[font-family:var(--font-mea-culpa)] text-5xl leading-none sm:text-8xl"
            >
              P
            </h2>
            <h2
              className="[font-family:var(--font-newsreader)] text-4xl leading-none sm:text-6xl"
            >
              rojects
            </h2>
          </div>
        </div>

        <div className="divide-y border-y">
          {projects.map((project) => (
            <ProjectColumnDropdown key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}