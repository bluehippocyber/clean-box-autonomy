import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link
        to="/showcase"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-red hover:bg-primary/90 hover:scale-105 transition-all duration-200 group"
      >
        <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
        View Showcase
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
};

export default FloatingCTA;
