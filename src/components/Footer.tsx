import logo from "@/assets/cleanbox-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Clean Box Enterprise" className="h-9 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-background/60 max-w-xs">
              The future of personal care, engineered for dignity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:justify-self-end text-sm">
            <div>
              <div className="font-semibold mb-3">Company</div>
              <ul className="space-y-2 text-background/70">
                <li><a href="#technology" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#safety" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#roi" className="hover:text-primary transition-colors">ROI Portal</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
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
          <div>Clean Box Enterprise Inc. © 2026 — Patent Pending, USPTO &amp; International.</div>
          <div className="text-background/45">
            Architecture &amp; Security by <span className="text-background/75 font-medium">BlueHippoCyber</span> &middot; Powered by Cloudflare Edge
          </div>
        </div>
      </div>
    </footer>
  );
};
