import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos — Alejandro Vázquez Cobo",
};

export default function Proyectos() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <p className="font-display text-lg tracking-[0.3em] text-coral">
        GALERÍA
      </p>
      <h1 className="mt-4 font-display text-5xl -skew-x-3 sm:text-7xl">
        PROYECTOS
      </h1>

      <div className="mt-16 border-2 border-dashed border-white/15 px-8 py-20 text-center">
        <p className="font-display text-2xl text-white/40">
          AÚN NO HAY PROYECTOS PUBLICADOS
        </p>
        <p className="mt-3 font-sans text-white/40">
          Cada proyecto se desplegará en su propio subdominio y aparecerá
          aquí.
        </p>
      </div>
    </div>
  );
}
