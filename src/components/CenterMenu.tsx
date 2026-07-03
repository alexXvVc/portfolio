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

export default function CenterMenu() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const items = ITEMS.filter((item) => item.href !== pathname);

  return (
    <header className="flex min-h-dvh flex-col px-6 py-10">
      <Link
        href="/"
        className="menu-item-in self-center font-display text-lg tracking-[0.4em] text-lime sm:text-xl"
      >
        ALEJANDRO VÁZQUEZ COBO
      </Link>

      <nav className="flex flex-1 items-center justify-center">
        <ul
          className="flex flex-col items-center gap-8 sm:gap-10"
          onMouseLeave={() => setHovered(null)}
        >
          {items.map((item, index) => {
            const active = item.href === hovered;
            const dimmed = hovered !== null && !active;
            return (
              <li
                key={item.href}
                className="menu-item-in relative"
                style={{ animationDelay: `${120 + index * 90}ms` }}
              >
                <Link
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  onFocus={() => setHovered(item.href)}
                  onBlur={() => setHovered(null)}
                  className={`relative flex h-16 items-center justify-center px-6 transition-transform duration-300 ease-out ${
                    active ? "scale-110" : dimmed ? "scale-90" : "scale-100"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-y-2 -left-4 right-0 -skew-x-12 bg-coral transition-all duration-300 ease-out ${
                      active
                        ? "translate-x-2 translate-y-1.5 opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  <span
                    aria-hidden
                    className={`absolute inset-y-2 -left-4 right-0 -skew-x-12 bg-lime transition-all duration-300 ease-out ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`font-display relative -skew-x-6 whitespace-nowrap text-5xl transition-colors duration-300 ease-out sm:text-6xl lg:text-7xl ${
                      active ? "text-bg" : dimmed ? "text-ink/30" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
