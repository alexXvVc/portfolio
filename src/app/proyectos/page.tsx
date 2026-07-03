import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Proyectos — Alejandro Vázquez Cobo",
};

const projects: Project[] = [];

export default function Proyectos() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <PageHeading eyebrow="GALERÍA" title="PROYECTOS" />

      {projects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="relative border-2 border-dashed border-white/15 px-8 py-20 text-center [clip-path:polygon(0_0,100%_0,100%_calc(100%-2rem),calc(100%-2rem)_100%,0_100%)]">
            <p className="font-display text-2xl text-white/40">
              AÚN NO HAY PROYECTOS PUBLICADOS
            </p>
            <p className="mt-3 font-sans text-white/40">
              Cada proyecto se desplegará en su propio subdominio y aparecerá
              aquí.
            </p>
          </div>
        </Reveal>
      )}
    </div>
  );
}
