interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "200+", label: "Active stores" },
  { value: "3,000+", label: "Active customers" },
  { value: "5,000+", label: "Products listed" },
  { value: "99.99%", label: "Platform uptime" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-16">
          <p className="max-w-sm text-balance text-lg leading-relaxed text-muted-foreground">
            Cambodian merchants are already running their stores on Riverbase,
            from neighborhood market stalls to wholesale distributors.
          </p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4 md:gap-x-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-heading text-3xl font-semibold tabular-nums tracking-tight text-foreground md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
