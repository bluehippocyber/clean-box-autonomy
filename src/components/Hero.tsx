import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import prototype from "@/assets/cleanbox-tsunami-hero.png";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-20 -right-40 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-soft border border-primary/20">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-deep">
                Tsunami v1 — Live Frame Prototype
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground">
              Dignity through{" "}
              <span className="text-primary">Autonomy.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              The world's first fully autonomous human bathing system —
              engineered for skilled nursing, hospitals, rehab centers and
              luxury private care.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href="#contact" className="group">
                  Get a Commercial Quote
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outlineRed" size="xl" asChild>
                <a href="#technology">See the Technology</a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>24-Jet Precision System</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Dual-Tank Isolation</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% On-Device Privacy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-red opacity-10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border bg-white">
                <img
                  src={prototype}
                  alt="Clean Box Tsunami v1 autonomous bathing system in a wellness suite"
                  width={1280}
                  height={1280}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-elevated border border-border animate-float">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Model</div>
                <div className="text-sm font-bold text-foreground">CB Tsunami v1</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary rounded-xl px-5 py-3 shadow-red text-primary-foreground">
                <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Status</div>
                <div className="text-sm font-bold">Live Prototype</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
