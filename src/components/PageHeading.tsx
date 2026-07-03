export default function PageHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-display text-lg tracking-[0.3em] text-coral">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-5xl -skew-x-3 sm:text-7xl">
        {title}
      </h1>
      <div className="mt-6 h-1.5 w-24 -skew-x-12 bg-lime" />
    </div>
  );
}
