import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FounderStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
              Founder Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Born from a real{" "}
              <span className="text-primary">family challenge.</span>
            </h2>
            <div className="mt-8 relative pl-6 border-l-2 border-primary">
              <Quote className="absolute -left-3 -top-2 w-5 h-5 text-primary" />
              <p className="text-lg text-background/80 leading-relaxed italic">
                "I watched families struggle with one of life's most essential needs. Loved ones losing their independence, caregivers exhausted, dignity quietly eroding. I knew there had to be a better way."
              </p>
              <div className="mt-4 text-sm font-semibold text-background/60 not-italic">
                — Terrance King, Founder & CEO
              </div>
            </div>
            <p className="mt-8 text-background/70 leading-relaxed">
              Clean Box was created to restore what traditional bathing care had taken away — dignity, independence, and confidence. By blending compassion with precision engineering, Terrance King built a new category of technology that serves users, caregivers, and operators alike.
            </p>
            <div className="mt-10">
              <Button variant="cta" size="lg" asChild>
                <a href="/about" className="group">
                  Our Full Story
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Mission", value: "Restore Dignity" },
              { label: "Category", value: "Automated Bathing Tech" },
              { label: "Markets", value: "8+ Industries" },
              { label: "Models", value: "Wave & Tsunami" },
            ].map(({ label, value }) => (
              <div key={label} className="p-6 rounded-2xl bg-background/5 border border-background/10">
                <div className="text-xs font-mono uppercase tracking-widest text-background/40 mb-2">{label}</div>
                <div className="text-xl font-bold text-background">{value}</div>
              </div>
            ))}
            <div className="col-span-2 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <div className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Featured Through</div>
              <div className="text-sm text-background/70 leading-relaxed">
                University of Tampa · FAU Tech Runway · Investor Catalyst Hub · NARP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
