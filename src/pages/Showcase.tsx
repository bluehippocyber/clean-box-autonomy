import { useEffect, useRef, useState } from "react";
import showroomVideo from "@/assets/showroom-hero.mp4";

const SHOWCASE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
.sc-root {
--sc-bg: #0A0A0B;
--sc-bg-2: #101114;
--sc-line: rgba(225, 230, 240, 0.10);
--sc-line-strong: rgba(225, 230, 240, 0.22);
--sc-text: #F4F6FA;
--sc-silver: #C8CDD7;
--sc-silver-2: #6F7787;
--sc-red: #E11D2C;
--sc-red-bright: #FF2A39;
--sc-red-dim: rgba(225, 29, 44, 0.10);
--sc-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
font-family: 'Space Grotesk', system-ui, sans-serif;
-webkit-font-smoothing: antialiased;
background: var(--sc-bg);
color: var(--sc-text);
line-height: 1.5;
}
.sc-root *, .sc-root *::before, .sc-root *::after { box-sizing: border-box; }
.sc-root button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
.sc-root input { font-family: inherit; }
.sc-app { position: relative; min-height: 100vh; width: 100vw; display: grid; grid-template-rows: 64px 1fr 32px; overflow: hidden; }
.sc-bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
.sc-bg-video {
position: absolute; top: 50%; left: 50%;
width: 170%; height: 170%;
transform: translate(-50%, -50%) scale(1.15);
object-fit: cover;
filter: blur(18px) saturate(0.55) brightness(0.55) contrast(1.08) hue-rotate(-4deg);
opacity: 0.82;
animation: sc-bg-drift 28s ease-in-out infinite alternate;
}
@keyframes sc-bg-drift {
0% { transform: translate(-50%, -50%) scale(1.15); }
100% { transform: translate(-52%, -48%) scale(1.22); }
}
.sc-bg-tint-1 { position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 40%, rgba(225,29,44,0.16) 0%, transparent 55%), radial-gradient(ellipse at 75% 60%, rgba(10,10,11,0.45) 0%, transparent 60%); }
.sc-bg-tint-2 { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,10,11,0.78) 0%, rgba(10,10,11,0.40) 40%, rgba(10,10,11,0.78) 100%); }
.sc-bg-vignette { position: absolute; inset: 0; box-shadow: inset 0 0 260px 40px rgba(0,0,0,0.92); pointer-events: none; }
.sc-bg-mask { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(10,10,11,0) 0%, rgba(10,10,11,0) 45%, rgba(10,10,11,0.55) 100%); pointer-events: none; }
.sc-bg-grain { position: absolute; inset: 0; background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 3px); mix-blend-mode: overlay; pointer-events: none; }
.sc-header { position: relative; z-index: 5; padding: 0 32px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--sc-line); background: rgba(10,10,11,0.55); backdrop-filter: blur(10px) saturate(140%); }
.sc-brand { display: flex; align-items: center; gap: 12px; }
.sc-brand-divider { width: 1px; height: 16px; background: var(--sc-line-strong); }
.sc-brand-sub { font-family: var(--sc-mono); font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--sc-silver-2); }
.sc-purchase-btn { display: inline-flex; align-items: center; gap: 10px; padding: 10px 20px; background: var(--sc-red); color: #fff; font-size: 11px; font-weight: 500; letter-spacing: 0.20em; text-transform: uppercase; border: 1px solid var(--sc-red); transition: all .2s ease; cursor: pointer; }
.sc-purchase-btn:hover { background: var(--sc-red-bright); border-color: var(--sc-red-bright); box-shadow: 0 6px 24px -6px rgba(225,29,44,0.55); }
.sc-pulse-dot { width: 6px; height: 6px; background: #fff; border-radius: 50%; animation: sc-pulse 1.6s ease-in-out infinite; }
@keyframes sc-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.45; transform: scale(0.85); } }
.sc-main { position: relative; z-index: 4; display: grid; grid-template-columns: 1.05fr 1fr; overflow: hidden; }
.sc-col { padding: 38px 56px; display: flex; flex-direction: column; justify-content: space-between; min-height: 0; overflow: hidden; }
.sc-col-left { position: relative; }
.sc-col-left::after { content: ''; position: absolute; top: 28px; bottom: 28px; right: 0; width: 1px; background: var(--sc-line); }
.sc-col-right { background: rgba(10,10,11,0.65); backdrop-filter: blur(14px) saturate(140%); }
.sc-eyebrow { font-family: var(--sc-mono); font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--sc-red); display: inline-flex; align-items: center; gap: 12px; margin-bottom: 22px; }
.sc-eyebrow::before { content: ''; width: 24px; height: 1px; background: var(--sc-red); }
.sc-headline { font-size: clamp(36px, 4.4vw, 64px); font-weight: 500; letter-spacing: -0.035em; line-height: 0.98; margin-bottom: 14px; color: #fff; text-shadow: 0 4px 30px rgba(0,0,0,0.55); }
.sc-headline-italic { font-style: italic; font-weight: 300; color: var(--sc-silver); }
.sc-headline-red { color: var(--sc-red); }
.sc-subheadline { font-size: 12px; color: var(--sc-silver-2); max-width: 480px; line-height: 1.6; margin-bottom: 12px; font-family: var(--sc-mono); letter-spacing: 0.04em; }
.sc-sub { font-size: 15px; color: var(--sc-silver); max-width: 480px; line-height: 1.55; margin-bottom: 24px; }
.sc-price-strip { display: grid; grid-template-columns: auto 1fr; gap: 28px; align-items: center; padding: 22px 0; border-top: 1px solid var(--sc-line); border-bottom: 1px solid var(--sc-line); margin-bottom: 24px; }
.sc-price { display: flex; align-items: baseline; gap: 12px; }
.sc-price-amt { font-family: var(--sc-mono); font-size: clamp(40px, 3.6vw, 52px); font-weight: 500; color: #fff; letter-spacing: -0.04em; font-variant-numeric: tabular-nums; line-height: 1; }
.sc-price-meta { display: flex; flex-direction: column; gap: 4px; }
.sc-price-k { font-family: var(--sc-mono); font-size: 9.5px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--sc-silver-2); }
.sc-price-v { font-family: var(--sc-mono); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sc-silver); }
.sc-limited { display: flex; flex-direction: column; gap: 8px; border-left: 1px solid var(--sc-line); padding-left: 28px; }
.sc-limited-label { font-family: var(--sc-mono); font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--sc-silver-2); }
.sc-limited-value { font-family: var(--sc-mono); font-size: 15px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sc-red); text-shadow: 0 0 20px rgba(225,29,44,0.4); }
.sc-countdown { margin-bottom: 24px; }
.sc-countdown-lbl { font-family: var(--sc-mono); font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--sc-silver-2); margin-bottom: 12px; }
.sc-cd-units { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.sc-cd-unit { text-align: center; padding: 14px 6px; border: 1px solid var(--sc-line); background: rgba(255,255,255,0.018); }
.sc-cd-n { font-family: var(--sc-mono); font-size: clamp(22px, 2.4vw, 30px); font-weight: 500; color: #fff; letter-spacing: -0.02em; line-height: 1; font-variant-numeric: tabular-nums; }
.sc-cd-u { font-family: var(--sc-mono); font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--sc-silver-2); margin-top: 8px; }
.sc-primary-cta { display: inline-flex; align-items: center; justify-content: center; gap: 14px; padding: 20px 32px; background: var(--sc-red); color: #fff; font-size: 13px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; border: 1px solid var(--sc-red); transition: all .2s ease; cursor: pointer; }
.sc-primary-cta:hover { background: var(--sc-red-bright); border-color: var(--sc-red-bright); transform: translateY(-1px); box-shadow: 0 12px 40px -10px rgba(225,29,44,0.55); }
.sc-cta-arrow { width: 22px; height: 1px; background: #fff; position: relative; }
.sc-cta-arrow::after { content: ''; position: absolute; right: -1px; top: -3.5px; width: 8px; height: 8px; border-top: 1px solid #fff; border-right: 1px solid #fff; transform: rotate(45deg); }
.sc-event-line { font-family: var(--sc-mono); font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--sc-silver-2); display: flex; gap: 24px; flex-wrap: wrap; padding-top: 22px; border-top: 1px solid var(--sc-line); }
.sc-event-line strong { color: var(--sc-silver); font-weight: 500; }
.sc-form-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; padding-bottom: 16px; border-bottom: 1px solid var(--sc-line); }
.sc-form-label { font-family: var(--sc-mono); font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--sc-red); }
.sc-form-status { font-family: var(--sc-mono); font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--sc-silver-2); display: inline-flex; align-items: center; gap: 8px; }
.sc-live-dot { width: 6px; height: 6px; background: var(--sc-red); border-radius: 50%; box-shadow: 0 0 8px var(--sc-red); animation: sc-pulse 1.6s ease-in-out infinite; }
.sc-tier-label { font-family: var(--sc-mono); font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--sc-silver-2); margin: 14px 0 8px; display: flex; align-items: center; gap: 10px; }
.sc-tier-label::after { content: ''; flex: 1; height: 1px; background: var(--sc-line); }
.sc-tier-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 4px; }
.sc-tier-opt { padding: 12px 10px; border: 1px solid var(--sc-line-strong); background: rgba(255,255,255,0.015); text-align: left; cursor: pointer; transition: all .15s ease; position: relative; }
.sc-tier-opt:hover { border-color: var(--sc-silver-2); }
.sc-tier-opt.sc-tier-selected { border-color: var(--sc-red); background: var(--sc-red-dim); }
.sc-tier-opt.sc-tier-selected::before { content: ''; position: absolute; top: 8px; right: 8px; width: 6px; height: 6px; background: var(--sc-red); border-radius: 50%; box-shadow: 0 0 8px var(--sc-red); }
.sc-tier-name { font-family: var(--sc-mono); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--sc-silver-2); margin-bottom: 4px; }
.sc-tier-opt.sc-tier-selected .sc-tier-name { color: var(--sc-red); }
.sc-tier-title { font-size: 13px; font-weight: 500; color: #fff; letter-spacing: -0.005em; margin-bottom: 2px; }
.sc-tier-price { font-family: var(--sc-mono); font-size: 10.5px; color: var(--sc-silver); font-variant-numeric: tabular-nums; }
.sc-tier-features { margin: 10px 0 10px; padding: 12px 14px; border: 1px solid var(--sc-line); background: rgba(255,255,255,0.018); }
.sc-tier-features-label { font-family: var(--sc-mono); font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--sc-silver-2); margin-bottom: 8px; }
.sc-tier-features ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 5px; }
.sc-tier-features li { font-size: 12px; color: var(--sc-silver); display: flex; align-items: flex-start; gap: 8px; line-height: 1.4; }
.sc-tier-features li::before { content: ''; width: 4px; height: 4px; background: var(--sc-red); border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
.sc-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.sc-field { margin-bottom: 8px; }
.sc-field label { display: block; font-family: var(--sc-mono); font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--sc-silver-2); margin-bottom: 6px; }
.sc-field input { width: 100%; background: rgba(0,0,0,0.45); border: 1px solid var(--sc-line-strong); padding: 10px 12px; color: var(--sc-text); font-size: 13px; outline: none; transition: border-color .15s ease; }
.sc-field input::placeholder { color: var(--sc-silver-2); }
.sc-field input:focus { border-color: var(--sc-red); }
.sc-submit-btn { width: 100%; margin-top: 10px; padding: 16px; background: var(--sc-red); color: #fff; font-size: 12.5px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; transition: all .2s ease; border: 1px solid var(--sc-red); display: flex; align-items: center; justify-content: center; gap: 12px; cursor: pointer; }
.sc-submit-btn:hover { background: var(--sc-red-bright); border-color: var(--sc-red-bright); box-shadow: 0 10px 36px -10px rgba(225,29,44,0.6); }
.sc-submit-arrow { width: 20px; height: 1px; background: #fff; position: relative; }
.sc-submit-arrow::after { content: ''; position: absolute; right: -1px; top: -3.5px; width: 7px; height: 7px; border-top: 1px solid #fff; border-right: 1px solid #fff; transform: rotate(45deg); }
.sc-submit-foot { margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-family: var(--sc-mono); font-size: 9.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--sc-silver-2); gap: 10px; flex-wrap: wrap; }
.sc-submit-foot-lock { display: inline-flex; align-items: center; gap: 6px; }
.sc-submit-foot-lock svg { color: var(--sc-red); }
.sc-submit-foot-r { color: var(--sc-silver); }
.sc-foot { position: relative; z-index: 5; padding: 0 32px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--sc-line); background: rgba(10,10,11,0.6); font-family: var(--sc-mono); font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--sc-silver-2); }
.sc-foot-center { color: var(--sc-silver); }
.sc-foot-right { display: flex; gap: 22px; }
.sc-success { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; gap: 16px; }
.sc-success-icon { width: 48px; height: 48px; border: 1px solid var(--sc-red); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--sc-red); }
.sc-success h3 { font-family: var(--sc-mono); font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; }
.sc-success p { font-size: 13px; color: var(--sc-silver-2); max-width: 280px; line-height: 1.6; }
.sc-experience { background: #101114; padding: 80px 64px; border-top: 1px solid rgba(225,230,240,0.10); }
.sc-experience-header { text-align: center; margin-bottom: 56px; }
.sc-experience-eyebrow { font-family: var(--sc-mono); font-size: 10px; letter-spacing: 0.30em; text-transform: uppercase; color: var(--sc-red); margin-bottom: 14px; display: flex; align-items: center; justify-content: center; gap: 16px; }
.sc-experience-eyebrow::before, .sc-experience-eyebrow::after { content: ''; width: 24px; height: 1px; background: var(--sc-red); }
.sc-experience-title { font-size: clamp(26px, 3vw, 40px); font-weight: 500; letter-spacing: -0.03em; color: #fff; }
.sc-experience-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; max-width: 1100px; margin: 0 auto; }
.sc-experience-card { padding: 32px 28px; border: 1px solid rgba(225,230,240,0.10); background: rgba(255,255,255,0.018); transition: background .2s, border-color .2s; }
.sc-experience-card:hover { background: rgba(255,255,255,0.032); border-color: rgba(225,230,240,0.22); }
.sc-experience-icon { width: 36px; height: 36px; border: 1px solid var(--sc-red); display: flex; align-items: center; justify-content: center; color: var(--sc-red); margin-bottom: 18px; }
.sc-experience-card-title { font-size: 15px; font-weight: 500; color: #fff; margin-bottom: 8px; letter-spacing: -0.01em; }
.sc-experience-card-desc { font-size: 13px; color: #6F7787; line-height: 1.6; }
@media (max-width: 1100px) {
.sc-app { height: auto; min-height: 100vh; overflow: auto; grid-template-rows: 60px auto 32px; }
.sc-main { grid-template-columns: 1fr; }
.sc-col { padding: 32px 28px; }
.sc-col-left::after { display: none; }
.sc-col-right { border-top: 1px solid var(--sc-line); }
.sc-experience { padding: 60px 28px; }
.sc-experience-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
.sc-header { padding: 0 18px; }
.sc-brand-divider, .sc-brand-sub { display: none; }
.sc-purchase-btn { padding: 9px 14px; font-size: 10px; }
.sc-price-strip { grid-template-columns: 1fr; gap: 14px; }
.sc-limited { border-left: none; padding-left: 0; padding-top: 16px; border-top: 1px solid var(--sc-line); }
.sc-tier-strip { grid-template-columns: 1fr; }
.sc-experience { padding: 48px 18px; }
.sc-experience-grid { grid-template-columns: 1fr; }
}
@media (min-height: 900px) and (min-width: 1100px) { .sc-col { padding: 56px 64px; } }
@media (max-height: 760px) and (min-width: 1100px) {
.sc-col { padding: 22px 48px; }
.sc-headline { font-size: clamp(30px, 3.6vw, 44px); margin-bottom: 10px; }
.sc-subheadline { margin-bottom: 8px; font-size: 11px; }
.sc-sub { margin-bottom: 16px; font-size: 14px; }
.sc-price-strip { padding: 14px 0; margin-bottom: 16px; }
.sc-countdown { margin-bottom: 18px; }
.sc-cd-unit { padding: 10px 4px; }
.sc-event-line { padding-top: 14px; }
}
`;

const TIERS = [
{ id: "showcase", label: "Tier 01", title: "Showcase Access", price: "$297", display: "Showcase Access",
  features: ["Live prototype demonstration","Healthcare innovation presentation","Founder story presentation","Networking opportunity","Early access opportunity"] },
{ id: "vip", label: "Tier 02 · VIP", title: "VIP", price: "$1,250", display: "VIP Access",
  features: ["Priority seating","Private networking session","Pilot program discussions","Priority preorder access","Discounted preorder pricing"] },
{ id: "founders", label: "Tier 03", title: "Founders", price: "$5,000", display: "Founders Circle",
  features: ["Executive-level networking","Private prototype walkthrough","Founding supporter recognition","Priority manufacturing queue","Earliest preorder allocation","Direct founder access"] },
];

const EXPERIENCE_ITEMS = [
{ icon: "eye", title: "Live Prototype Demonstration", desc: "See the Clean Box system in operation — a rare opportunity to witness autonomous bathing technology in real time." },
{ icon: "droplets", title: "Water + Scrubber System Showcase", desc: "Full demonstration of the proprietary water delivery and scrubber system engineered for safety and dignity." },
{ icon: "presentation", title: "Future Healthcare Bathing Presentation", desc: "A forward-looking session on where autonomous bathing technology is heading in clinical and home care settings." },
{ icon: "user", title: "Founder Story Presentation", desc: "Hear directly from the founders — the origin, the mission, and the roadmap that drives Clean Box Enterprise." },
{ icon: "network", title: "Networking with Healthcare Innovators", desc: "Connect with healthcare professionals, facility operators, and innovators shaping the future of patient care." },
{ icon: "star", title: "Early Access Opportunity", desc: "Attendees receive priority consideration for the pilot program, founding supporter recognition, and preorder allocation." },
];

const TARGET_DATE = new Date("2026-08-06T15:00:00-04:00").getTime();

function pad(n: number): string {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getCountdown() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00" };
  return {
    d: pad(Math.floor(diff / 86400000)),
    h: pad(Math.floor((diff % 86400000) / 3600000)),
    m: pad(Math.floor((diff % 3600000) / 60000)),
    s: pad(Math.floor((diff % 60000) / 1000)),
  };
}

function ExperienceIcon({ type }: { type: string }) {
  const props = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5" };
  if (type === "eye") return <svg {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
  if (type === "droplets") return <svg {...props}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>;
  if (type === "presentation") return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
  if (type === "user") return <svg {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  if (type === "network") return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
}

const Showcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const [countdown, setCountdown] = useState(getCountdown());
  const [selectedTier, setSelectedTier] = useState(0);
  const TIER_LINKS = ['https://buy.stripe.com/14A6ol1qX9MeclkcL04ZG01', 'https://buy.stripe.com/9B6eVeglRgaCfUw5iy4ZG02', 'https://buy.stripe.com/aFa5kE6Lh6A29w86mC4ZG03'];
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.55;
    const onMeta = () => { v.playbackRate = 0.55; };
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('${TIER_LINKS[selectedTier]}', '_blank');
  };

  const tier = TIERS[selectedTier];

  return (
    <div className="sc-root">
      <style>{SHOWCASE_CSS}</style>
      <div className="sc-app">
        <div className="sc-bg" aria-hidden="true">
          <video ref={videoRef} className="sc-bg-video" autoPlay muted loop playsInline preload="auto" src={showroomVideo} />
          <div className="sc-bg-tint-1" />
          <div className="sc-bg-tint-2" />
          <div className="sc-bg-vignette" />
          <div className="sc-bg-mask" />
          <div className="sc-bg-grain" />
        </div>

        <header className="sc-header">
          <div className="sc-brand">
            <span style={{ fontFamily: "var(--sc-mono)", fontSize: 13, fontWeight: 500, letterSpacing: "0.18em", color: "#fff", textTransform: "uppercase" }}>CLEAN BOX</span>
            <span className="sc-brand-divider" />
            <span className="sc-brand-sub">Private Showcase · 08·06·26</span>
          </div>
          <a href={TIER_LINKS[selectedTier]} target="_blank" rel="noopener noreferrer" className="sc-purchase-btn">Buy Tickets →</a>
        </header>

        <main className="sc-main">
          <section className="sc-col sc-col-left">
            <div>
              <div className="sc-eyebrow">Exclusive Private Showcase</div>
              <h1 className="sc-headline">
                The future of safe,<br />
                <span className="sc-headline-italic">autonomous</span>{" "}
                <span className="sc-headline-red">bathing.</span>
              </h1>
              <p className="sc-subheadline">Autonomous bathing technology designed for healthcare, assisted living, rehabilitation, and independent wellness.</p>
              <p className="sc-sub">Clean Box Wave and Clean Box Tsunami unveiled live. Limited capacity. One afternoon focused on the future of independent bathing technology.</p>
              <div className="sc-price-strip">
                <div className="sc-price">
                  <span className="sc-price-amt">$297</span>
                  <div className="sc-price-meta">
                    <span className="sc-price-k">Showcase Access</span>
                    <span className="sc-price-v">VIP &amp; Founders from $1,250</span>
                  </div>
                </div>
                <div className="sc-limited">
                  <span className="sc-limited-label">Availability</span>
                  <span className="sc-limited-value">Limited Capacity</span>
                </div>
              </div>
              <div className="sc-countdown">
                <div className="sc-countdown-lbl">Countdown · Showcase Opens</div>
                <div className="sc-cd-units">
                  <div className="sc-cd-unit"><div className="sc-cd-n">{countdown.d}</div><div className="sc-cd-u">Days</div></div>
                  <div className="sc-cd-unit"><div className="sc-cd-n">{countdown.h}</div><div className="sc-cd-u">Hours</div></div>
                  <div className="sc-cd-unit"><div className="sc-cd-n">{countdown.m}</div><div className="sc-cd-u">Mins</div></div>
                  <div className="sc-cd-unit"><div className="sc-cd-n">{countdown.s}</div><div className="sc-cd-u">Secs</div></div>
                </div>
              </div>
              <a href={TIER_LINKS[selectedTier]} target="_blank" rel="noopener noreferrer" className="sc-primary-cta">Reserve Your Spot →</a>
            </div>
            <div className="sc-event-line">
              <span><strong>Aug 06, 2026</strong> · 3:00 — 6:00 PM EDT</span>
              <span><strong>Tampa, FL</strong> · University Entrepreneurship Center</span>
            </div>
          </section>

          <section className="sc-col sc-col-right" id="apply" ref={formRef as React.Ref<HTMLElement>}>
            {submitted ? (
              <div className="sc-success">
                <div className="sc-success-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3>Application Received</h3>
                <p>Thank you. Confirmation for {tier.display} will arrive within 24 hours. Invoice sent on approval.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); window.open('${TIER_LINKS[selectedTier]}', '_blank'); }}>
                <div className="sc-form-head">
                  <span className="sc-form-label">Reserve · Application</span>
                  <span className="sc-form-status"><span className="sc-live-dot" />Secure Session</span>
                </div>
                <div className="sc-field-row">
                  <div className="sc-field"><label>First Name</label><input type="text" required placeholder="First" autoComplete="given-name" /></div>
                  <div className="sc-field"><label>Last Name</label><input type="text" required placeholder="Last" autoComplete="family-name" /></div>
                </div>
                <div className="sc-field-row">
                  <div className="sc-field"><label>Work Email</label><input type="email" required placeholder="you@organization.com" autoComplete="email" /></div>
                  <div className="sc-field"><label>Phone</label><input type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" /></div>
                </div>
                <div className="sc-field"><label>Organization</label><input type="text" required placeholder="Company · Facility · Fund" autoComplete="organization" /></div>
                <div className="sc-tier-label">Select Tier</div>
                <div className="sc-tier-strip" role="radiogroup" aria-label="Ticket tier">
                  {TIERS.map((t, i) => (
                    <button key={t.id} type="button" className={`sc-tier-opt${selectedTier === i ? " sc-tier-selected" : ""}`} onClick={() => setSelectedTier(i)} aria-pressed={selectedTier === i}>
                      <div className="sc-tier-name">{t.label}</div>
                      <div className="sc-tier-title">{t.title}</div>
                      <div className="sc-tier-price">{t.price}</div>
                    </button>
                  ))}
                </div>
                <div className="sc-tier-features">
                  <div className="sc-tier-features-label">What's included</div>
                  <ul>
                    {tier.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <button type="submit" className="sc-submit-btn">
                  <span>Purchase Ticket · {tier.price}</span>
                  <span className="sc-submit-arrow" />
                </button>
                <div className="sc-submit-foot">
                  <span className="sc-submit-foot-lock">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none"><rect x="1" y="5.5" width="9" height="7" stroke="currentColor" strokeWidth="1.2"/><path d="M3 5.5V3.5C3 2.11929 4.11929 1 5.5 1C6.88071 1 8 2.11929 8 3.5V5.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                    Encrypted · Application Only
                  </span>
                  <span className="sc-submit-foot-r">Invoice on Approval · Confirmed 24h</span>
                </div>
              </form>
            )}
          </section>
        </main>

        <footer className="sc-foot">
          <span>© 2026 Clean Box Enterprise</span>
          <span className="sc-foot-center">Private · By Application Only</span>
          <span className="sc-foot-right"><span>Terms</span><span>Privacy</span></span>
        </footer>
      </div>

      <section className="sc-experience">
        <div className="sc-experience-header">
          <div className="sc-experience-eyebrow">The Showcase</div>
          <h2 className="sc-experience-title">What Guests Will Experience</h2>
        </div>
        <div className="sc-experience-grid">
          {EXPERIENCE_ITEMS.map((item, i) => (
            <div key={i} className="sc-experience-card">
              <div className="sc-experience-icon"><ExperienceIcon type={item.icon} /></div>
              <div className="sc-experience-card-title">{item.title}</div>
              <div className="sc-experience-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Showcase;
