import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto — Alejandro Vázquez Cobo",
};

const CHANNELS = [
  { label: "EMAIL", value: "Pendiente de actualizar" },
  { label: "GITHUB", value: "Pendiente de actualizar" },
  { label: "LINKEDIN", value: "Pendiente de actualizar" },
];

export default function Contacto() {
  return (
    <div className="px-6 py-16 sm:px-12 lg:px-16">
      <PageHeading eyebrow="HABLEMOS" title="CONTACTO" />

      <ul className="max-w-xl divide-y divide-white/10">
        {CHANNELS.map((channel, index) => (
          <Reveal key={channel.label} delayMs={index * 80}>
            <li className="flex items-center gap-6 py-5">
              <span className="h-8 w-2 shrink-0 -skew-x-12 bg-coral/70" />
              <div>
                <p className="font-display text-sm tracking-widest text-white/40">
                  {channel.label}
                </p>
                <p className="mt-1 font-sans text-lg text-ink">
                  {channel.value}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
