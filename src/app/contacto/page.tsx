import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Alejandro Vázquez Cobo",
};

export default function Contacto() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <p className="font-display text-lg tracking-[0.3em] text-coral">
        HABLEMOS
      </p>
      <h1 className="mt-4 font-display text-5xl -skew-x-3 sm:text-7xl">
        CONTACTO
      </h1>

      <p className="mt-8 max-w-xl font-sans text-white/70">
        Pendiente de añadir email y redes.
      </p>
    </div>
  );
}
