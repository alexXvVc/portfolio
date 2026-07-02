import type { Metadata } from "next";

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
    <section className="border-t border-white/10 py-10">
      <h2 className="font-display -skew-x-3 text-3xl text-lime sm:text-4xl">
        {title}
      </h2>
      <div className="mt-6 font-sans text-white/70">{children}</div>
    </section>
  );
}

export default function SobreMi() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <p className="font-display text-lg tracking-[0.3em] text-coral">
        SOBRE MÍ
      </p>
      <h1 className="mt-4 font-display text-5xl -skew-x-3 sm:text-7xl">
        CURRÍCULUM
      </h1>

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
  );
}
