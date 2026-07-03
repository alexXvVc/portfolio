import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre mí — Alejandro Vázquez Cobo",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-6 py-8">
      <div className="mt-2 h-8 w-2 shrink-0 -skew-x-12 bg-lime/70" />
      <div>
        <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
        <div className="mt-4 font-sans text-white/70">{children}</div>
      </div>
    </section>
  );
}

const SECTIONS = [
  { title: "BIO", content: "Pendiente de actualizar." },
  { title: "EXPERIENCIA", content: "Pendiente de actualizar." },
  { title: "SKILLS", content: "Pendiente de actualizar." },
  { title: "EDUCACIÓN", content: "Pendiente de actualizar." },
];

export default function SobreMi() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <PageHeading eyebrow="SOBRE MÍ" title="CURRÍCULUM" />

      <div className="divide-y divide-white/10">
        {SECTIONS.map((section, index) => (
          <Reveal key={section.title} delayMs={index * 80}>
            <Section title={section.title}>
              <p>{section.content}</p>
            </Section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
