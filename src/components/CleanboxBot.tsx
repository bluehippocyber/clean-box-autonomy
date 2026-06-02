import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import logo from "@/assets/cleanbox-logo.png";

type Msg = { role: "bot" | "user"; text: string };

const GREETING: Msg = {
  role: "bot",
  text: "Welcome to Clean Box. I can help you navigate the website, compare our Wave and Tsunami models, view showcase tickets, request pilot program information, submit preorder interest, or contact the Clean Box team. What are you here for today?",
};

const SUGGESTIONS = [
  "Compare Wave and Tsunami",
  "How does Clean Box work?",
  "Buy a showcase ticket",
  "I'm interested in a pilot program",
  "I want to preorder",
  "I represent a healthcare facility",
];

const respond = (input: string): string => {
  const q = input.toLowerCase();

  // Greeting
  if (/^(hi|hello|hey|yo|sup|good morning|good afternoon|good evening)\b/.test(q)) {
    return "Welcome to Clean Box. I can help you compare our Wave and Tsunami models, explain how Clean Box works, show showcase ticket options, take pilot or preorder interest, or connect you with the team. What are you here for today?";
  }

  // Compare models
  if (/(compare|difference|differ|vs\.?|versus|which model|which one|wave or tsunami|tsunami or wave|both model)/.test(q)) {
    return "Clean Box offers two models. The Wave is the facility-focused model at $25,000 — it connects to your water, drain, and a 120V outlet and is built for daily use in settings with utility access. The Tsunami is the premium mobile model at $80,000 — it has a 40-gallon fresh water tank and 40-gallon waste tank, can operate unplugged, includes an entertainment system, and rolls between rooms. Tell me whether you need a fixed plumbed unit or a mobile one and I can point you to the right fit.";
  }

  // Pilot program
  if (/(pilot|trial program|test program|evaluation program|try it at)/.test(q)) {
    return "Clean Box is selecting pilot partners that have a daily bathing need so we can collect meaningful data. A pilot typically runs 30 to 60 days and measures bath duration, user satisfaction, staff satisfaction, slip/fall tracking, labor savings, and workflow feedback. There are 5 pilot machines available, and the facility covers installation. To apply, share your organization, facility type, number of potential users, and contact info through the Contact form and the team will follow up.";
  }

  // Preorder
  if (/(preorder|pre-order|reserve a unit|reserve one|reservation|deposit|production slot|first 100|buy now|order one|how soon can i buy)/.test(q)) {
    return "Clean Box is preparing the first 100 production slots, reserved with a fully refundable deposit. Units are manufactured in Florida, and current planning targets availability after pilot completion (lead times of roughly 30 to 60 days are not guaranteed). To get on the list, submit your name, organization, work email, phone, model interest, quantity, and location through the Contact form and the team will follow up.";
  }

  // Ticket tiers
  if (/(tier|vip|founders|\$?297|\$?1[,.]?250|\$?5[,.]?000|which ticket|ticket option|ticket price)/.test(q)) {
    return "The Clean Box Private Showcase has three ticket tiers: Showcase Access at $297 (live prototype demo, founder presentation, networking, early access), VIP at $1,250 (priority seating, private networking, pilot discussions, priority + discounted preorder), and Founders at $5,000 (executive networking, private prototype walkthrough, founding-supporter recognition, priority manufacturing queue, earliest preorder allocation, and direct founder access). General attendees fit Showcase Access; healthcare buyers and pilot candidates fit VIP; strategic partners, distributors, major buyers, and investors fit Founders. Reserve at https://buy.stripe.com/7sY00k5HdbUm4bO3aq4ZG00.";
  }

  // Showcase / demo
  if (/(showcase|ticket|demo|demonstration|event|see it|watch|tour|book|attend|come see|when is the)/.test(q)) {
    return "The Clean Box Private Showcase is a limited-capacity event at the University of Tampa on August 6, 2026, where you can see the prototype in operation and meet the founder. There are three tiers — Showcase Access ($297), VIP ($1,250), and Founders ($5,000). Reserve your spot at https://buy.stripe.com/7sY00k5HdbUm4bO3aq4ZG00, or click 'View Showcase' in the top navigation. Want me to recommend a tier for your situation?";
  }

  // Investor
  if (/(investor|investing|investment|funding|equity|valuation|raise|cap table)/.test(q)) {
    return "Thanks for your interest in investing in Clean Box. I'm not able to share investment terms, but I can route you to founder Terrance King directly. Please send your name, organization, email, phone, and a short summary of your interest through the Contact form and Terrance will follow up.";
  }

  // Media / press
  if (/(media|press|journalist|reporter|podcast|interview|article|feature|story about)/.test(q)) {
    return "Happy to help with media inquiries. Please share your outlet, contact info, deadline, topic, and any interview details through the Contact form and the Clean Box team will follow up promptly.";
  }

  // Distributor / partner
  if (/(distributor|distribution|reseller|partner|partnership|licensing|territory|wholesale)/.test(q)) {
    return "Clean Box works with distribution and strategic partners. Please share your company, territory, market, relevant experience, and contact info through the Contact form, and the team will route your partnership inquiry to the right person.";
  }

  // Wave only
  if (/wave/.test(q) && !/tsunami/.test(q)) {
    return "The Clean Box Wave is our facility-focused model, starting at $25,000. It requires a water connection, a drain connection, and a 120V outlet, and is built for daily use in facilities with utility access. It has ground entry and is designed for high-use environments like assisted living, nursing homes, rehab, and hospitals. It does not include internal tanks, wheels, or an entertainment system — that's the Tsunami.";
  }

  // Tsunami only
  if (/tsunami/.test(q) && !/wave/.test(q)) {
    return "The Clean Box Tsunami is our premium mobile model, starting at $80,000. It's self-contained with a 40-gallon fresh water tank and a 40-gallon waste water tank, can operate unplugged, includes an entertainment system, and rolls between rooms. It's a strong fit for premium healthcare, wellness, mobile use, and flexible-placement settings where onboard water and waste capacity matter.";
  }

  // Pricing
  if (/(price|pricing|cost|how much|quote|afford|expensive|budget|msrp)/.test(q)) {
    return "The Clean Box Wave starts at $25,000 and the Tsunami starts at $80,000. For a quote tailored to your facility — including model, quantity, location, and timeline — share those details through the Contact form or email Cleanboxinfo@cleanboxent.com and the team will follow up.";
  }

  // How it works
  if (/(how it work|how does it|how do you use|process|step|cleans|scrub|rinse|drying|dry|workflow|operate|operation|use it)/.test(q)) {
    return "Clean Box lets a person bathe while seated. The user enters and sits down, then they or a caregiver selects a cycle. The system automates washing, scrubbing, rinsing, and drying while the user stays seated, and drying support helps reduce wet-exit risk before the user exits — with staff assistance if needed. It's a bathing and hygiene technology, not a medical treatment device.";
  }

  // Cycles
  if (/(cycle|quick|normal|royalty|how long|duration|minutes|how many minutes)/.test(q)) {
    return "Clean Box has three cycle options: Quick (7 minutes, a fast hygiene cycle), Normal (10 minutes, the standard efficiency cycle), and Royalty (15 minutes, the premium comfort cycle).";
  }

  // Size / fit
  if (/(size|dimension|fit|how big|room|space|doorway|door|footprint|52|30|wide|long)/.test(q)) {
    return "Clean Box is 52 inches long and 30 inches wide, so it's designed to fit through standard doorways and work in many facility layouts. The door opens to approximately 7 feet high. If you'd like, I can help you confirm fit for your specific space — just reach out through Contact.";
  }

  // Weight / height limits
  if (/(weight|height|400|6 ?ft|6'4|how tall|how heavy|max user|limit|capacity)/.test(q)) {
    return "Clean Box currently supports users up to 6 ft 4 in tall and up to 400 lb, used in a seated position. For users outside those ranges, the team can review special cases directly — reach out through the Contact form.";
  }

  // Safety
  if (/(safe|safety|emergency|stop|fall|slip|risk|injury|hurt|lock|secure)/.test(q)) {
    return "Safety is built in: seated operation, an emergency stop, the ability for the user to stop the machine at any time, manual opening by staff, temperature protection, pressure monitoring, and drying support before exit. Clean Box is designed to reduce bathing-related slip and fall risk by keeping users seated and supporting drying before exit. It doesn't replace your facility's own safety and care protocols.";
  }

  // Power loss
  if (/(power.*(loss|out|outage|fail|cut|down)|lose power|no power|electricity|blackout|outage)/.test(q)) {
    return "If power is lost during operation, the machine can be pushed open manually so the user can exit. Staff should assist according to the facility's safety protocol.";
  }

  // Medicare / insurance
  if (/(medicare|medicaid|insurance|coverage|covered|reimburse)/.test(q)) {
    return "Not yet — Clean Box is not currently claiming Medicare or insurance coverage. For the latest on purchasing and any coverage options, the team can help directly through the Contact form.";
  }

  // FDA / regulatory
  if (/(fda|regulat|approv|certif|clearance|compliance)/.test(q)) {
    return "Clean Box is presented as a bathing and hygiene technology. I can't speak to regulatory status or claim approval — please direct regulatory questions to Clean Box through the Contact form and the team will respond.";
  }

  // Replace staff
  if (/(replace.*(staff|caregiver|nurse|worker|aide)|fewer staff|cut staff|eliminate staff|without staff|no caregiver)/.test(q)) {
    return "No — Clean Box assists caregivers and improves bathing workflow. It is not a replacement for responsible care, and facilities should continue to follow their own care and safety protocols.";
  }

  // Tested / proven
  if (/(tested|testing|proven|does it work|reliable|real.world|evidence|study|results)/.test(q)) {
    return "Clean Box has completed demonstration-level testing and is actively seeking pilot programs to collect real-world usage data. A pilot is the best way for a facility to evaluate performance and user acceptance with its own residents or patients.";
  }

  // Medical questions
  if (/(medical|diagnos|treat|cure|condition|wound|bedsore|pressure ulcer|infection control|clinical|prescri)/.test(q)) {
    return "Clean Box is a bathing and hygiene technology — it does not diagnose or treat medical conditions, and I can't give medical advice. Clinical suitability should be reviewed by appropriate professionals. For sanitation or infection-control protocols, the team can share details through Contact.";
  }

  // Soap
  if (/(soap|detergent|cleanser|pod|shampoo|body wash)/.test(q)) {
    return "Clean Box uses a proprietary Clean Box soap system, and the approved guidance is to use that system rather than third-party soap. Soap pods are part of the future roadmap. For current supply details, the team can help through Contact.";
  }

  // Maintenance
  if (/(maintenance|maintain|service|servicing|upkeep|scrubber|clean the machine|how often.*clean)/.test(q)) {
    return "Clean Box is designed for maintenance roughly every 6 months, and the scrubbers are replaceable. For detailed cleaning and maintenance protocols, the team can provide specifics through the Contact form.";
  }

  // Industries / healthcare use cases
  if (/(industry|industries|nursing|hospital|assisted|alf|rehab|correction|home care|home health|veteran|wellness|facility|facilities|who is it for|who uses|use case|senior|elderly|disab)/.test(q)) {
    return "Clean Box serves assisted living, nursing homes, hospitals, rehabilitation, corrections, home healthcare (future applications), and wellness/premium settings. It's designed to support seated bathing, improve dignity and consistency, and reduce physically demanding caregiver workflows. If you represent a facility, tell me your facility type, number of residents or patients, and biggest bathing challenge and I can point you to the right next step.";
  }

  // ROI / labor savings
  if (/(roi|saving|save money|labor|payback|efficien|workflow cost|staffing cost|return on)/.test(q)) {
    return "Clean Box is designed to create meaningful efficiency and reduce time spent on bathing workflows. Actual ROI depends on utilization, staffing costs, bathing volume, and facility operations, so I can't promise a specific payback. If you'd like, the team can put together a customized ROI discussion for your facility — just reach out through Contact.";
  }

  // Founder / about
  if (/(found|terrance|king|who made|who built|who started|who creat|story|about|mission|why was|history|origin)/.test(q)) {
    return "Clean Box was founded by Terrance King after his grandmother died in a nursing home due to bedsores and inadequate bathing practices. After seeing how difficult and undignified bed baths can be for patients — and how physically demanding they are for caregivers — he created Clean Box to restore dignity, independence, safety, and consistency to bathing.";
  }

  // Social
  if (/(social|instagram|facebook|twitter|x\.com|follow|handles)/.test(q)) {
    return "You can follow Clean Box on social media: X (Twitter) at https://x.com/CleanBoxEnt, Instagram at https://www.instagram.com/cleanboxent, and Facebook at https://www.facebook.com/CleanBoxEnt for product news and showcase updates.";
  }

  // Contact
  if (/(contact|email|phone|reach|call|speak|talk|get in touch|human|representative)/.test(q)) {
    return "You can reach the Clean Box team at Cleanboxinfo@cleanboxent.com or through the Contact form at the bottom of the home page. For pricing, demos, pilots, preorders, media, investor, or partnership inquiries, the team routes each to the right person.";
  }

  // Install / shipping / timeline
  if (/(install|setup|deploy|deployment|ship|shipping|delivery|deliver|timeline|lead time|how long to get|when will)/.test(q)) {
    return "The Wave connects to existing water, drain, and a 120V outlet, while the Tsunami is mobile with onboard tanks and can operate unplugged. Current planning targets availability after pilot completion, and lead times of roughly 30 to 60 days are not guaranteed. For deployment, installation, and shipping specifics, the team can advise based on your location — reach out through Contact.";
  }

  // Future / roadmap
  if (/(future|roadmap|coming soon|whats next|what's next|subscription|analytics|dashboard|international|consumer|home version|update)/.test(q)) {
    return "Clean Box's roadmap includes soap pods, subscription services, a healthcare analytics dashboard, international deployment, and a future consumer/home version, among other items. These are planned directions rather than guarantees — the website has the latest on what's available now.";
  }

  // Water use / sanitation
  if (/(water use|gallons per|how much water|sanitation|sanitize|recirculate|between users|hygiene between|waterproof|infection)/.test(q)) {
    return "For specifics like per-cycle water use, sanitation between users, and technical installation details, Clean Box can share the latest information directly. Please reach out through the Contact form and the team will provide those details.";
  }

  // Warranty / financing
  if (/(warranty|guarantee terms|financ|leas|loan|payment plan)/.test(q)) {
    return "For current warranty terms and purchasing or financing options, the team can share the latest details directly — please reach out through the Contact form.";
  }

  // Default
  return "Great question. For the most accurate answer about Clean Box technology, models, pricing, pilots, or deployment, reach out at Cleanboxinfo@cleanboxent.com or use the Contact form on the site. You can also reserve a spot at the Private Showcase (University of Tampa, August 6, 2026) at https://buy.stripe.com/7sY00k5HdbUm4bO3aq4ZG00 to see the system in action.";
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
