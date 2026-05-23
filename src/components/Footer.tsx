import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-white font-bold text-xl tracking-tight">
              Clean Box
            </Link>
            <p
              className="mt-3 text-sm text-white/40 max-w-xs leading-relaxed"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              Reducing assisted bathing from 30 minutes to 10 — protecting
              caregivers and preserving resident dignity.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Industries", to: "/industries" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@cleanboxent.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end justify-start">
            <Link
              to="/showcase"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all"
            >
              View Showcase
            </Link>
            <p className="mt-3 text-xs text-white/30">
              See a live demo · Review ROI · Meet the team
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Clean Box Enterprise Inc. · Patent Pending, USPTO & International.
          </p>
          <a
            href="mailto:info@cleanboxent.com"
            className="text-xs text-white/25 hover:text-white/50 transition-colors"
          >
            info@cleanboxent.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
