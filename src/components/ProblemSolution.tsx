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

const ProblemSolution = () => {
  return (
    <>
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              The Problem
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Bathing is one of care's most dangerous tasks.
            </h2>
            <p className="mt-6 text-lg text-white/50">
              Facilities face labor shortages, fall risks, and increasing operational pressure — while
              residents often lose the privacy and independence they deserve.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="p-7 rounded-2xl border border-white/10 bg-white/5">
                <AlertTriangle className="w-6 h-6 text-white/40 mb-4" />
                <p className="text-sm text-white/60 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              The Solution
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Meet Clean Box.{" "}
              <span className="text-white/60">Dignity through innovation.</span>
            </h2>
            <p className="mt-6 text-lg text-white/50">
              A seated automated bathing system engineered for comfort, safety, and efficiency — built
              to transform the most intimate care task into a seamless, independent experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="p-7 rounded-2xl border border-white/10 bg-white/5">
                <CheckCircle className="w-6 h-6 text-white/40 mb-4" />
                <p className="text-sm text-white/60 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
