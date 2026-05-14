import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import showroomVideo from "@/assets/showroom-hero.mp4";

// STRIPE RESERVE LINK — update when live
const STRIPE_RESERVE_URL = "https://buy.stripe.com/cleanbox-reserve-360";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Showroom video background */}
      <div className="absolute inset-0">
        <video
          src={showroomVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Dark overlay — left heavy so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary">
              Now Accepting Reservations
            </span>
          </div>

          {/* Locked headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground">
            The Future of Safe{" "}
            <span className="text-primary">Independent Bathing.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Clean Box is automated bathing technology designed to restore dignity, improve safety, and modernize hygiene care for homes, facilities, and institutions worldwide.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            <Button
              variant="cta"
              size="xl"
              onClick={scrollToContact}
              className="group cursor-pointer min-h-[52px]"
            >
              Request Demo
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Reserve Now — Stripe */}
            <Button
              size="xl"
              asChild
              className="min-h-[52px] bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all"
            >
              <a
                href={STRIPE_RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Reserve Now — $360
              </a>
            </Button>

            <Button
              variant="outlineRed"
              size="xl"
              onClick={scrollToContact}
              className="cursor-pointer min-h-[52px]"
            >
              Join Waitlist
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={scrollToContact}
              className="cursor-pointer min-h-[52px] border-white/20 text-white/80 hover:bg-white/10"
            >
              Buyer Inquiry
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-muted-foreground">
            Featured at: University of Tampa · FAU Tech Runway · Investor Catalyst Hub · NARP
          </p>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
