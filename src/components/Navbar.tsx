import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cleanbox-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technology", href: "#technology" },
  { label: "Security", href: "#security" },
  { label: "Facility Solutions", href: "#solutions" },
  { label: "Founder's Portal", href: "#founder" },
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
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-18 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Clean Box Enterprise" className="h-8 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="cyber" size="sm">Request Quote</Button>
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
            <Button variant="cyber" className="mt-2">Request Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
};
