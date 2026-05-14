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

export const MarketsServed = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Markets Served</div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            One platform.{" "}
            <span className="text-primary">Every care environment.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Clean Box technology is built to solve bathing challenges wherever safety, dignity, and operational efficiency matter most.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {markets.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-primary-soft hover:shadow-card transition-all duration-300 text-center">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                <Icon className="w-5 h-5 text-foreground/60 group-hover:text-white transition-colors" />
              </div>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors leading-tight">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
          <Globe className="w-4 h-4 text-primary shrink-0" />
          <span>Deploying across North America, with international distribution opportunities available.</span>
        </div>
      </div>
    </section>
  );
};
