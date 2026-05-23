import { Link } from "react-router-dom";
import Calculator from "@/components/Calculator";

const Showcase = () => (
  <div className="bg-black min-h-screen">
    {/* Minimal header — no full nav, no distractions */}
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg tracking-tight">Clean Box</Link>
        <a href="mailto:info@cleanboxent.com" className="text-xs text-white/40 hover:text-white transition-colors">Questions? Contact Us</a>
      </div>
    </header>

    <main className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-semibold uppercase tracking-widest text-white/50 mb-5">
            Clean Box Showcase — 2026
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight" style={{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}>
            See Clean Box Live.<br /><span className="text-white/60">Calculate Your Savings.</span>
          </h1>
          <p className="mt-5 text-lg text-white/50 max-w-xl mx-auto" style={{WebkitFontSmoothing:"antialiased"}}>
            Join facility operators, investors, and buyers at the Clean Box Showcase. See the system in action, meet the team, and understand the full ROI story.
          </p>
        </div>

        {/* Ticket block */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Showcase Access</p>
                <h2 className="text-2xl font-bold text-white" style={{WebkitFontSmoothing:"antialiased"}}>Facility Buyer Ticket</h2>
                <p className="text-white/50 text-sm mt-2">Live demonstration · ROI review session · Meet the Clean Box team</p>
                <ul className="mt-4 space-y-2">
                  {["Live Clean Box Wave demonstration","One-on-one ROI walkthrough","Pilot program discussion","Priority buyer status"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                      <svg className="w-4 h-4 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center flex-shrink-0">
                <p className="text-4xl font-bold text-white tabular-nums">$360</p>
                <p className="text-white/40 text-xs mt-1">per ticket</p>
                <a href="https://buy.stripe.com/cleanbox-reserve-360"
                  className="mt-4 block px-8 py-3.5 bg-white text-black font-bold text-base rounded-full hover:bg-white/90 transition-all shadow-lg whitespace-nowrap">
                  Purchase Ticket
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">Facility ROI Tool</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{WebkitFontSmoothing:"antialiased"}}>Estimate Your Labor Savings</h2>
            <p className="mt-3 text-white/50 max-w-lg mx-auto">Enter your facility size and see exactly how much Clean Box could save in annual labor costs.</p>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-8">
            <Calculator showcaseMode={true} />
          </div>
        </section>

        {/* Trust stats */}
        <section className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-8">Why Clean Box</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "66.7%", label: "Less hands-on bathing time", sub: "30 min → 10 min per resident" },
              { stat: "1", label: "Caregiver per bathing cycle", sub: "Supervision maintained" },
              { stat: "$93K+", label: "Annual savings potential", sub: "100 residents · $18/hr staff" },
            ].map((item) => (
              <div key={item.stat} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-4xl font-bold text-white mb-1 tabular-nums" style={{WebkitFontSmoothing:"antialiased"}}>{item.stat}</p>
                <p className="text-sm font-medium text-white/70">{item.label}</p>
                <p className="text-xs text-white/30 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="https://buy.stripe.com/cleanbox-reserve-360"
              className="inline-flex items-center px-12 py-4 bg-white text-black font-bold text-base rounded-full hover:bg-white/90 transition-all shadow-xl">
              Purchase Ticket / Access Showcase
            </a>
            <p className="mt-4 text-white/25 text-xs">
              Secure checkout via Stripe. Questions?{" "}
              <a href="mailto:info@cleanboxent.com" className="underline hover:text-white/50">Contact our team.</a>
            </p>
          </div>
        </section>
      </div>
    </main>

    <footer className="border-t border-white/10 py-6 px-6 text-center">
      <p className="text-white/20 text-xs">
        © {new Date().getFullYear()} Clean Box Enterprise Inc. ·{" "}
        <a href="mailto:info@cleanboxent.com" className="hover:text-white/40 transition-colors">info@cleanboxent.com</a>
      </p>
      <p className="text-white/15 text-xs mt-1">Calculator estimates are for planning purposes only.</p>
    </footer>
  </div>
);

export default Showcase;
