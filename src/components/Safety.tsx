import { ShieldCheck, Eye, AlertOctagon, DoorOpen, ServerOff } from "lucide-react";

const safetyItems = [
  {
    icon: Eye,
    title: "Smart Person-Detection",
    desc: "Onboard sensors continuously verify safe positioning throughout the bathing cycle, automatically adjusting flow and pressure.",
  },
  {
    icon: AlertOctagon,
    title: "Multiple Emergency Stops",
    desc: "Tactile, easy-reach emergency-stop controls placed at every angle — instantly halting the cycle and draining water.",
  },
  {
    icon: DoorOpen,
    title: "No-Lock Door System",
    desc: "Doors never lock during operation. Caregivers and residents can always open the unit at a moment's notice.",
  },
  {
    icon: ServerOff,
    title: "Local Data Processing",
    desc: "All sensor data is processed on-device. Nothing is uploaded, streamed, or stored — guaranteeing full user privacy.",
  },
];

export const Safety = () => {
  return (
    <section id="safety" className="py-24 lg:py-32 bg-surface-clinical relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
              02 / Safety & Privacy First
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Engineered to{" "}
              <span className="text-primary">protect</span>{" "}
              every moment.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Safety isn't a feature — it's the foundation. Clean Box is designed
              from the ground up to keep residents safe and their privacy absolute.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 px-5 py-4 rounded-xl bg-white border border-border shadow-soft">
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
                className="p-6 rounded-2xl bg-white border border-border shadow-soft hover:shadow-card transition-shadow"
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
