import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/cleanbox-logo.png";

const links = [
  { label: "Home", href: "/", type: "route" },
  { label: "Industries", href: "/industries", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Contact", href: "contact", type: "scroll" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href: string, type: string) => {
    if (type === "scroll") return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const NavItem = ({ label, href, type }: { label: string; href: string; type: string }) => {
    const active = isActive(href, type);
    const cls = `text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/75 hover:text-primary"}`;
    if (type === "scroll") {
      return (
        <button className={cls} onClick={() => scrollToSection(href)}>
          {label}
        </button>
      );
    }
    return (
      <Link to={href} className={cls} onClick={() => setOpen(false)}>
        {label}
      </Link>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"
    }`}>
      <nav className="container flex items-center justify-between h-20 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cleanbox" className="h-9 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => <NavItem key={l.href} {...l} />)}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/showcase"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            View Showcase
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => <NavItem key={l.href} {...l} />)}
            <Link
              to="/showcase"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors w-fit"
              onClick={() => setOpen(false)}
            >
              View Showcase
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
