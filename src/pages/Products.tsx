import { Check, ArrowRight, Building2, Home, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

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

const compareRows = [
  { label: "Deployment", wave: "Permanent / Stationary", tsunami: "Mobile / Flexible" },
  { label: "Plumbing", wave: "Direct plumbing required", tsunami: "Self-contained — no plumbing" },
  { label: "Best For", wave: "High-volume institutional use", tsunami: "Premium & flexible environments" },
  { label: "Positioning", wave: "Operational workhorse", tsunami: "Flagship luxury model" },
  { label: "Markets", wave: "Nursing homes, hospitals, rehab", tsunami: "Wellness, estates, VIP care" },
];

const Products = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero — black background, inherits from bg-background (dark theme) */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
            Our Products
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            Two Elite Solutions.
            <br />
            <span className="text-primary">One Future of Bathing.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Explore Clean Box Wave and Clean Box Tsunami — engineered to transform hygiene care through safety, dignity, and modern design.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <a href="#tsunami" className="group">
                Explore Tsunami
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outlineRed" size="xl" asChild>
              <a href="#wave">Explore Wave</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Tsunami Detail */}
      <section id="tsunami" className="py-24 lg:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Clean Box Tsunami
              </h2>
              <p className="mt-3 text-xl font-semibold text-primary">Luxury Freedom Without Limits</p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our flagship self-contained mobile model built for premium environments where flexibility and prestige matter most.
              </p>
              <ul className="mt-8 space-y-4">
                {tsunamiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" onClick={scrollToContact} className="cursor-pointer">
                  Request Pricing
                </Button>
                <Button variant="outlineRed" size="lg" onClick={scrollToContact} className="cursor-pointer">
                  Book Private Demonstration
                </Button>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
              <video
                src="/videos/Tsunami.%20.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: "blur(1.5px)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave Detail */}
      <section id="wave" className="py-24 lg:py-32 bg-surface-clinical">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Clean Box Wave
              </h2>
              <p className="mt-3 text-xl font-semibold text-primary">The Smart Foundation for Modern Care</p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Designed for facilities that demand reliability, accessibility, and daily operational efficiency.
              </p>
              <ul className="mt-8 space-y-4">
                {waveFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" onClick={scrollToContact} className="cursor-pointer">
                  Request Pricing
                </Button>
                <Button variant="outlineRed" size="lg" onClick={scrollToContact} className="cursor-pointer">
                  Join the Wave Waitlist
                </Button>
              </div>
            </div>
            <div className="lg:order-1 relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
              <video
                src="/videos/wave.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: "blur(1.5px)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compare Table */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Side by Side</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Compare Models</h2>
          </div>
          <div className="rounded-3xl border border-border overflow-hidden shadow-card">
            <div className="grid grid-cols-3" style={{ backgroundColor: '#0a0a0a' }}>
              <div className="p-5 text-xs font-mono uppercase tracking-widest text-white/80">Feature</div>
              <div className="p-5 text-sm font-bold text-white border-l border-white/10">Wave</div>
              <div className="p-5 text-sm font-bold text-primary border-l border-white/10">Tsunami</div>
            </div>
            {compareRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-surface-clinical" : "bg-card"}`}>
                <div className="p-5 text-sm font-semibold text-foreground">{row.label}</div>
                <div className="p-5 text-sm text-foreground/80 border-l border-border">{row.wave}</div>
                <div className="p-5 text-sm text-foreground/80 border-l border-border">{row.tsunami}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Buyers */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Commercial</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Commercial Buyers</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Need multiple units for a facility or organization? We work directly with hospitals, healthcare groups, government buyers, hospitality groups, and distributors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, label: "Hospitals & Healthcare Groups" },
              { icon: Home, label: "Facilities & Care Operators" },
              { icon: Star, label: "Hospitality & Wellness" },
              { icon: Truck, label: "Distributors & Resellers" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-sm font-semibold text-white">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="container max-w-3xl text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">Get Started</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to modernize bathing care?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with our commercial sales team to discuss pricing, deployment, and multi-unit arrangements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" onClick={scrollToContact}>Request Pricing</Button>
            <Button variant="outlineRed" size="xl" onClick={scrollToContact}>Book Private Demonstration</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
