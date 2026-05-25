import { Link } from "react-router-dom";
import logo from "@/assets/cleanbox-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Cleanbox" className="h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-background/60 max-w-xs">
              The future of personal care, engineered for dignity.
            </p>
            <div className="mt-3 text-sm text-background/50 space-y-1">
              <a href="mailto:T.King@cleanboxent.com" className="hover:text-primary transition-colors block">
                T.King@cleanboxent.com
              </a>
              <a href="mailto:Cleanboxinfo@cleanboxent.com" className="hover:text-primary transition-colors block">
                Cleanboxinfo@cleanboxent.com
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-self-end text-sm">
            <div>
              <div className="font-semibold mb-3">Company</div>
              <div className="space-y-2 text-background/70">
                <div><Link to="/about" className="hover:text-primary transition-colors">About</Link></div>
                <div><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></div>
                <div><Link to="/products" className="hover:text-primary transition-colors">Products</Link></div>
                <div><Link to="/showcase" className="hover:text-primary transition-colors">Showcase</Link></div>
                <div><Link to="/" className="hover:text-primary transition-colors">Contact</Link></div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3">Legal</div>
              <div className="space-y-2 text-background/70">
                <div><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Accessibility</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/45">
          <div>Clean Box Enterprise Inc. © 2026 — Patent Pending, USPTO &amp; International.</div>
          <div>
            Architecture &amp; Security by{" "}
            <span className="text-background/75 font-medium">BlueHippoCyber</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
