import { useState, useMemo } from "react";

const TRADITIONAL_MINUTES = 30;
const CLEANBOX_MINUTES = 10;

function fmt(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
}

function calculate(residents, bathsPerWeek, hourlyWage) {
  const totalBaths = residents * bathsPerWeek;
  const tradHours = (totalBaths * TRADITIONAL_MINUTES) / 60;
  const cbHours = (totalBaths * CLEANBOX_MINUTES) / 60;
  const weeklyHoursSaved = tradHours - cbHours;
  const tradWeeklyCost = tradHours * hourlyWage;
  const cbWeeklyCost = cbHours * hourlyWage;
  const weeklySavings = tradWeeklyCost - cbWeeklyCost;
  return {
    tradWeeklyCost, cbWeeklyCost, weeklySavings,
    monthlySavings: weeklySavings * 4.33,
    annualSavings: weeklySavings * 52,
    tradAnnualCost: tradWeeklyCost * 52,
    cbAnnualCost: cbWeeklyCost * 52,
    weeklyHoursSaved,
    annualHoursSaved: weeklyHoursSaved * 52,
    timeReductionPercent: ((TRADITIONAL_MINUTES - CLEANBOX_MINUTES) / TRADITIONAL_MINUTES) * 100,
  };
}

const ResultCard = ({ label, value, sub }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <p className="text-xs text-white/40 mb-1">{label}</p>
    <p className="text-xl font-bold text-white tabular-nums leading-tight">{value}</p>
    <p className="text-xs text-white/30">{sub}</p>
  </div>
);

const Calculator = () => {
  const [residents, setResidents] = useState(100);
  const [bathsPerWeek, setBathsPerWeek] = useState(3);
  const [hourlyWage, setHourlyWage] = useState(13.60);

  const r = useMemo(() => calculate(residents, bathsPerWeek, hourlyWage), [residents, bathsPerWeek, hourlyWage]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-white/80">Number of Residents / Patients</label>
            <span className="text-sm font-bold text-white tabular-nums">{residents}</span>
          </div>
          <input type="range" min={1} max={500} value={residents} onChange={(e) => setResidents(Number(e.target.value))} className="w-full accent-white" />
          <div className="flex justify-between text-xs text-white/30 mt-1"><span>1</span><span>500</span></div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-white/80">Baths per Resident per Week</label>
            <span className="text-sm font-bold text-white tabular-nums">{bathsPerWeek}</span>
          </div>
          <input type="range" min={1} max={7} value={bathsPerWeek} onChange={(e) => setBathsPerWeek(Number(e.target.value))} className="w-full accent-white" />
          <div className="flex justify-between text-xs text-white/30 mt-1"><span>1×/wk</span><span>7×/wk</span></div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-white/80">Caregiver Hourly Wage</label>
            <span className="text-sm font-bold text-white tabular-nums">${hourlyWage.toFixed(2)}/hr</span>
          </div>
          <input type="range" min={8} max={50} step={0.10} value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} className="w-full accent-white" />
          <div className="flex justify-between text-xs text-white/30 mt-1"><span>$8/hr</span><span>$50/hr</span></div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/40 leading-relaxed">
          <span className="text-white/60 font-medium">Assumptions (fixed): </span>
          Traditional bath = 30 min · Clean Box cycle = 10 min · 1 caregiver per workflow
        </div>

        <button onClick={() => { setResidents(100); setBathsPerWeek(3); setHourlyWage(13.60); }}
          className="text-xs text-white/30 hover:text-white/60 transition-colors underline">
          Reset to defaults
        </button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="rounded-2xl bg-white text-black p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-black/50 mb-1">Estimated Annual Labor Savings</p>
          <p className="text-5xl font-bold tabular-nums leading-none mt-2">{fmt(r.annualSavings)}</p>
          <p className="text-sm text-black/50 mt-2">per year</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-xs font-semibold">
            {r.timeReductionPercent.toFixed(0)}% less bathing time
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ResultCard label="Weekly Savings" value={fmt(r.weeklySavings)} sub="/week" />
          <ResultCard label="Monthly Savings" value={fmt(r.monthlySavings)} sub="/month" />
          <ResultCard label="Weekly Hours Saved" value={`${r.weeklyHoursSaved.toFixed(1)} hrs`} sub="per week" />
          <ResultCard label="Annual Hours Saved" value={`${Math.round(r.annualHoursSaved).toLocaleString()} hrs`} sub="per year" />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-white/40 font-medium uppercase tracking-wide mb-3">Annual Cost Comparison</p>
          <div className="flex items-center justify-between gap-4">
            <div className="text-center">
              <p className="text-xs text-white/40 mb-1">Traditional</p>
              <p className="text-lg font-bold text-white/60 tabular-nums">{fmt(r.tradAnnualCost)}</p>
              <p className="text-xs text-white/25">per year</p>
            </div>
            <div className="text-white/20 text-xl">→</div>
            <div className="text-center">
              <p className="text-xs text-white/40 mb-1">Clean Box</p>
              <p className="text-lg font-bold text-white tabular-nums">{fmt(r.cbAnnualCost)}</p>
              <p className="text-xs text-white/25">per year</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-white/25 text-center leading-relaxed">
          Estimates are for planning purposes only. Actual savings vary by facility workflow, staffing model, resident acuity, wage rates, and operating procedures.
        </p>
      </div>
    </div>
  );
};

export default Calculator;
