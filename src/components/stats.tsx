interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "200+", label: "Active Stores" },
  { value: "3,000+", label: "Active Customers" },
  { value: "5,000+", label: "Products Listed" },
  { value: "99.99%", label: "Platform Uptime" },
];

export function Stats() {
  return (
    <section className="relative py-12 md:py-16 bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center md:items-start"
            >
              {/* Optional vertical indicator line for desktop */}
              {index > 0 && (
                <div className="hidden md:block absolute left-[-1.5rem] top-2 bottom-2 w-px bg-border" />
              )}
              <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
