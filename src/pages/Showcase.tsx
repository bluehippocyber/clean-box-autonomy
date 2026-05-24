import { useState, useEffect } from "react";
import logo from "@/assets/cleanbox-logo.png";

const SHOWCASE_DATE = new Date("2026-08-06T15:00:00-04:00");

const tiers = [
  { id: "general", label: "General Admission", price: 297, tag: "TIER 01" },
  { id: "vip",     label: "VIP",               price: 1250, tag: "TIER 02 · VIP" },
  { id: "founders",label: "Founders",           price: 5000, tag: "TIER 03 · FOUNDERS" },
];

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

const Showcase = () => {
  const cd = useCountdown(SHOWCASE_DATE);
  const [tier, setTier] = useState("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ lastName: "", phone: "", email: "", facility: "" });

  const selectedTier = tiers.find(t => t.id === tier)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="min-h-screen bg-[#0D0F12] text-white font-sans">
      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0D0F12]/95 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Cleanbox" className="h-8 w-auto" />
            <span className="hidden sm:block text-white/20">|</span>
            <span className="hidden sm:block text-xs font-mono uppercase tracking-[0.18em] text-white/50">
              Private Showcase &nbsp;·&nbsp; 08-06-26
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-white/40">
            <span>Reserve</span>
            <span className="text-white/20">·</span>
            <span>Application</span>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-primary px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest text-white hover:bg-primary/90 transition-colors"
            >
              Purchase Ticket
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Secure Session
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="max-w-[1400px] mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">

          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-primary">
                Exclusive Private Showcase
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
              The future of{" "}
              <span className="text-primary">independent</span>{" "}
              bathing.
            </h1>

            <p className="text-white/55 text-lg leading-relaxed max-w-lg mb-12">
              Clean Box Wave and Clean Box Tsunami — unveiled live for the first time. A private event for operators, investors, and decision-makers with serious intent. Limited seats. One afternoon. By invitation and qualified application only.
            </p>

            {/* PRICE */}
            <div className="mb-10">
              <div className="flex items-baseline gap-4 mb-1">
                <span className="text-6xl font-bold tabular-nums">$297</span>
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">General Admission</span>
              </div>
              <p className="text-xs font-mono text-white/30 tracking-widest uppercase">VIP &amp; Founders from $1,250</p>
            </div>

            {/* COUNTDOWN */}
            <div className="mb-10">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-4">
                Countdown &nbsp;·&nbsp; Showcase Opens
              </p>
              <div className="flex items-end gap-6">
                {[
                  { val: cd.days,    label: "Days" },
                  { val: cd.hours,   label: "Hours" },
                  { val: cd.minutes, label: "Min" },
                  { val: cd.seconds, label: "Sec" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-5xl font-bold tabular-nums leading-none">{pad(val)}</div>
                    <div className="text-xs font-mono text-white/30 uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#apply"
              className="inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-mono font-bold uppercase tracking-widest text-white hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              Purchase Ticket &nbsp;→
            </a>

            <p className="mt-6 text-xs font-mono text-white/25 uppercase tracking-widest">
              Aug 06, 2026 &nbsp;·&nbsp; 3:00 – 6:00 PM EDT &nbsp;·&nbsp; Tampa, FL
            </p>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <div id="apply" className="border border-white/10 bg-white/[0.03] p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Application Received</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Your application is under review. If approved, you'll receive an invoice within 24 hours at the email provided.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 text-xs font-mono text-white/25 uppercase tracking-widest">
                  Invoice on Approval &nbsp;·&nbsp; Confirmed 24h
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30">Application</p>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Last"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Organization Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="you@organization.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Facility / Fund</label>
                  <select
                    required
                    value={form.facility}
                    onChange={e => setForm(f => ({ ...f, facility: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-[#0D0F12]">Select type…</option>
                    <option value="nursing-home" className="bg-[#0D0F12]">Nursing Home / SNF</option>
                    <option value="hospital" className="bg-[#0D0F12]">Hospital / Health System</option>
                    <option value="home-care" className="bg-[#0D0F12]">Home Care Agency</option>
                    <option value="rehab" className="bg-[#0D0F12]">Rehabilitation Center</option>
                    <option value="investor" className="bg-[#0D0F12]">Investment Fund</option>
                    <option value="government" className="bg-[#0D0F12]">Government / VA</option>
                    <option value="other" className="bg-[#0D0F12]">Other</option>
                  </select>
                </div>

                {/* SELECT TIER */}
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-xs font-mono uppercase tracking-widest text-white/25">Select Tier</span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                  <div className="space-y-2">
                    {tiers.map(t => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTier(t.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 border transition-all ${
                          tier === t.id
                            ? "border-primary bg-primary/10 text-white"
                            : "border-white/10 bg-white/[0.02] text-white/50 hover:border-white/20"
                        }`}
                      >
                        <span className="text-xs font-mono uppercase tracking-widest">{t.tag}</span>
                        <span className="text-sm font-bold tabular-nums">${t.price.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary py-4 text-sm font-mono font-bold uppercase tracking-widest text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 mt-2"
                >
                  Purchase Ticket &nbsp;·&nbsp; ${selectedTier.price.toLocaleString()} &nbsp;→
                </button>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-center gap-4 text-xs font-mono text-white/25 uppercase tracking-widest">
                    <span>Application Only</span>
                    <span>·</span>
                    <span>Invoice on Approval</span>
                    <span>·</span>
                    <span>Confirmed 24h</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/25 uppercase tracking-widest">
            <span>Aug 06, 2026 &nbsp;·&nbsp; 3:00–6:00 PM EDT &nbsp;·&nbsp; Tampa, FL &nbsp;·&nbsp; University Entrepreneurship Center</span>
            <div className="flex items-center gap-4">
              <span>© 2026 Clean Box Enterprise</span>
              <span>·</span>
              <span>Private · By Application Only</span>
              <span>·</span>
              <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
              <span>·</span>
              <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Showcase;
