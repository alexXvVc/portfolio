import { cn } from "@/lib/cn";

const NOISE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

function Shard({
  anim,
  className,
  delay,
}: {
  anim: "shard-a" | "shard-b" | "shard-c";
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={cn(
        anim,
        "absolute [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]",
        className,
      )}
      style={delay ? { animationDelay: delay } : undefined}
    />
  );
}

export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[140px]" />

      <Shard anim="shard-a" className="-left-32 -top-24 h-96 w-96 bg-bg-2/70" />
      <Shard anim="shard-b" className="-right-28 top-1/4 h-72 w-72 bg-coral/10" />
      <Shard anim="shard-c" className="-left-20 bottom-0 h-80 w-80 bg-lime/5" />
      <Shard
        anim="shard-b"
        className="-right-16 bottom-10 h-56 w-56 bg-bg-2/50"
        delay="-6s"
      />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE_TEXTURE }}
      />
    </div>
  );
}
