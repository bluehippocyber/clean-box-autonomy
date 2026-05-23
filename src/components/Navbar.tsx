import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Industries", to: "/industries" },
  ];
  const isActive = (path) =>
    location.pathname === path ? "text-white font-semibold" : "text-white/70 hover:text-white";
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-xl tracking-tight">Clean Box</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`text-sm transition-colors ${isActive(link.to)}`}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:info@cleanboxent.com" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
          <Link to="/showcase" className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all">
            View Showcase
          </Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-white/80 hover:text-white text-sm py-1" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="/showcase" className="mt-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full text-center" onClick={() => setMobileOpen(false)}>
            View Showcase
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
