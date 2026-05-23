import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Calculator from "@/components/Calculator";
import FounderStory from "@/components/FounderStory";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />

      {/* ROI Calculator Preview Section */}
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
              Facility ROI Tool
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Estimate Your Labor Savings
              <br />
              <span className="text-white/50">With Clean Box</span>
            </h2>
            <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
              See how reducing assisted bathing time from 30 minutes to 10 minutes
              can impact your weekly, monthly, and annual labor costs.
            </p>
          </div>
          <Calculator />
        </div>
      </section>

      {/* Industries quick links */}
      <section className="py-20 px-6 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
            Built For
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-10"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            The Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Nursing Homes", icon: "🏥" },
              { label: "Rehabilitation Centers", icon: "♻️" },
              { label: "Assisted Living", icon: "🏡" },
              { label: "Hospitals", icon: "🏨" },
              { label: "Home Care", icon: "🤝" },
              { label: "Correctional Facilities", icon: "🏛️" },
            ].map((item) => (
              <Link
                key={item.label}
                to="/showcase"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all group text-left"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p
                    className="text-white font-medium text-sm group-hover:text-white"
                    style={{ WebkitFontSmoothing: "antialiased" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">View Showcase →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FounderStory />

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
