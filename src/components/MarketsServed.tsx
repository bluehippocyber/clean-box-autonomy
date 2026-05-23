import { Heart, Home, Shield, Building2, Sparkles, Globe } from "lucide-react";

const markets = [
  { icon: Building2, label: "Nursing Homes" },
  { icon: Heart, label: "Hospitals" },
  { icon: Home, label: "Home Care" },
  { icon: Shield, label: "Rehab Centers" },
  { icon: Heart, label: "Disability Support" },
  { icon: Shield, label: "Veterans Care" },
  { icon: Building2, label: "Government & Institutional" },
  { icon: Sparkles, label: "Luxury Wellness" },
];

const MarketsServed = () => {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Markets Served
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            One platform.{" "}
            <span className="text-white/60">Every care environment.</span>
          </h2>
          <p className="mt-6 text-lg text-white/50">
            Clean Box technology is built to solve bathing challenges wherever safety, dignity,
            and operational efficiency matter most.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {markets.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white/50" />
              </div>
              <span className="text-sm font-semibold text-white/70 leading-tight">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-3 text-sm text-white/40">
          <Globe className="w-4 h-4 shrink-0" />
          <span>Deploying across North America, with international distribution opportunities available.</span>
        </div>
      </div>
    </section>
  );
};

export default MarketsServed;
