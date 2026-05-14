import { ArrowRight } from "lucide-react";
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground">
              The Future of Safe{" "}
              <span className="text-primary">Independent Bathing.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Clean Box is automated bathing technology designed to restore dignity, improve safety, and modernize hygiene care for homes, facilities, and institutions worldwide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href="#contact" className="group">
                  Request Demo
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outlineRed" size="xl" asChild>
                <a href="#contact">Join Waitlist</a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#contact">Buyer Inquiry</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-red opacity-10 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border bg-white">
                <img
                  src={prototype}
                  alt="Clean Box Tsunami — automated bathing system in a wellness suite"
                  width={1280}
                  height={1280}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-elevated border border-border animate-float">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Model</div>
                <div className="text-sm font-bold text-foreground">Clean Box Tsunami</div>
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
