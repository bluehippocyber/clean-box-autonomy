import { useMemo, useState } from "react";
import { Clock, Users, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const ROI = () => {
  const [residents, setResidents] = useState([60]);
  const [bathsPerWeek, setBathsPerWeek] = useState([3]);
  const [staffCost, setStaffCost] = useState([28]);

  const stats = useMemo(() => {
    const r = residents[0];
    const b = bathsPerWeek[0];
    const c = staffCost[0];
    const minutesSaved = r * b * 45 * 0.8;
    const hoursSavedPerWeek = Math.round(minutesSaved / 60);
    const annualSavings = Math.round(hoursSavedPerWeek * 52 * c);
    const fteFreed = (hoursSavedPerWeek / 40).toFixed(1);
    return { hoursSavedPerWeek, annualSavings, fteFreed };
  }, [residents, bathsPerWeek, staffCost]);

  return (
    <section id="roi" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
            03 / Healthcare Facility Solutions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Calculate your facility's
            <br />
            <span className="text-primary">labor savings.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Built for nursing-home directors and healthcare administrators.
            See how Clean Box redirects caregiver time from bathing tasks back to direct patient care.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-card">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Labor Savings Calculator
            </h3>

            <div className="space-y-8">
              {[
                { label: "Number of Residents", value: residents, set: setResidents, min: 10, max: 300, unit: "residents" },
                { label: "Baths per Resident / Week", value: bathsPerWeek, set: setBathsPerWeek, min: 1, max: 7, unit: "baths" },
                { label: "Avg. Caregiver Hourly Cost", value: staffCost, set: setStaffCost, min: 18, max: 60, unit: "USD/hr" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm font-medium text-foreground">{s.label}</label>
                    <span className="text-lg font-bold text-primary">
                      {s.value[0]} <span className="text-xs text-muted-foreground font-normal">{s.unit}</span>
                    </span>
                  </div>
                  <Slider value={s.value} onValueChange={s.set} min={s.min} max={s.max} step={1} />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 p-8 lg:p-10 rounded-3xl bg-gradient-red text-primary-foreground shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-10" />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-widest opacity-80 mb-2">
                Estimated Impact
              </div>
              <h3 className="text-2xl font-bold mb-8">Your Weekly ROI</h3>

              <div className="space-y-6">
                <Stat icon={Clock} label="Care hours saved / week" value={stats.hoursSavedPerWeek.toLocaleString()} />
                <Stat icon={Users} label="Full-time staff freed" value={stats.fteFreed} />
                <Stat icon={DollarSign} label="Annual labor savings" value={`$${stats.annualSavings.toLocaleString()}`} />
              </div>

              <Button size="lg" className="mt-8 w-full bg-white text-primary hover:bg-white/90" asChild>
                <a href="#contact">Talk to Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) => (
  <div className="flex items-start gap-4 pb-6 border-b border-white/15 last:border-0 last:pb-0">
    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wider opacity-80 mb-1">{label}</div>
      <div className="text-3xl font-bold tabular-nums">{value}</div>
    </div>
  </div>
);
