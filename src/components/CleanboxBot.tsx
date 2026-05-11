import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import bot from "@/assets/cleanbox-bot.png";

type Msg = { role: "bot" | "user"; text: string };

const GREETING: Msg = {
  role: "bot",
  text: "Welcome to Clean Box. I am your Autonomous Care Assistant. How can I help you explore our autonomous bathing technology today?",
};

const SUGGESTIONS = [
  "How does the 24-jet system work?",
  "Tell me about the Wave",
  "What about privacy & data?",
  "I'd like a demo",
];

const respond = (input: string): string => {
  const q = input.toLowerCase();

  if (/(price|pricing|quote|cost|demo|consult|buy|purchase|order)/.test(q)) {
    return "I'd love to connect you with our founder. Please use the contact form below to Schedule a Technical Consultation with Terrance King — he'll personally walk you through pricing, deployment and ROI for your facility.";
  }
  if (/wave/.test(q)) {
    return "The Clean Box Wave is the stationary foundation for permanent clinical installations — engineered for high-volume facility hygiene. Full institutional specs are releasing soon (2026). I can add you to the Wave waitlist via the Contact section.";
  }
  if (/(privacy|data|cloud|camera|biometric|hippo)/.test(q)) {
    return "Hippo-Shield Privacy: 100% on-device. Our Person-Detection AI runs entirely on the Edge — no video, biometric or sensor data is ever transmitted, streamed, or stored in the cloud.";
  }
  if (/(safety|emergency|stop|lock|door)/.test(q)) {
    return "Safety is built in: multiple physical emergency stops at every angle, a non-locking safety entry system, and on-device person-detection that continuously adjusts pressure, flow and temperature.";
  }
  if (/(jet|24|hydro|spray)/.test(q)) {
    return "The Tsunami v1 uses a 24-jet precision hydrotherapy system across the body, paired with soft-exfoliation brushes that mimic human touch while delivering 100% sanitization.";
  }
  if (/(tank|water|plumb|drain|waste)/.test(q)) {
    return "Tsunami uses dual-tank isolation with 100% separation of fresh and waste water, plus a closed-loop sanitization cycle — eliminating cross-contamination entirely. No external plumbing required.";
  }
  if (/(dry|aroma|chromo|light)/.test(q)) {
    return "Every cycle ends with an automated drying stage, with optional aroma and chromotherapy programs for a luxury wellness experience.";
  }
  if (/(roi|saving|labor|cost reduction|staff)/.test(q)) {
    return "Clean Box delivers a verified 70% labor reduction on hygiene tasks. Try the Elite ROI Portal above to see your facility's annual operational savings.";
  }
  if (/(facility|nursing|hospital|rehab|residence|home)/.test(q)) {
    return "Clean Box serves skilled nursing, hospitals, rehab centers and luxury private residences. Fleet sizes range from a single unit to 50+ deployments.";
  }
  if (/(material|frame|aluminum|polypropylene|enclosure)/.test(q)) {
    return "The chassis is anodized 6061-T6 aluminum (medical-grade, rust-proof) inside a sealed polypropylene enclosure for total electrical isolation — IP66 rated.";
  }
  if (/(hi|hello|hey)/.test(q)) {
    return "Hello! Ask me about the Tsunami v1, the upcoming Wave, our safety specs, or how to get a quote.";
  }

  return "Great question. The Tsunami v1 is our flagship autonomous bathing system — fully self-contained, 24-jet precision, dual-tank isolation, and on-device privacy. Want me to connect you with Terrance King for a technical consultation?";
};

export const CleanboxBot = () => {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: respond(t) }]);
    }, 450);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Cleanbox Assistant"
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center transition-transform hover:scale-105 ${
          open ? "" : "animate-bot-pulse"
        }`}
      >
        {open ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <img src={bot} alt="Cleanbox Bot" className="w-12 h-12 object-contain" />
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-28 right-6 z-50 w-[min(380px,calc(100vw-3rem))] origin-bottom-right transition-all duration-200 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl bg-white border border-border shadow-elevated overflow-hidden flex flex-col h-[520px] max-h-[70vh]">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-gradient-red text-primary-foreground">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
              <img src={bot} alt="" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">Cleanbox Assistant</div>
              <div className="text-[11px] opacity-85 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                Autonomous Care AI
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-surface-clinical">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-white border border-border text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {msgs.length === 1 && (
              <div className="pt-2 grid grid-cols-1 gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-left text-xs font-medium px-3 py-2 rounded-lg bg-white border border-border hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-3 border-t border-border bg-white flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Tsunami, safety, ROI..."
              className="flex-1 px-3 py-2 text-sm rounded-lg bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-deep transition-colors"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
