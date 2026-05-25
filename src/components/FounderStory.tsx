import { Quote } from "lucide-react";

const stats = [
  { stat: "66.7%", label: "Reduction in bathing time per resident" },
];

const FounderStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
              Founder Story
            </div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Born from a real{" "}
              <span className="text-primary">family challenge.</span>
            </div>
            <div className="mt-8 relative pl-6 border-l-2 border-primary">
              <Quote className="absolute -left-3 -top-2 w-5 h-5 text-primary" />
              <p className="text-lg text-background/80 leading-relaxed italic">
                "I watched families struggle with one of life's most essential needs. Loved ones losing their independence, caregivers exhausted, dignity quietly eroding. I knew there had to be a better way."
              </p>
              <div className="mt-4 text-sm font-semibold text-background/60 not-italic">
                — Terrance King, Founder &amp; CEO
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {stats.map(({ stat, label }) => (
              <div key={stat} className="p-6 rounded-2xl bg-background/5 border border-background/10">
                <div className="text-3xl font-bold text-primary mb-1">{stat}</div>
                <div className="text-sm text-background/70">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">
            The Story Behind Clean Box
          </div>
          <div className="text-background/80 leading-relaxed space-y-4 text-base">
            <p className="text-xl font-semibold text-background">Restoring dignity through innovation.</p>
            <p>
              Clean Box was born from a painful personal experience. Terrance King watched his grandmother slowly lose her independence inside a nursing home. As her health declined, basic hygiene became one of the hardest parts of daily care. Instead of safe, comfortable bathing, patients were often cleaned through bed baths — a process that felt impersonal, physically difficult, and emotionally degrading for many elderly residents.
            </p>
            <p>
              Over time, Terrance witnessed the effects inadequate bathing and immobility could have on vulnerable patients, including the development of severe bedsores that dramatically impacted quality of life. Seeing someone he loved experience that level of discomfort and loss of dignity stayed with him long after she passed away.
            </p>
            <p>
              That experience became the foundation for Clean Box. He began asking a simple question: Why hasn't bathing technology evolved for the people who need it most? What started as sketches and ideas eventually became a mission to reinvent bathing entirely — creating a system that allows people to bathe safely, privately, comfortably, and with as much independence as possible.
            </p>
            <p>Clean Box was engineered to address some of healthcare's most overlooked challenges:</p>
            <ul className="space-y-1 pl-4">
              <li>• preserving dignity for elderly and disabled individuals</li>
              <li>• reducing caregiver strain</li>
              <li>• helping prevent slips and falls</li>
              <li>• improving hygiene accessibility</li>
              <li>• creating a more consistent bathing experience for facilities and families alike</li>
            </ul>
            <p>
              Today, that mission has evolved into Wave and Tsunami — autonomous bathing systems designed for assisted living facilities, rehabilitation centers, hospitals, correctional facilities, wellness applications, and future home use.
            </p>
            <p>
              This private showcase will mark the first live public demonstration of the technology operating end-to-end in front of an invited audience. Not a concept. Not a cinematic render. Not a demo reel. A working system built from a real story, with a real purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
