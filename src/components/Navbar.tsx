import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cleanbox-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Privacy", href: "#safety" },
  { label: "ROI", href: "#roi" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Clean Box Enterprise" className="h-9 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="cta" size="default" asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="cta" className="mt-2" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
