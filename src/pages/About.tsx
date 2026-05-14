import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const differentiators = [
  "Mission-driven innovation — every product decision starts with dignity",
  "Premium user-centered design — comfort and safety built in from day one",
  "Focus on safety and dignity — the product never compromises on either",
  "Scalable multi-industry applications — healthcare, residential, hospitality, institutional",
  "Future-forward product ecosystem — Wave and Tsunami are just the beginning",
];

const credibility = [
  "University of Tampa",
  "Florida Atlantic University Tech Runway",
  "Investor Catalyst Hub",
  "National Association of Reentry Professionals (NARP)",
];

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/");
    setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 120);
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-soft overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="container relative max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">About Clean Box</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground">
              Innovation{" "}
              <span className="text-primary">With Purpose.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Clean Box was created to transform one of life's most essential daily experiences through dignity, safety, and modern engineering.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Who We Are</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
              A forward-thinking technology company reimagining bathing.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clean Box is focused on reimagining bathing through automation, accessibility, and premium design. Our mission is to help individuals and organizations deliver safer, more dignified hygiene experiences — across every care environment, at every scale.
            </p>
          </div>
        </section>

        {/* Why We Started */}
        <section className="py-24 lg:py-32 bg-surface-clinical">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Why We Started</div>
                <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
                  Real families. Real challenges.{" "}
                  <span className="text-primary">A better way forward.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Clean Box was inspired by witnessing the real challenges many families face when loved ones lose the ability to bathe safely and independently. Traditional bathing can become physically difficult, emotionally uncomfortable, and operationally demanding.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We believed there had to be a better way. So we built one.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "8+", label: "Industries Served" },
                  { num: "2", label: "Product Models" },
                  { num: "4", label: "Institutional Partners" },
                  { num: "1", label: "Mission: Restore Dignity" },
                ].map(({ num, label }) => (
                  <div key={label} className="p-6 rounded-2xl bg-white border border-border shadow-card text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{num}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Vision */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="container max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Founder Vision</div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">Terrance King.</h2>
            <p className="text-xl text-background/80 leading-relaxed mb-6">
              Founder Terrance King set out to build a new category of technology that blends compassion with engineering — creating solutions that restore confidence, reduce strain, and improve quality of life for users and caregivers alike.
            </p>
            <p className="text-lg text-background/60 leading-relaxed">
              With a vision grounded in real human experience and a commitment to premium engineering, Terrance is building Clean Box into the global standard for automated bathing technology.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">What Makes Us Different</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-10">Five things no competitor can claim.</h2>
            <div className="space-y-4">
              {differentiators.map((d) => (
                <div key={d} className="flex items-start gap-4 p-5 rounded-xl bg-secondary/40 border border-border">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80 leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-24 lg:py-32 bg-surface-clinical">
          <div className="container max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Our Vision for the Future</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
              The global leader in{" "}
              <span className="text-primary">automated bathing technology.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe the future of hygiene care will be smarter, safer, and more human-centered. Clean Box aims to become a global leader in automated bathing technology across healthcare, residential care, hospitality, and institutional markets — serving every person who deserves a dignified bathing experience.
            </p>
          </div>
        </section>

        {/* Credibility */}
        <section className="py-16 bg-white border-y border-border">
          <div className="container max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-6">Featured Through</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {credibility.map((c) => (
                <div key={c} className="p-4 rounded-xl bg-secondary/50 border border-border text-sm font-semibold text-foreground/70 uppercase tracking-wide text-center">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Invitation + CTA */}
        <section className="py-24 lg:py-32 bg-surface-clinical">
          <div className="container max-w-3xl text-center">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Partner With Us</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
              Let's build this future together.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We welcome conversations with healthcare leaders, strategic buyers, investors, distributors, and organizations seeking modern care solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={goToContact} className="group cursor-pointer">
                Contact Our Team
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outlineRed" size="xl" onClick={goToContact} className="cursor-pointer">
                Book a Private Demo
              </Button>
              <Button variant="outline" size="xl" onClick={goToContact} className="cursor-pointer">
                Partnership Inquiry
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
