import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Nursing Homes & Long-Term Care",
    icon: "🏥",
    description:
      "High-volume daily bathing is one of the biggest labor costs in long-term care. Clean Box reduces hands-on bathing time from 30 minutes to 10 minutes per resident — preserving caregiver capacity without cutting corners on care.",
    stats: ["Up to 66.7% time reduction", "1 caregiver per cycle", "Daily operational savings"],
  },
  {
    name: "Rehabilitation Centers",
    icon: "♻️",
    description:
      "Patients in rehabilitation often require frequent bathing assistance. Clean Box's dignified, controlled workflow supports faster throughput without compromising patient safety or therapist oversight.",
    stats: ["Reduced caregiver strain", "Consistent cycle timing", "Improved throughput"],
  },
  {
    name: "Assisted Living Facilities",
    icon: "🏡",
    description:
      "Assisted living operators face staffing shortages and rising wages. Clean Box helps facilities do more with existing staff — improving both resident experience and operational margins.",
    stats: ["Staffing efficiency", "Higher resident dignity", "Lower overtime risk"],
  },
  {
    name: "Hospitals & Acute Care",
    icon: "🏨",
    description:
      "Bed-bound and post-surgical patients need regular hygiene care. Clean Box integrates into hospital hygiene protocols without requiring a second caregiver, reducing departmental labor costs.",
    stats: ["ICU & post-op compatible", "Infection control support", "Single-caregiver operation"],
  },
  {
    name: "Home Care Agencies",
    icon: "🤝",
    description:
      "Mobile and home-use configurations allow caregivers to deliver professional-grade bathing support in residential settings — expanding your agency's service capacity per visit.",
    stats: ["In-home deployment", "Extended visit value", "Caregiver safety"],
  },
  {
    name: "Correctional & Institutional",
    icon: "🏛️",
    description:
      "High-volume institutional hygiene demands call for consistent, repeatable workflows. Clean Box delivers a controlled, supervised bathing cycle that scales across large populations.",
    stats: ["High-volume capable", "Supervision maintained", "Standardized workflow"],
  },
];

const Industries = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Markets Served
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Built for the
            <br />
            <span className="text-white/60">Facilities That Need It Most</span>
          </h1>
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            Clean Box is designed for any care setting where bathing time,
            caregiver safety, and resident dignity matter.
          </p>
          <Link
            to="/showcase"
            className="mt-8 inline-flex items-center px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
          >
            View Showcase
          </Link>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h2
                className="text-lg font-bold text-white mb-3"
                style={{ WebkitFontSmoothing: "antialiased" }}
              >
                {industry.name}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed flex-1">
                {industry.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {industry.stats.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-xs text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/showcase"
                className="mt-5 block w-full py-2.5 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-sm text-center font-medium transition-all"
              >
                View Showcase →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            Ready to See It in Action?
          </h2>
          <p className="text-white/50 mb-8">
            The Clean Box Showcase is the best way to experience the workflow,
            review ROI projections, and meet our team.
          </p>
          <Link
            to="/showcase"
            className="inline-flex items-center px-10 py-4 bg-white text-black font-bold text-base rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            View Showcase
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
