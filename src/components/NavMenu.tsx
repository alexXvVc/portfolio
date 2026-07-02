"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ITEMS = [
  { href: "/", label: "INICIO" },
  { href: "/sobre-mi", label: "SOBRE MÍ" },
  { href: "/proyectos", label: "PROYECTOS" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const focused = hovered ?? pathname;

  return (
    <>
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 lg:hidden">
        <Link href="/" className="font-display text-xl tracking-wide text-lime">
          AVC
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="font-display text-sm tracking-widest text-ink"
        >
          {open ? "CERRAR" : "MENÚ"}
        </button>
      </div>

      <nav
        className={`${
          open ? "flex" : "hidden"
        } lg:flex fixed inset-y-0 left-0 z-40 w-full flex-col justify-between bg-linear-to-b from-bg-2 to-bg px-8 py-10 lg:w-72 lg:border-r lg:border-white/10`}
      >
        <div>
          <Link
            href="/"
            className="font-display hidden text-2xl tracking-wide text-lime lg:block"
          >
            ALEJANDRO
            <br />
            VÁZQUEZ
          </Link>

          <ul
            className="mt-4 flex flex-col gap-4 lg:mt-20 lg:gap-5"
            onMouseLeave={() => setHovered(null)}
          >
            {ITEMS.map((item) => {
              const active = item.href === focused;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    onFocus={() => setHovered(item.href)}
                    onBlur={() => setHovered(null)}
                    onClick={() => setOpen(false)}
                    className="relative flex h-10 items-center overflow-visible"
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-y-0 -left-6 right-2 -skew-x-12 bg-coral transition-all duration-300 ease-out ${
                        active
                          ? "translate-x-2 translate-y-1.5 opacity-100"
                          : "translate-x-0 translate-y-0 opacity-0"
                      }`}
                    />
                    <span
                      aria-hidden
                      className={`absolute inset-y-0 -left-6 right-2 -skew-x-12 bg-lime transition-all duration-300 ease-out ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`font-display relative origin-left -skew-x-6 whitespace-nowrap transition-all duration-300 ease-out ${
                        active
                          ? "translate-x-2 scale-125 text-bg"
                          : "scale-100 text-ink/35"
                      } text-3xl sm:text-4xl lg:text-2xl`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="font-sans text-xs tracking-widest text-white/40">
          alejandrovazquez.dev
        </p>
      </nav>
    </>
  );
}
