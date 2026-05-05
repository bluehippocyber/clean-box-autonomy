import { Cpu, Droplets, Sparkles, Box } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Anodized Aluminum Frame",
    desc: "Aerospace-grade, corrosion-resistant chassis built to withstand decades of daily use in clinical environments.",
    spec: "6061-T6 ALLOY",
  },
  {
    icon: Sparkles,
    title: "Soft-Bristle Exfoliating Brushes",
    desc: "Medical-grade silicone bristles deliver gentle, full-body cleansing while preserving sensitive skin.",
    spec: "32 PRESSURE ZONES",
  },
  {
    icon: Droplets,
    title: "Dual-Tank Water System",
    desc: "Independent fresh and greywater tanks with closed-loop sanitization eliminate cross-contamination entirely.",
    spec: "12 GAL CAPACITY",
  },
  {
    icon: Cpu,
    title: "Adaptive Care Controller",
    desc: "Onboard processor coordinates cycle, temperature, and pressure based on each user's care profile.",
    spec: "ARM CORTEX-A78",
  },
];

export const Engineering = () => {
  return (
    <section id="technology" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
            01 / Engineering of Care
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Precision hardware,
            <br />
            built for every body.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Every component of the Clean Box system is engineered to medical-device standards —
            because dignity demands more than convenience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-elevated transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/60">
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-5 pt-5 border-t border-border">
                <span className="text-[10px] font-mono font-semibold tracking-widest text-primary">
                  {f.spec}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
