const partners = [
  "University of Tampa",
  "Florida Atlantic University Tech Runway",
  "Investor Catalyst Hub",
  "National Association of Reentry Professionals (NARP)",
];

export const CredibilityStrip = () => {
  return (
    <section aria-label="Featured At" className="border-y border-border bg-white">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted-foreground shrink-0">
            Featured At
          </div>
          <div className="grid grid-cols-2 md:flex md:flex-1 items-center justify-between gap-x-8 gap-y-3">
            {partners.map((p) => (
              <div key={p} className="text-sm md:text-[13px] font-semibold uppercase tracking-wide text-foreground/80 whitespace-nowrap">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
