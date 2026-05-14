import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Building2, Home, Heart, Shield, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    icon: Building2,
    title: "Healthcare & Senior Care",
    markets: ["Nursing Homes", "Assisted Living Communities", "Hospitals", "Rehabilitation Centers"],
    value: "Reduce caregiver strain, improve resident experience, and modernize bathing operations at scale.",
  },
  {
    icon: Home,
    title: "Home Care & Aging in Place",
    markets: ["Private Homes", "Home Healthcare Providers", "Family Caregiving Environments"],
    value: "Support independence and safer hygiene routines for individuals who wish to remain at home.",
  },
  {
    icon: Heart,
    title: "Disability & Adaptive Care",
    markets: ["Disability Support Organizations", "Adaptive Living Centers", "Long-Term Mobility Care"],
    value: "Provide dignified bathing solutions for users with mobility and accessibility needs.",
  },
  {
    icon: Shield,
    title: "Government & Institutional Care",
    markets: ["Veterans Facilities", "Public Care Systems", "Secure Residential Facilities", "Institutional Rehabilitation Programs"],
    value: "Improve hygiene access while supporting operational efficiency and duty of care.",
  },
  {
    icon: Sparkles,
    title: "Hospitality & Wellness",
    markets: ["Luxury Wellness Resorts", "Recovery Spas", "Executive Retreats", "Medical Tourism Destinations"],
    value: "Offer a futuristic premium bathing experience that differentiates guest services.",
  },
  {
    icon: Globe,
    title: "Strategic Distribution",
    markets: ["International Distributors", "Facility Equipment Suppliers", "Government Procurement Channels", "Franchise / Licensing Opportunities"],
    value: "Expand Clean Box into new markets through strategic distribution partnerships worldwide.",
  },
];

const Industries = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/");
    setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 120);
  };
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">

        {/* Hero */}
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-soft overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="container relative max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-6">Industries Served</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-foreground">
              One Innovation.{" "}
              <span className="text-primary">Multiple High-Value Markets.</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Clean Box technology is built to solve bathing challenges across industries where safety, dignity, hygiene, and efficiency matter most.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map(({ icon: Icon, title, markets, value }) => (
                <div key={title} className="group p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 hover:shadow-elevated hover:bg-white transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-5 group-hover:bg-primary group-hover:border-primary transition-colors">
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
                  <ul className="space-y-1 mb-4">
                    {markets.map((m) => (
                      <li key={m} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-foreground/70 leading-relaxed border-t border-border pt-4 mt-4">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="container max-w-4xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Why It Matters</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Not one market. A platform.
            </h2>
            <p className="text-xl text-background/75 leading-relaxed mb-6">
              Clean Box is not limited to one customer profile. It is a platform technology with broad demand potential wherever bathing safety, hygiene, or staffing challenges exist.
            </p>
            <p className="text-lg text-background/55 leading-relaxed">
              From skilled nursing facilities managing 80 residents per day to luxury wellness resorts offering a premium guest experience — Clean Box delivers the same core promise: dignity, safety, and efficiency, adapted to the environment.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-surface-clinical">
          <div className="container max-w-3xl text-center">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">Explore Partnership Opportunities</div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
              Your market. Our technology.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you're a healthcare operator, government procurement officer, international distributor, or wellness innovator — let's explore what Clean Box can do in your environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" onClick={goToContact} className="group cursor-pointer">
                Request Industry Consultation
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outlineRed" size="xl" onClick={goToContact} className="cursor-pointer">
                Become a Distributor
              </Button>
              <Button variant="outline" size="xl" onClick={goToContact} className="cursor-pointer">
                Commercial Buyer Inquiry
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Industries;
