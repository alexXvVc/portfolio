import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden px-6 py-20 sm:px-12 lg:px-16 lg:py-32">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rotate-12 bg-bg-2 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-10 h-40 w-40 -rotate-6 bg-coral/30 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]"
      />

      <p className="relative font-display text-lg tracking-[0.3em] text-coral">
        DESARROLLADOR
      </p>
      <h1 className="relative mt-4 font-display text-6xl leading-[0.95] -skew-x-3 sm:text-8xl lg:text-9xl">
        ALEJANDRO
        <br />
        <span className="text-lime">VÁZQUEZ</span> COBO
      </h1>

      <p className="relative mt-8 max-w-xl font-sans text-lg text-white/70">
        Portfolio personal — proyectos que se pueden abrir y usar en vivo,
        directamente desde aquí.
      </p>

      <div className="relative mt-10 flex flex-wrap gap-4">
        <Link
          href="/proyectos"
          className="font-display -skew-x-6 border-2 border-lime px-8 py-3 text-lime transition-colors hover:bg-lime hover:text-bg"
        >
          VER PROYECTOS
        </Link>
        <Link
          href="/sobre-mi"
          className="font-display -skew-x-6 border-2 border-white/30 px-8 py-3 text-ink transition-colors hover:border-coral hover:text-coral"
        >
          SOBRE MÍ
        </Link>
      </div>
    </div>
  );
}
