import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Building2, User, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const steps = [
  { icon: Building2, title: "Facility", desc: "Tell us about your organization" },
  { icon: ClipboardList, title: "Needs", desc: "Help us tailor the right solution" },
  { icon: User, title: "Contact", desc: "How should we reach you?" },
];

export const Contact = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    facilityName: "",
    facilityType: "skilled-nursing",
    units: "1-5",
    interest: "consultation",
    timeline: "asap",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const update = (k: string, v: string) => setData((p) => ({ ...p, [k]: v }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    if (!data.name || !data.email) {
      toast.error("Please complete all required fields.");
      return;
    }
    toast.success("Request received. Terrance King will be in touch within 24 hours.");
    setStep(0);
    setData({
      facilityName: "", facilityType: "skilled-nursing", units: "1-5", interest: "consultation",
      timeline: "asap", name: "", email: "", phone: "", notes: "",
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-clinical">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
            04 / Direct Contact Portal
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Schedule a consultation with{" "}
            <span className="text-primary">Terrance King.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Request technical specs, pricing, or a private walkthrough of the Clean Box system.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-border shadow-elevated overflow-hidden">
          <div className="grid grid-cols-3 border-b border-border">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`p-5 flex items-center gap-3 border-r last:border-r-0 border-border transition-colors ${
                  i === step ? "bg-primary-soft" : "bg-secondary/40"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < step ? <Check className="w-4 h-4" /> : <s.icon className="w-4 h-4" />}
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground">{s.title}</div>
                  <div className="text-[11px] text-muted-foreground">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 lg:p-10">
            {step === 0 && (
              <div className="space-y-5 animate-fade-up">
                <Field label="Facility Name *">
                  <Input value={data.facilityName} onChange={(e) => update("facilityName", e.target.value)} placeholder="Sunrise Senior Living" />
                </Field>
                <Field label="Facility Type">
                  <RadioGroup value={data.facilityType} onValueChange={(v) => update("facilityType", v)} className="grid sm:grid-cols-2 gap-3">
                    {["skilled-nursing", "hospital", "rehab", "private-residence"].map((t) => (
                      <label key={t} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${data.facilityType === t ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"}`}>
                        <RadioGroupItem value={t} />
                        <span className="text-sm capitalize">{t.replace("-", " ")}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </Field>
                <Field label="Unit Requirement">
                  <RadioGroup value={data.units} onValueChange={(v) => update("units", v)} className="grid grid-cols-3 gap-3">
                    {[
                      { v: "1-5", l: "1 – 5 units" },
                      { v: "10-25", l: "10 – 25 units" },
                      { v: "50+", l: "50+ fleet" },
                    ].map((o) => (
                      <label key={o.v} className={`flex items-center justify-center text-center p-3 rounded-lg border cursor-pointer text-sm transition-colors ${data.units === o.v ? "border-primary bg-primary-soft text-primary-deep font-semibold" : "border-border hover:border-primary/40"}`}>
                        <RadioGroupItem value={o.v} className="sr-only" />
                        {o.l}
                      </label>
                    ))}
                  </RadioGroup>
                </Field>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5 animate-fade-up">
                <Field label="What are you looking for?">
                  <RadioGroup value={data.interest} onValueChange={(v) => update("interest", v)} className="space-y-3">
                    {[
                      { v: "consultation", l: "Schedule a consultation" },
                      { v: "specs", l: "Technical specifications" },
                      { v: "quote", l: "Commercial pricing & quote" },
                      { v: "demo", l: "On-site demonstration" },
                    ].map((o) => (
                      <label key={o.v} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${data.interest === o.v ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"}`}>
                        <RadioGroupItem value={o.v} />
                        <span className="text-sm font-medium">{o.l}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </Field>
                <Field label="Installation Timeline">
                  <RadioGroup value={data.timeline} onValueChange={(v) => update("timeline", v)} className="grid grid-cols-3 gap-3">
                    {[
                      { v: "asap", l: "ASAP" },
                      { v: "6-12", l: "6 – 12 months" },
                      { v: "exploring", l: "Exploring" },
                    ].map((o) => (
                      <label key={o.v} className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer text-sm transition-colors ${data.timeline === o.v ? "border-primary bg-primary-soft text-primary-deep font-semibold" : "border-border hover:border-primary/40"}`}>
                        <RadioGroupItem value={o.v} className="sr-only" />
                        {o.l}
                      </label>
                    ))}
                  </RadioGroup>
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 animate-fade-up">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *">
                    <Input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
                  </Field>
                  <Field label="Phone">
                    <Input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 123-4567" />
                  </Field>
                </div>
                <Field label="Work Email *">
                  <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@facility.com" />
                </Field>
                <Field label="Anything else we should know?">
                  <Textarea value={data.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Specific questions, timeline notes, etc." rows={4} />
                </Field>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between gap-4">
              <Button variant="ghost" onClick={prev} disabled={step === 0}>
                <ArrowLeft /> Back
              </Button>
              {step < steps.length - 1 ? (
                <Button variant="cta" onClick={next}>
                  Continue <ArrowRight />
                </Button>
              ) : (
                <Button variant="cta" onClick={submit}>
                  Submit Request <Check />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <Label className="text-sm font-semibold text-foreground mb-2 block">{label}</Label>
    {children}
  </div>
);
