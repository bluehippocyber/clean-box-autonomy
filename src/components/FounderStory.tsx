import { Quote } from "lucide-react";
import { Link } from "react-router-dom";

const FounderStory = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Founder Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Born from a real{" "}
              <span className="text-white/60">family challenge.</span>
            </h2>
            <div className="mt-8 relative pl-6 border-l border-white/20">
              <Quote className="absolute -left-3 -top-1 w-5 h-5 text-white/30" />
              <p className="text-lg text-white/60 leading-relaxed italic">
                "I watched families struggle with one of life's most essential needs. Loved ones
                losing their independence, caregivers exhausted, dignity quietly eroding. I knew
                there had to be a better way."
              </p>
              <div className="mt-4 text-sm font-semibold text-white/40 not-italic">
                — Terrance King, Founder & CEO
              </div>
            </div>
            <p className="mt-8 text-white/50 leading-relaxed">
              Clean Box was created to restore what traditional bathing care had taken away —
              dignity, independence, and confidence. By blending compassion with precision
              engineering, Terrance King built a new category of technology that serves users,
              caregivers, and operators alike.
            </p>
            <div className="mt-10">
              <Link
                to="/showcase"
                className="inline-flex items-center px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
              >
                View Showcase
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Mission", value: "Restore Dignity" },
              { label: "Category", value: "Automated Bathing Tech" },
              { label: "Markets", value: "8+ Industries" },
              { label: "Models", value: "Wave & Tsunami" },
            ].map(({ label, value }) => (
              <div key={label} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div
                  className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  {label}
                </div>
                <div
                  className="text-xl font-bold text-white"
                  style={{ WebkitFontSmoothing: "antialiased" }}
                >
                  {value}
                </div>
              </div>
            ))}
            <div className="col-span-2 p-6 rounded-2xl border border-white/10 bg-white/5">
              <div
                className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2"
                style={{ WebkitFontSmoothing: "antialiased" }}
              >
                Featured Through
              </div>
              <div className="text-sm text-white/60 leading-relaxed">
                University of Tampa · FAU Tech Runway · Investor Catalyst Hub · NARP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
