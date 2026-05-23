import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}
    >
      {/* CSS-only radial gradient — no image, no blur over text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-8">
          <span
            className="text-xs font-semibold uppercase tracking-widest text-white/50"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            66.7% reduction in bathing time
          </span>
        </div>

        {/* Headline — pure HTML/CSS, no image text */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight"
          style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}
        >
          The Smart Foundation
          <br />
          <span
            className="text-white/50"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            for Modern Care
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          style={{ WebkitFontSmoothing: "antialiased" }}
        >
          Clean Box cuts assisted bathing from 30 minutes to 10 — reducing labor
          costs, protecting caregivers, and preserving resident dignity.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/showcase"
            className="inline-flex items-center px-8 py-3.5 bg-white text-black font-bold text-base rounded-full hover:bg-white/90 transition-all shadow-lg"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            View Showcase
          </Link>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-medium text-base rounded-full transition-all"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Learn How It Works
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "30→10", label: "Minutes per bath" },
            { value: "1", label: "Caregiver required" },
            { value: "66.7%", label: "Time saved" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl font-bold text-white tabular-nums"
                style={{ WebkitFontSmoothing: "antialiased" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs text-white/40 mt-1"
                style={{ WebkitFontSmoothing: "antialiased" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
