export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[140px]" />

      <div className="shard-a absolute -left-32 -top-24 h-96 w-96 bg-bg-2/70 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]" />
      <div className="shard-b absolute -right-28 top-1/4 h-72 w-72 bg-coral/10 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]" />
      <div className="shard-c absolute -left-20 bottom-0 h-80 w-80 bg-lime/5 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]" />
      <div
        className="shard-b absolute -right-16 bottom-10 h-56 w-56 bg-bg-2/50 [clip-path:polygon(20%_0,100%_0,80%_100%,0_100%)]"
        style={{ animationDelay: "-6s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
