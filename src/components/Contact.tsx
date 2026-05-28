import { useState } from "react";
import { ArrowRight, Building2, Users, Mic, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const [tab, setTab] = useState<"general" | "buyer">("general");
  const [submitted, setSubmitted] = useState(false);

  const [general, setGeneral] = useState({ name: "", company: "", title: "", email: "", phone: "", location: "", industry: "", message: "" });
  const [buyer, setBuyer] = useState({ units: "", locationType: "", timeline: "", budget: "", financing: "no" });

  const updateG = (k: string, v: string) => setGeneral(p => ({ ...p, [k]: v }));
  const updateB = (k: string, v: string) => setBuyer(p => ({ ...p, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!general.name || !general.email) {
      toast.error("Please enter your name and email to continue.");
      return;
    }
    const subject = encodeURIComponent(
      `[Clean Box Inquiry] ${general.name}${general.company ? ' – ' + general.company : ''}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${general.name}`,
        general.company ? `Company: ${general.company}` : '',
        general.title ? `Title: ${general.title}` : '',
        `Email: ${general.email}`,
        general.phone ? `Phone: ${general.phone}` : '',
        general.location ? `Location: ${general.location}` : '',
        general.industry ? `Industry: ${general.industry}` : '',
        general.message ? `\nMessage:\n${general.message}` : '',
      ].filter(Boolean).join('\n')
    );
    window.open(
      `mailto:Cleanboxinfo@cleanboxent.com?subject=${subject}&body=${body}`,
      '_self'
    );
    toast.success("Inquiry received. The Clean Box team will follow up within 24 hours.");
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-surface-clinical">
        <div className="container max-w-2xl text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Inquiry Received.</h2>
          <p className="text-muted-foreground text-lg mb-8">The Clean Box team reviews all serious inquiries and responds promptly. You'll hear from us within 24 hours.</p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Inquiry</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-clinical">
      <div className="container px-4 sm:px-6">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Contact</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's Build the Future of{" "}
            <span className="text-primary">Bathing Together.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Connect with the Clean Box team to explore purchasing, partnerships, demonstrations, media opportunities, or strategic collaboration.
          </p>
        </div>

        {/* Context cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {[
            { icon: Building2, title: "Private Demonstration", desc: "Schedule a hands-on product walkthrough for healthcare groups, institutions, and qualified buyers." },
            { icon: Users, title: "Strategic Partnerships", desc: "Distributors, healthcare networks, government buyers, wellness groups, and innovation partners welcome." },
            { icon: Mic, title: "Press & Speaking", desc: "Podcast appearances, media features, speaking opportunities, and founder interviews." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <Icon className="w-6 h-6 text-primary mb-3" />
              <div className="font-semibold text-foreground mb-2">{title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto bg-card rounded-3xl border border-border shadow-elevated overflow-hidden">
          {/* Tab switcher */}
          <div className="grid grid-cols-2 border-b border-border">
            {[
              { key: "general", label: "Start the Conversation" },
              { key: "buyer", label: "Commercial Buyer Inquiry" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key as "general" | "buyer")}
                className={`py-5 px-6 text-sm font-semibold border-r last:border-r-0 border-border transition-colors ${tab === key ? "bg-primary-soft text-primary" : "bg-secondary/40 text-foreground/60 hover:text-foreground"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="p-8 space-y-6">
            {/* General fields — always shown */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="Terrance King" value={general.name} onChange={e => updateG("name", e.target.value)} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company">Company / Organization</Label>
                <Input id="company" placeholder="Sunrise Care Facility" value={general.company} onChange={e => updateG("company", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="Administrator" value={general.title} onChange={e => updateG("title", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="you@organization.com" value={general.email} onChange={e => updateG("email", e.target.value)} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (305) 000-0000" value={general.phone} onChange={e => updateG("phone", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="location">Country / State</Label>
                <Input id="location" placeholder="Florida, USA" value={general.location} onChange={e => updateG("location", e.target.value)} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="industry">Industry Type</Label>
                <Input id="industry" placeholder="e.g. Skilled Nursing, Home Care, Hospitality…" value={general.industry} onChange={e => updateG("industry", e.target.value)} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Tell us about your needs…" value={general.message} onChange={e => updateG("message", e.target.value)} />
              </div>
            </div>

            {/* Buyer fields */}
            {tab === "buyer" && (
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="space-y-1.5">
                  <Label htmlFor="units">Number of Units Needed</Label>
                  <Input id="units" placeholder="e.g. 5–10 units" value={buyer.units} onChange={e => updateB("units", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="locationType">Installation Location Type</Label>
                  <Input id="locationType" placeholder="e.g. Skilled Nursing Facility" value={buyer.locationType} onChange={e => updateB("locationType", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Input id="timeline" placeholder="e.g. Q3 2026" value={buyer.timeline} onChange={e => updateB("timeline", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" placeholder="e.g. $50K–$150K" value={buyer.budget} onChange={e => updateB("budget", e.target.value)} />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label>Need Financing Options?</Label>
                  <div className="flex gap-4 mt-1">
                    {["yes", "no", "unsure"].map(v => (
                      <label key={v} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="financing" value={v} checked={buyer.financing === v} onChange={() => updateB("financing", v)} className="accent-primary" />
                        {v.charAt(0).toUpperCase() + v.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Response assurance */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-primary-soft border border-primary/20 text-sm text-foreground/70">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span><strong className="text-foreground">Fast Professional Follow-Up.</strong> Our team reviews all serious inquiries and responds promptly to qualified opportunities.</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" variant="cta" size="lg" className="flex-1 group">
                Submit Inquiry
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button type="button" variant="outlineRed" size="lg" className="flex-1" asChild>
                Book Consultation
              </Button>
              <Button type="button" variant="outline" size="lg" className="flex-1" asChild>
                Request Demonstration
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
