import { projects } from "@/lib/portfolio-data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex min-h-screen items-center px-4 py-20 sm:px-8 sm:py-24"
    >
      <div className="w-full">
        <div className="mb-8 flex items-end justify-between gap-4 border-b pb-4">
          <div className="flex items-end">
            <h2 className="text-5xl leading-none sm:text-8xl">P</h2>
            <h2 className="text-4xl leading-none sm:text-6xl">rojects</h2>
          </div>
        </div>

        <div className="divide-y border-y">
          {projects.map((project) => (
            <article key={project.title} className="py-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl leading-tight sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wide">
                  {project.status} · {project.year}
                </p>
              </div>
              <p className="mt-3 w-full text-sm leading-7 sm:text-xl">
                {project.description}
              </p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center justify-center border px-3 py-2 text-sm font-bold"
                >
                  View project
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
