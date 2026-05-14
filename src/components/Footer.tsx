import { Link } from "react-router-dom";
import logo from "@/assets/cleanbox-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Cleanbox" className="h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-background/60 max-w-xs">
              The future of personal care, engineered for dignity.
            </p>
            <p className="mt-3 text-sm text-background/50">
              <a href="mailto:T.King@cleanboxent.com" className="hover:text-primary transition-colors">
                T.King@cleanboxent.com
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-self-end text-sm">
            <div>
              <div className="font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li><Link to="/" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/55">
          <div>Clean Box Enterprise Inc. © 2026 — Patent Pending, USPTO & International.</div>
          <div className="text-background/45">
            Architecture & Security by <span className="text-background/75 font-medium">BlueHippoCyber</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
