import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  "Bathing injuries are one of the leading causes of caregiver strain and resident falls in care settings.",
  "Labor shortages leave facilities understaffed for one of the most time-intensive daily care tasks.",
  "Traditional assisted bathing strips individuals of their privacy, comfort, and sense of independence.",
];

const solutions = [
  "Users enter the Clean Box comfortably, select a cycle, receive guided cleansing support, and exit refreshed.",
  "No caregiver required during the bathing process — reducing strain, injury risk, and labor dependency.",
  "Dignity is built into every step. Private. Comfortable. Automated. Designed for the person, not just the process.",
];

const productPhoto = `${import.meta.env.BASE_URL}product-photos/wave-angle-2.png`;

const ProblemSolution = () => {
  return (
    <>
      {/* Problem — white bg: use explicit dark text */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Bathing is one of care's most dangerous tasks.
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              Facilities face labor shortages, fall risks, and increasing operational pressure — while users often lose the privacy and independence they deserve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="p-7 rounded-2xl bg-red-50 border border-red-100">
                <AlertTriangle className="w-6 h-6 text-primary mb-4" />
                <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution — dark bg: foreground works fine */}
      <section className="py-24 lg:py-32 bg-surface-clinical">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">The Solution</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Meet Clean Box.{" "}
              <span className="text-primary">Dignity through innovation.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A seated automated bathing system engineered for comfort, safety, and efficiency — built to transform the most intimate care task into a seamless, independent experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="p-7 rounded-2xl bg-card border border-border shadow-card">
                <CheckCircle className="w-6 h-6 text-primary mb-4" />
                <p className="text-sm text-foreground/80 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-card overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div
                className="relative flex items-center justify-center px-8 py-16 md:py-24"
                style={{
                  background:
                    "radial-gradient(ellipse at center, hsl(var(--primary-soft)) 0%, transparent 70%)",
                }}
              >
                <img
                  src={productPhoto}
                  alt="Clean Box Wave prototype"
                  className="w-full max-w-xs md:max-w-sm h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="p-8 md:p-12 border-t md:border-t-0 md:border-l border-border">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
                  The Hardware
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  The Clean Box Wave, in production.
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This is the actual unit — built, wired, and being tested ahead of rollout.
                  Not a render. Not a concept. The real hardware behind the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
