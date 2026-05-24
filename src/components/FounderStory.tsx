import { Quote } from "lucide-react";

const FounderStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
              Founder Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Born from a real{" "}
              <span className="text-primary">family challenge.</span>
            </h2>
            <div className="mt-8 relative pl-6 border-l-2 border-primary">
              <Quote className="absolute -left-3 -top-2 w-5 h-5 text-primary" />
              <p className="text-lg text-background/80 leading-relaxed italic">
                "I watched families struggle with one of life's most essential needs. Loved ones losing their independence, caregivers exhausted, dignity quietly eroding. I knew there had to be a better way."
              </p>
              <div className="mt-4 text-sm font-semibold text-background/60 not-italic">
                — Terrance King, Founder &amp; CEO
              </div>
            </div>
            <p className="mt-8 text-background/70 leading-relaxed">
              Clean Box was created to restore what traditional bathing care had taken away — dignity, independence, and confidence. By blending compassion with precision engineering, Terrance King built a new category of personal care technology.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { stat: "66.7%", label: "Reduction in bathing time per resident" },
              { stat: "Zero",  label: "Caregiver injuries during automated bathing cycle" },
              { stat: "3×",   label: "Increase in resident satisfaction scores" },
            ].map(({ stat, label }) => (
              <div key={stat} className="p-6 rounded-2xl bg-background/5 border border-background/10">
                <div className="text-3xl font-bold text-primary mb-1">{stat}</div>
                <div className="text-sm text-background/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
