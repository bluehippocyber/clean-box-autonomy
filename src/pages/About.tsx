import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Heart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  { icon: Heart, title: "Dignity First", desc: "Every design decision starts with one question: does this restore dignity to the person using it?" },
  { icon: Shield, title: "Safety by Design", desc: "Engineered to eliminate fall risk, caregiver strain, and hygiene gaps in every care environment." },
  { icon: Target, title: "Operational Impact", desc: "Reducing bathing time by 66.7% frees staff for higher-value care — measurable ROI from day one." },
  { icon: Zap, title: "Built to Scale", desc: "From single homes to 500-bed facilities, Clean Box adapts to the care environment — not the other way around." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">About Clean Box</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Engineering dignity for{" "}
              <span className="text-primary">every generation.</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Clean Box Enterprise is a Tampa-based deep-tech company building automated bathing systems that restore independence, reduce caregiver burden, and modernize hygiene care for homes, facilities, and institutions worldwide.
            </p>
            <div className="mt-10">
              <Link
                to="/showcase"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors group"
              >
                View Showcase
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface-clinical">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Our Mission</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Restore what traditional care took away.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We believe bathing should never be a source of fear, embarrassment, or dependency. Clean Box exists to give people back their privacy, their comfort, and their sense of self — one automated cycle at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Our Values</div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              What drives every decision.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-2xl border border-border bg-card">
                <Icon className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container text-center">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">Recognition</div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            {["University of Tampa", "FAU Tech Runway", "Investor Catalyst Hub", "NARP"].map(org => (
              <span key={org} className="px-4 py-2 rounded-full border border-border bg-card">{org}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
