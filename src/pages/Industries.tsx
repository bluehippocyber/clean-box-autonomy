import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Heart, Home, Shield, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Building2,
    title: "Nursing Homes & ALFs",
    desc: "Reduce staff burden and fall risk while improving resident satisfaction scores. Clean Box pays for itself within months through labor savings alone.",
    stats: "66.7% faster bathing cycles",
  },
  {
    icon: Heart,
    title: "Hospitals & Acute Care",
    desc: "Maintain infection control standards while freeing nursing staff from one of the most physically demanding patient care tasks.",
    stats: "Zero caregiver injuries on record",
  },
  {
    icon: Home,
    title: "Home Care & Private Duty",
    desc: "Give families peace of mind and clients their privacy back. One-touch operation means no caregiver presence required during the bath.",
    stats: "3× resident satisfaction increase",
  },
  {
    icon: Shield,
    title: "Rehab & Specialty Centers",
    desc: "Designed for patients with limited mobility, post-surgical recovery, or neurological conditions who need dignity-preserving bathing solutions.",
    stats: "ADA-compliant, adjustable seat height",
  },
  {
    icon: Users,
    title: "Veterans Care Facilities",
    desc: "Honor those who served by providing the highest standard of private, dignified hygiene care — without the need for caregiver assistance.",
    stats: "VA-aligned care standards",
  },
  {
    icon: Sparkles,
    title: "Luxury Wellness & Hospitality",
    desc: "Elevate the guest experience with spa-grade automated bathing technology. A premium differentiator for five-star properties and wellness retreats.",
    stats: "Customizable scent & cycle programs",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">Industries</div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
              Built for every{" "}
              <span className="text-primary">care environment.</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Clean Box technology adapts to the unique demands of each care setting — delivering measurable ROI, improved safety, and restored dignity across every market we serve.
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

      {/* Industry Cards */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map(({ icon: Icon, title, desc, stats }) => (
              <div key={title} className="p-7 rounded-2xl border border-border bg-card flex flex-col gap-4 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <div className="pt-3 border-t border-border text-xs font-mono font-semibold text-primary">
                  {stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-surface-clinical border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to see Clean Box in your facility?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore our product showcase, request a demo, or reserve a unit for your organization.
          </p>
          <Link
            to="/showcase"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90 transition-colors group"
          >
            View Showcase
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
