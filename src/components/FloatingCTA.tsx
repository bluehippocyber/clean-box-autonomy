import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        to="/showcase"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm rounded-full shadow-xl hover:bg-white/90 transition-all"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        View Showcase
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

export default FloatingCTA;
