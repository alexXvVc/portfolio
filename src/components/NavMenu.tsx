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

          <ul className="mt-4 flex flex-col gap-1 lg:mt-16">
            {ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-center gap-3 py-2 font-display text-4xl leading-none -skew-x-6 transition-colors sm:text-5xl lg:text-3xl ${
                      active ? "text-lime" : "text-ink hover:text-coral"
                    }`}
                  >
                    <span
                      className={`h-2 w-6 shrink-0 bg-coral transition-transform ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                    {item.label}
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
