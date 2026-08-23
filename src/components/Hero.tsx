import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import showroomVideo from "@/assets/showroom-hero.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Showroom video — 7px blur hides AI-garbled button labels, shapes still visible */}
      <div className="absolute inset-0">
        <video
          src={showroomVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "blur(7px)", transform: "scale(1.03)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary">
              Now Accepting Reservations
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground">
            The Future of Safe{" "}
            <span className="text-primary">Independent Bathing.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Clean Box is automated bathing technology designed to restore dignity, improve safety, and modernize hygiene care for homes, facilities, and institutions worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.eventbrite.com/e/clean-box-showcase-tickets-1998423489453"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors group"
            >
              Reserve Showcase Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Featured at: University of Tampa · FAU Tech Runway · Investor Catalyst Hub · NARP
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
