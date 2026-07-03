import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

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

export default function SobreMi() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <PageHeading eyebrow="SOBRE MÍ" title="CURRÍCULUM" />

      <div className="divide-y divide-white/10">
        <Section title="BIO">
          <p>Pendiente de actualizar.</p>
        </Section>

        <Section title="EXPERIENCIA">
          <p>Pendiente de actualizar.</p>
        </Section>

        <Section title="SKILLS">
          <p>Pendiente de actualizar.</p>
        </Section>

        <Section title="EDUCACIÓN">
          <p>Pendiente de actualizar.</p>
        </Section>
      </div>
    </div>
  );
}
