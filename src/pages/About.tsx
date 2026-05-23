import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="pt-24 pb-20 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              About Clean Box
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Innovation{" "}
              <span className="text-white/60">With Purpose.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-white/50 max-w-3xl leading-relaxed">
              Clean Box was created to transform one of life's most essential daily experiences
              through dignity, safety, and modern engineering.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Who We Are
            </p>
            <h2
              className="text-4xl font-bold text-white mb-6"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              A forward-thinking technology company reimagining bathing.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              Clean Box is focused on reimagining bathing through automation, accessibility, and
              premium design. Our mission is to help individuals and organizations deliver safer,
              more dignified hygiene experiences — across every care environment, at every scale.
            </p>
          </div>
        </section>

        {/* Why We Started */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  Why We Started
                </p>
                <h2
                  className="text-4xl font-bold text-white mb-6"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  Real families. Real challenges.{" "}
                  <span className="text-white/60">A better way forward.</span>
                </h2>
                <p className="text-lg text-white/50 leading-relaxed">
                  Clean Box was inspired by witnessing the real challenges many families face when
                  loved ones lose the ability to bathe safely and independently.
                </p>
                <p className="mt-4 text-lg text-white/50 leading-relaxed">
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
                  <div
                    key={label}
                    className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center"
                  >
                    <div
                      className="text-4xl font-bold text-white mb-2 tabular-nums"
                      style={{ WebkitFontSmoothing: "antialiased" }}
                    >
                      {num}
                    </div>
                    <div className="text-sm text-white/50">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Vision */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Founder Vision
            </p>
            <h2
              className="text-4xl font-bold text-white mb-8"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Terrance King.
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-6">
              Founder Terrance King set out to build a new category of technology that blends
              compassion with engineering — creating solutions that restore confidence, reduce
              strain, and improve quality of life for users and caregivers alike.
            </p>
            <p className="text-lg text-white/40 leading-relaxed">
              With a vision grounded in real human experience and a commitment to premium
              engineering, Terrance is building Clean Box into the global standard for automated
              bathing technology.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              What Makes Us Different
            </p>
            <h2
              className="text-4xl font-bold text-white mb-10"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Five things no competitor can claim.
            </h2>
            <div className="space-y-4">
              {differentiators.map((d) => (
                <div
                  key={d}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5"
                >
                  <CheckCircle className="w-5 h-5 text-white/40 mt-0.5 shrink-0" />
                  <span className="text-white/60 leading-relaxed">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className="py-24 px-6 bg-black border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Featured & Supported By
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {credibility.map((c) => (
                <div key={c} className="p-5 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-white/70 font-medium">{c}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/showcase"
                className="inline-flex items-center px-10 py-4 bg-white text-black font-bold text-base rounded-full hover:bg-white/90 transition-all shadow-lg"
              >
                View Showcase
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;
