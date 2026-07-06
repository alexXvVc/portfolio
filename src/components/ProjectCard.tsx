import Link from "next/link";
import { cn } from "@/lib/cn";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
}: Project) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block border border-white/10 bg-bg-2/40 p-6",
        "transition-colors hover:border-lime",
        "[clip-path:polygon(0_0,100%_0,100%_calc(100%-1.5rem),calc(100%-1.5rem)_100%,0_100%)]",
      )}
    >
      <h3 className="font-display text-2xl -skew-x-3 transition-colors group-hover:text-lime">
        {title}
      </h3>
      <p className="mt-3 font-sans text-sm text-white/60">{description}</p>

      <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-sans text-xs tracking-wide text-coral"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-6 block font-display text-sm tracking-widest text-lime opacity-0 transition-opacity group-hover:opacity-100">
        VER PROYECTO →
      </span>
    </Link>
  );
}
