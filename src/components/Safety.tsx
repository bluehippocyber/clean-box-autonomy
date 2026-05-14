import { ShieldCheck, Eye, AlertOctagon, DoorOpen, ServerOff } from "lucide-react";

const safetyItems = [
  {
    icon: Eye,
    title: "On-Device Person-Detection AI",
    desc: "Edge-processed sensors continuously verify safe positioning, automatically adjusting flow, pressure and temperature throughout the cycle.",
  },
  {
    icon: AlertOctagon,
    title: "Multiple Physical Emergency Stops",
    desc: "Tactile, easy-reach E-stop controls placed at every angle — instantly halt the cycle, drain the system and unseal access.",
  },
  {
    icon: DoorOpen,
    title: "Non-Locking Safety Entry",
    desc: "Doors never lock during operation. Caregivers and residents can always open the unit at a moment's notice — no override required.",
  },
  {
    icon: ServerOff,
    title: "Local-Only Data Processing",
    desc: "All AI inference runs on the Edge. No video, biometric or sensor data is ever transmitted, streamed or stored in the cloud.",
  },
];

export const Safety = () => {
  return (
    <section id="safety" className="py-24 lg:py-32 bg-surface-clinical relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
              02 / Hippo-Shield Privacy Protocol
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Offensive-grade{" "}
              <span className="text-primary">defense</span>{" "}
              for every moment.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              100% on-device privacy. Our Person-Detection AI processes all data
              locally on the Edge — no video or biometric data is ever transmitted to the cloud.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-5 py-4 rounded-xl bg-card border border-border shadow-soft">
              <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">100% On-Device Privacy</div>
                <div className="text-xs text-muted-foreground">No cloud uploads. No cameras. Ever.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {safetyItems.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
