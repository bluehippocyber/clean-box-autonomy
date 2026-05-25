import { useState } from "react";
import { ArrowRight, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const SHARED_FEATURES = [
  "Autonomous bathing technology",
  "Automated drying system",
  "Built-in scrubbing systems",
  "Slip-and-fall risk reduction",
  "Smart temperature and pressure controls",
  "Seated safety-first bathing design",
  "Reduced caregiver workload",
  "Independence and dignity focused design",
  "Fits through standard doorways",
  "Healthcare and wellness deployment capability",
];

const COMPARISON_ROWS = [
  { feature: "Positioning", wave: "Professional institutional deployment platform", tsunami: "Flagship luxury autonomous bathing system" },
  { feature: "Starting Price", wave: "Starting at $25,000", tsunami: "Starting at $80,000" },
  { feature: "Deployment Style", wave: "Permanent / facility-integrated installation", tsunami: "Fully mobile room-to-room deployment" },
  { feature: "Mobility", wave: "Compact footprint fits standard doorways", tsunami: "Rolls room-to-room and fits standard doorways" },
  { feature: "Power System", wave: "Continuous grounded power connection", tsunami: "Battery-powered with optional continuous power" },
  { feature: "Water System", wave: "Direct plumbing + drainage connection", tsunami: "Self-contained 40-gallon clean & waste water system" },
  { feature: "Operational Runtime", wave: "Unlimited continuous facility operation", tsunami: "Autonomous unplugged operation with filtration" },
  { feature: "Entertainment System", wave: "Optional streamlined display interface", tsunami: "Integrated entertainment and immersive wellness system" },
  { feature: "Smart Features", wave: "Temperature & pressure automation", tsunami: "Voice assistant, Bluetooth, streaming apps" },
  { feature: "Wellness Features", wave: "Core autonomous bathing platform", tsunami: "Chromotherapy + aromatherapy integration" },
  { feature: "Primary Buyer", wave: "Healthcare operators and institutions", tsunami: "Luxury wellness and private-care buyers" },
  { feature: "Scalability", wave: "Engineered for multi-unit facility rollout", tsunami: "Engineered as flagship premium showcase system" },
];

const FUTURE_BADGES = [
  "AI-Assisted Bathing Profiles",
  "Personalized User Programs",
  "Remote Diagnostic Monitoring",
  "Usage Analytics Dashboard",
  "Water Consumption Optimization",
  "Touchless Start System",
  "Smart Maintenance Alerts",
  "Predictive Maintenance Monitoring",
  "Cloud-Based Device Updates",
  "Voice-Guided Bathing Experience",
  "Caregiver Assistance Dashboard",
  "Facility Fleet Management",
  "Emergency Safety Detection",
  "Adaptive User Comfort Modes",
  "Integrated Wellness Programs",
  "Automated Sanitation Cycles",
  "User Preference Memory Profiles",
  "Advanced Filtration Monitoring",
  "Battery Health Diagnostics",
  "Luxury Ambient Lighting Modes",
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<"wave" | "tsunami">("wave");

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20">
            <source src="/videos/wave.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        <div className="relative container text-center">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
            Clean Box Technology
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
            Two Models.<br />
            <span className="text-primary">One Mission.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            Redefining independence, dignity, and safety through autonomous bathing technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/showcase"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors group"
            >
              Reserve Showcase Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              Become a Pilot Partner
            </a>
          </div>
        </div>
      </section>

      {/* Shared Core Platform Features */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
              Platform Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Shared Core Platform Features
            </h2>
            <p className="text-background/70 max-w-xl mx-auto">
              Both models are built on the same autonomous bathing platform — engineered for safety, dignity, and independence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {SHARED_FEATURES.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-background/5 border border-background/10">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-background/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Tabs */}
      <section className="py-4 bg-background border-b border-border sticky top-16 z-10">
        <div className="container flex gap-1">
          <button
            onClick={() => setActiveTab("wave")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === "wave" ? "bg-primary text-white" : "text-foreground/60 hover:text-foreground"}`}
          >
            Wave™
          </button>
          <button
            onClick={() => setActiveTab("tsunami")}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${activeTab === "tsunami" ? "bg-primary text-white" : "text-foreground/60 hover:text-foreground"}`}
          >
            Tsunami™
          </button>
        </div>
      </section>

      {/* Wave Detail */}
      {activeTab === "wave" && (
        <section id="wave" className="py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Wave™</div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                  Performance<br />Platform for<br /><span className="text-primary">Healthcare</span>
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  Designed for continuous daily deployment in healthcare and commercial environments. Engineered for facilities that need reliable, scalable autonomous bathing across every shift.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="text-primary font-bold text-lg mb-4">Starting at $25,000</div>
                  {[
                    "Permanent / facility-integrated installation",
                    "Direct plumbing + drainage connection",
                    "Unlimited continuous facility operation",
                    "Temperature & pressure automation",
                    "Engineered for multi-unit facility rollout",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground/70">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/showcase" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                    Reserve Showcase Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                    Request Early Buyer Info
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-foreground/5">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/videos/wave.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tsunami Detail */}
      {activeTab === "tsunami" && (
        <section id="tsunami" className="py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Tsunami™</div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                  Autonomous<br />Wellness<br /><span className="text-primary">System</span>
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8">
                  Engineered for luxury care, elite wellness, and fully mobile deployment. Self-contained, feature-rich, and designed for environments where prestige matters most.
                </p>
                <div className="space-y-3 mb-10">
                  <div className="text-primary font-bold text-lg mb-4">Starting at $80,000</div>
                  {[
                    "Mobile wheel-based platform — deploy anywhere",
                    "Self-contained 40-gallon clean & waste water system",
                    "Chromotherapy + aromatherapy integration",
                    "Voice assistant, Bluetooth, streaming apps",
                    "Ideal for luxury care, private estates, wellness centers",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground/70">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/showcase" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
                    Reserve Showcase Access
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors">
                    Request Early Buyer Info
                  </a>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-foreground/5">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src="/videos/Tsunami.%20.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Table */}
      <section className="py-20 bg-foreground text-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
              Side by Side
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Compare Models
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-background/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-background/10 bg-background/10">
                  <th className="text-left p-4 text-background/60 font-semibold w-1/3">Feature</th>
                  <th className="text-left p-4 text-primary font-bold w-1/3">Wave™</th>
                  <th className="text-left p-4 text-primary font-bold w-1/3">Tsunami™</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-background/10 ${i % 2 === 0 ? "" : "bg-background/5"}`}>
                    <td className="p-4 text-background/50 font-medium text-xs uppercase tracking-wide">{row.feature}</td>
                    <td className="p-4 text-background/90">{row.wave}</td>
                    <td className="p-4 text-background/90">{row.tsunami}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Future Feature Badges */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
              Platform Roadmap
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Innovation Pipeline
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-sm">
              Features in active development. Clean Box is engineering the most advanced autonomous bathing platform in healthcare.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {FUTURE_BADGES.map((badge) => (
              <div key={badge} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-foreground/80">
                <Zap className="w-3 h-3 text-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container text-center max-w-2xl mx-auto">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
            Get Involved
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to see it in person?
          </h2>
          <p className="text-background/70 mb-10">
            The first live public demonstration of Clean Box technology is coming. Reserve your access now — capacity is limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/showcase"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors group"
            >
              Reserve Showcase Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-background/20 px-7 py-3.5 text-sm font-semibold text-background hover:border-primary/50 hover:text-primary transition-colors"
            >
              Become a Pilot Partner
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
