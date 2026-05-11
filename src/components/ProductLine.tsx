import { Check, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import tsunami from "@/assets/cleanbox-tsunami-hero.png";

const tsunamiSpecs = [
  "24-jet precision hydrotherapy system",
  "Dual-tank isolation — 100% fresh / waste separation",
  "Automated drying cycle with aroma + chromotherapy",
  "Mobile, self-contained — no plumbing required",
  "Anodized aluminum frame, polypropylene enclosure",
];

const waveSpecs = [
  "Stationary clinical foundation",
  "Direct plumbing integration for unlimited operation",
  "Engineered for high-volume daily bathing",
  "Permanent install for nursing homes &amp; hospitals",
  "Coming Soon — Institutional Release 2026",
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
            Explore the flagship Clean Box Tsunami and the Clean Box Wave —
            engineered to transform hygiene care across every clinical environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Tsunami */}
          <article className="group relative rounded-3xl bg-white border border-border shadow-card overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
              <img src={tsunami} alt="Clean Box Tsunami v1" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider shadow-red">
                Flagship
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Mobile &middot; Self-contained
              </div>
              <h3 className="text-2xl font-bold text-foreground">Clean Box Tsunami v1</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Luxury freedom without limits. Our flagship self-contained mobile model — built for premium environments where flexibility and prestige matter most.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {tsunamiSpecs.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: s }} />
                  </li>
                ))}
              </ul>
              <Button variant="cta" className="mt-8 w-full" asChild>
                <a href="#contact" className="group/btn">
                  Request Tsunami Quote
                  <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </article>

          {/* Wave */}
          <article className="group relative rounded-3xl bg-white border border-border shadow-card overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-gradient-clinical overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 blueprint-grid opacity-40" />
              <div className="relative text-center px-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 backdrop-blur border border-border text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                  <Lock className="w-3 h-3" /> Institutional Release 2026
                </div>
                <div className="mt-6 text-5xl font-bold text-foreground/20 tracking-tight">WAVE</div>
                <div className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Schematic preview
                </div>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-foreground text-background text-[10px] font-bold uppercase tracking-wider">
                Stationary
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Stationary &middot; Plumbed
              </div>
              <h3 className="text-2xl font-bold text-foreground">Clean Box Wave</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The stationary foundation for permanent clinical installations.
                Engineered for maximum stability and high-volume facility hygiene.
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {waveSpecs.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-foreground/85">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: s }} />
                  </li>
                ))}
              </ul>
              <Button variant="outlineRed" className="mt-8 w-full" asChild>
                <a href="#contact">Join the Wave Waitlist</a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
