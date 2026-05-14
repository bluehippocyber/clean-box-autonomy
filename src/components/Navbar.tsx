import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/cleanbox-logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href.replace("/#", "/"));
  };

  const NavItem = ({ label, href }: { label: string; href: string }) => {
    const active = isActive(href);
    const cls = `text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/75 hover:text-primary"}`;
    if (href.startsWith("/") && !href.includes("#")) {
      return <Link to={href} className={cls} onClick={() => setOpen(false)}>{label}</Link>;
    }
    return <a href={href} className={cls} onClick={() => setOpen(false)}>{label}</a>;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between h-20 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Cleanbox" className="h-9 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => <NavItem key={l.href} {...l} />)}
        </div>

        <div className="hidden lg:block">
          <Button variant="cta" size="default" asChild>
            <a href="/#contact">Request Demo</a>
          </Button>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => <NavItem key={l.href} {...l} />)}
            <Button variant="cta" className="mt-2" asChild>
              <a href="/#contact" onClick={() => setOpen(false)}>Request Demo</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
