import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import logo from "@/assets/cleanbox-logo.png";

type Msg = { role: "bot" | "user"; text: string };

const GREETING: Msg = {
  role: "bot",
  text: "Welcome to Clean Box. I'm your Autonomous Care Assistant. Ask me anything about our Wave or Tsunami models, pricing, industries we serve, or how to reserve a showcase.",
};

const SUGGESTIONS = [
  "What's the difference between Wave and Tsunami?",
  "How much does it cost?",
  "What industries do you serve?",
  "How do I reserve a showcase?",
];

const respond = (input: string): string => {
  const q = input.toLowerCase();

  if (/(hi|hello|hey|sup|good morning|good afternoon)/.test(q)) {
    return "Hey there! I'm the Clean Box AI assistant. Ask me about our Wave or Tsunami models, pricing, industries, or how to book a private showcase demo.";
  }

  if (/(compare|difference|vs|versus|both model|two model|which one|wave or tsunami|tsunami or wave)/.test(q)) {
    return "Clean Box offers Two Models, One Mission. The Wave is our institutional deployment platform — stationary, direct plumbing, starting at $25,000. The Tsunami is our flagship luxury mobile system — self-contained 40-gallon water tanks, battery-powered, chromotherapy, entertainment system, starting at $80,000. Both deliver fully autonomous bathing with zero caregiver involvement during the bath.";
  }

  if (/wave/.test(q) && !/tsunami/.test(q)) {
    return "The Clean Box Wave is our professional institutional platform — engineered for permanent clinical installation in nursing homes, hospitals, and rehab centers. Starting at $25,000. It connects directly to your existing plumbing and power, runs unlimited continuous facility operation, and fits through standard doorways. Built to scale across multi-unit facilities.";
  }

  if (/tsunami/.test(q) && !/wave/.test(q)) {
    return "The Clean Box Tsunami is our flagship luxury autonomous bathing system — fully mobile, rolling room-to-room, starting at $80,000. It features a self-contained 40-gallon clean and waste water system, battery-powered autonomous operation, a 24-jet hydrotherapy system, chromotherapy, aromatherapy, and an integrated entertainment and wellness system with voice assistant, Bluetooth, and streaming.";
  }

  if (/(price|pricing|quote|cost|how much|afford|invest|purchase|buy|order)/.test(q)) {
    return "The Clean Box Wave starts at $25,000 and the Tsunami starts at $80,000. For a detailed quote tailored to your facility, connect with our founder Terrance King directly through the Contact section or email Cleanboxinfo@cleanboxent.com.";
  }

  if (/(showcase|demo|see it|watch|tour|experience|reserve|book|appointment|visit)/.test(q)) {
    return "The Clean Box Showcase is a LIMITED CAPACITY private demonstration experience. You'll see the Tsunami in full operation, get a technical deep-dive with the founder, and leave with a custom ROI analysis. Use the 'View Showcase' button in the top navigation to reserve your spot — availability is extremely limited.";
  }

  if (/(industry|industries|who|facility|nursing|home|hospital|rehab|veteran|luxury|private|senior|assisted|ALF)/.test(q)) {
    return "Clean Box serves six key markets: Nursing Homes & ALFs, Hospitals & Acute Care, Home Care & Private Duty, Rehab & Specialty Centers, Veterans Care Facilities, and Luxury Wellness & Private Residences. Each deployment is tailored to the facility's unique workflow and care standards.";
  }

  if (/(roi|saving|labor|cost reduction|staff|caregiver|payroll|hours)/.test(q)) {
    return "Facilities typically see dramatic reductions in caregiver bathing labor. With 100 residents bathing 3x/week at $13.60/hr, our calculator projects over $70,000 in annual labor savings. You can test your own numbers using the ROI Calculator on the home page.";
  }

  if (/(safe|safety|emergency|stop|lock|door|fall|risk|injury)/.test(q)) {
    return "Safety is built into every layer of Clean Box. Multiple physical emergency stops at every angle, a non-locking safety entry system, seated safety-first bathing design, and on-device person-detection that continuously adjusts pressure, flow, and temperature. Slip-and-fall risk is dramatically reduced — no transfers, no standing, no caregiver contact during bathing.";
  }

  if (/(privacy|data|cloud|hipaa|camera|biometric|sensor|store|transmit)/.test(q)) {
    return "Clean Box runs 100% on-device. No video, biometric, or sensor data is ever transmitted, streamed, or stored in the cloud. Person-Detection AI is fully edge-computed — your residents' data never leaves the unit.";
  }

  if (/(jet|24|hydro|spray|water|pressure|flow)/.test(q)) {
    return "The Tsunami features a precision 24-jet hydrotherapy system with smart temperature and pressure controls. Every cycle is automatically calibrated to the resident's comfort profile. Pressure and flow adjust in real time based on on-device sensor feedback.";
  }

  if (/(tank|plumb|drain|waste|gallon|self.contain)/.test(q)) {
    return "The Tsunami is fully self-contained with a 40-gallon clean water reservoir and a separate waste water system — no plumbing hookup required. The Wave connects directly to existing facility plumbing and drainage for unlimited continuous operation.";
  }

  if (/(dry|aroma|chromo|light|therapy|wellness|scent|ambien)/.test(q)) {
    return "The Tsunami includes chromotherapy lighting, aromatherapy integration, and an automated drying system — creating a full spa-wellness experience. These features make it the preferred choice for luxury wellness and private-care buyers.";
  }

  if (/(material|frame|aluminum|build|construct|enclos|body|chassis)/.test(q)) {
    return "Clean Box units are engineered with aircraft-grade aluminum frames and commercial-grade polypropylene enclosures — built to withstand continuous high-frequency institutional use while remaining lightweight enough for mobility.";
  }

  if (/(founder|terrance|king|who made|who built|story|about|mission|why)/.test(q)) {
    return "Clean Box was founded by Terrance King after watching families and facilities struggle with one of the most essential — and difficult — aspects of daily care. He built the first prototype himself and has been developing the technology with a focus on dignity, independence, and operational efficiency ever since.";
  }

  if (/(contact|email|phone|reach|talk|speak|human|person|call)/.test(q)) {
    return "You can reach the Clean Box team at Cleanboxinfo@cleanboxent.com, or use the Contact form at the bottom of the home page. For pricing, demos, or deployment questions, Terrance King personally responds to all facility inquiries.";
  }

  if (/(install|deploy|setup|how long|timeline|delivery|ship|install|rollout)/.test(q)) {
    return "Wave installation integrates with your existing plumbing and power — typical facility setup takes 1–2 days per unit. The Tsunami is plug-and-play mobile with no installation required. Contact us for deployment timelines specific to your facility size.";
  }

  return "Great question. For the most accurate answer about Clean Box technology, pricing, or deployment, reach out directly at Cleanboxinfo@cleanboxent.com or use the Contact form on our site. You can also reserve a private showcase to see the full system in action.";
};

export default function CleanboxBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: "bot", text: respond(text) }]);
    }, 700 + Math.random() * 400);
  };

  return (
    <>
      {/* Floating Widget Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Cleanbox Assistant"
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-primary/20 ${
          open ? "" : "animate-bot-pulse"
        }`}
      >
        {open ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <img src={logo} alt="Cleanbox" className="w-10 h-10 object-contain" />
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-28 right-6 z-50 w-[min(380px,calc(100vw-3rem))] origin-bottom-right transition-all duration-200 ${
          open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: "520px" }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background">
            <img src={logo} alt="Cleanbox" className="w-7 h-7 object-contain" />
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">Cleanbox AI</p>
              <p className="text-xs text-muted-foreground mt-0.5">Autonomous Care Assistant</p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Online
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ minHeight: "240px", maxHeight: "320px" }}>
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-2.5 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {msgs.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 pb-3 pt-1 border-t border-border flex gap-2">
            <input
              className="flex-1 bg-muted rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
              placeholder="Ask about Wave, Tsunami, pricing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
