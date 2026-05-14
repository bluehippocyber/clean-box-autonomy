import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tsunami from "@/assets/cleanbox-tsunami-hero.png";

const tsunamiFeatures = [
  "Mobile wheel-based platform for placement flexibility",
  "Internal fresh water and waste systems eliminate plumbing dependency",
  "Deploy where traditional installations are impractical",
  "Elevated finishes and executive-level presentation",
  "Premium user comfort experience",
  "Ideal for luxury care providers, private estates, wellness centers, and VIP recovery environments",
];

const waveFeatures = [
  "Low-profile stationary entry design for safer and easier transfers",
  "Direct plumbing integration for seamless unlimited operation",
  "Built for high-volume daily bathing environments",
  "Helps reduce caregiver strain during bathing routines",
  "Creates a cleaner, more dignified user experience",
  "Ideal for nursing homes, rehab centers, hospitals, and care facilities",
];

export const ProductLine = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-surface-clinical relative overflow-hidden">
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
            Product Line
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Two elite solutions.
            <br />
            <span className="text-primary">One future of bathing.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore Clean Box Wave and Clean Box Tsunami — engineered to transform hygiene care through safety, dignity, and modern design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Tsunami */}
          <article className="group relative rounded-3xl bg-card border border-border shadow-card overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
              <img src={tsunami} alt="Clean Box Tsunami" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-red">
                Flagship
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Mobile · Self-Contained · Luxury
              </div>
              <h3 className="text-2xl font-bold text-foreground">Clean Box Tsunami</h3>
              <p className="mt-2 text-sm font-semibold text-primary">Luxury Freedom Without Limits</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Our flagship self-contained mobile model built for premium environments where flexibility and prestige matter most.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {tsunamiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" className="mt-8 w-full" asChild>
                <Link to="/products" className="group/btn">
                  Explore Tsunami
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </article>

          {/* Wave */}
          <article className="group relative rounded-3xl bg-card border border-border shadow-card overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-foreground overflow-hidden flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-7xl font-black text-white/10 tracking-tight">WAVE</div>
                <div className="mt-4 text-sm font-semibold text-white/60 uppercase tracking-widest">Clean Box Wave</div>
                <div className="mt-2 text-xs text-white/40 uppercase tracking-wider">Institutional Release 2026</div>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white/80">
                Stationary
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Stationary · Plumbed · Institutional
              </div>
              <h3 className="text-2xl font-bold text-foreground">Clean Box Wave</h3>
              <p className="mt-2 text-sm font-semibold text-primary">The Smart Foundation for Modern Care</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Designed for facilities that demand reliability, accessibility, and daily operational efficiency.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {waveFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outlineRed" className="mt-8 w-full" asChild>
                <Link to="/products">Explore Wave</Link>
              </Button>
            </div>
          </article>
        </div>

        {/* Compare strip */}
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Wave</div>
              <div className="text-xs text-muted-foreground mt-0.5">Permanent power · Daily efficiency · Operational workhorse</div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-foreground" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Tsunami</div>
              <div className="text-xs text-muted-foreground mt-0.5">Portable prestige · Flexible deployment · Flagship innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
