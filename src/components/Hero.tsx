import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-prototype.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-surface-dark">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary-glow/15 blur-[100px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="text-surface-dark-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-primary-glow">
                Frame Prototype // Q2 Reveal
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
              The Future of
              <br />
              Personal Care is{" "}
              <span className="bg-gradient-cyber bg-clip-text text-transparent glow-text">
                Autonomous.
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-surface-dark-foreground/70 max-w-xl leading-relaxed">
              Clean Box Enterprise delivers medical-grade, AI-powered bathing systems
              engineered to restore <span className="text-primary-glow font-medium">Dignity through Autonomy</span> —
              for residents, patients, and caregivers alike.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="cyber" size="xl" className="group">
                Request Commercial Quote
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="darkOutline" size="xl">
                <Sparkles className="text-primary" />
                Explore Technology
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { v: "100%", l: "On-device AI" },
                { v: "8 min", l: "Sanitize cycle" },
                { v: "24/7", l: "Care availability" },
              ].map((s) => (
                <div key={s.l} className="border-l border-primary/30 pl-4">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary-glow">{s.v}</div>
                  <div className="text-xs text-surface-dark-foreground/60 uppercase tracking-wider mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Prototype reveal */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-glow-strong">
              {/* Top HUD bar */}
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 bg-surface-dark/80 backdrop-blur border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary-glow">
                    PROTO_REV_03 / LIVE FEED
                  </span>
                </div>
                <span className="text-[10px] font-mono text-surface-dark-foreground/60">
                  CB-ENT-001
                </span>
              </div>

              <img
                src={heroImage}
                alt="Clean Box autonomous bathing prototype"
                width={1536}
                height={1024}
                className="w-full h-auto"
              />

              {/* Scan line */}
              <div className="absolute inset-x-0 h-24 scan-line animate-scan pointer-events-none" />

              {/* Bottom telemetry */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 bg-surface-dark/80 backdrop-blur border-t border-primary/20 grid grid-cols-3 gap-2 text-center">
                {[
                  { k: "TEMP", v: "37.2°C" },
                  { k: "PRESSURE", v: "2.4 BAR" },
                  { k: "STATUS", v: "READY" },
                ].map((t) => (
                  <div key={t.k}>
                    <div className="text-[9px] font-mono text-surface-dark-foreground/50 uppercase">{t.k}</div>
                    <div className="text-xs font-mono text-primary-glow font-medium">{t.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-cyber text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-glow animate-float">
              Patent Pending
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
