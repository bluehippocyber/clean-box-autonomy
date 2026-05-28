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
<a href="mailto:Cleanboxinfo@cleanboxent.com" className="hover:text-primary transition-colors block">
Cleanboxinfo@cleanboxent.com
</a>
</div>
<div className="mt-5 flex items-center gap-4">
<a href="https://x.com/CleanBoxEnt?s=21" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-background/50 hover:text-primary transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
</svg>
</a>
<a href="https://www.instagram.com/cleanboxent" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-background/50 hover:text-primary transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
</svg>
</a>
<a href="https://www.facebook.com/CleanBoxEnt" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-background/50 hover:text-primary transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
</svg>
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
