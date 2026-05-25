import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

const POSTS = [
  {
    id: 2117,
    date: "January 15, 2025",
    title: "Overcoming Bathing Challenges for CNAs and Nurses: How Automation Can Help",
    excerpt: "Bathing patients is a fundamental yet challenging aspect of caregiving that Certified Nursing Assistants (CNAs) and nurses face daily. Providing this essential care requires balancing safety, dignity, and comfort, but the process is often fraught with difficulty.",
    link: "https://cleanboxent.com/overcoming-bathing-challenges-for-cnas-and-nurses-how-automation-can-help/",
    tag: "Workforce",
  },
  {
    id: 2105,
    date: "November 16, 2023",
    title: "The Empowerment of Autonomy and Privacy: Fully Autonomous Baths Redefining Personal Hygiene",
    excerpt: "In the journey of life, the essence of autonomy and privacy holds an invaluable place, particularly when it comes to personal hygiene. For individuals experiencing functional loss, the quest for autonomy in personal care becomes paramount.",
    link: "https://cleanboxent.com/the-empowerment-of-autonomy-and-privacy-fully-autonomous-baths-redefining-personal-hygiene/",
    tag: "Dignity & Privacy",
  },
  {
    id: 2098,
    date: "October 23, 2023",
    title: "Empowering Healthcare Workers: The Transformative Impact of Fully Autonomous Baths in Preventing Musculoskeletal Disorders",
    excerpt: "Healthcare workers are the unsung heroes of our society, providing care and comfort to those in need. Yet, this noble profession carries a heavy burden in the form of musculoskeletal disorders (MSDs).",
    link: "https://cleanboxent.com/empowering-healthcare-workers-the-transformative-impact-of-fully-autonomous-baths-in-preventing-musculoskeletal-disorders/",
    tag: "Worker Safety",
  },
  {
    id: 2049,
    date: "October 8, 2023",
    title: "Bathing Safely: How Fully Autonomous Baths Protect Against Slip and Fall Incidents",
    excerpt: "For many, a bath carries an unforeseen danger — the risk of slipping and falling. This peril becomes especially pronounced for the elderly and disabled, who face the brunt of fall-related injuries.",
    link: "https://cleanboxent.com/bathing-safely-how-fully-autonomous-baths-protect-against-slip-and-fall-incidents/",
    tag: "Safety",
  },
  {
    id: 2035,
    date: "September 30, 2023",
    title: "Revolutionizing Healthcare: Fully Automatic Bathing Machines and the Fight Against Nosocomial Infections",
    excerpt: "In the realm of healthcare, the battle against nosocomial infections — also known as healthcare-associated infections — is an ongoing challenge bringing significant risks and burdens to patients worldwide.",
    link: "https://cleanboxent.com/revolutionizing-healthcare-fully-automatic-bathing-machines-and-the-fight-against-nosocomial-infections/",
    tag: "Infection Control",
  },
  {
    id: 2022,
    date: "September 15, 2023",
    title: "Nurturing Skin Health: Aromatherapy Dryer System in Fully Autonomous Bathing Machines",
    excerpt: "As we age, the skin becomes more susceptible to dryness due to environmental factors, making it crucial for elderly individuals to prioritize skincare. Autonomous bathing technology is redefining this care.",
    link: "https://cleanboxent.com/nurturing-skin-health-aromatherapy-dryer-system-in-fully-autonomous-bathing-machines/",
    tag: "Wellness",
  },
  {
    id: 2008,
    date: "August 29, 2023",
    title: "Unleashing Wellness: The Transformative Physical and Mental Health Benefits of Fully Automatic Bathing",
    excerpt: "In a fast-paced world, self-care takes on a whole new level of importance, especially for the elderly and disabled. Embracing fully autonomous baths unlocks a realm of physical and mental health benefits.",
    link: "https://cleanboxent.com/unleashing-wellness-the-transformative-physical-and-mental-health-benefits-of-fully-autonomous-baths/",
    tag: "Wellness",
  },
  {
    id: 1970,
    date: "August 15, 2023",
    title: "Beyond Limitations: Embracing Fully Autonomous Bathing over Traditional Assistive Living Tubs",
    excerpt: "In the pursuit of providing accessible bathing solutions for the elderly and disabled, the world of assistive living tubs has seen significant advancements — but fully autonomous bathing goes further.",
    link: "https://cleanboxent.com/beyond-limitations-embracing-fully-autonomous-bathing-over-traditional-assistive-living-tubs/",
    tag: "Innovation",
  },
  {
    id: 1050,
    date: "August 3, 2023",
    title: "Embracing Independence: Unraveling the Wonders of Fully Autonomous Bathing",
    excerpt: "In a time where technology is reforming every aspect of our lives, the realm of personal care has not been left untouched. Fully autonomous bathing is redefining the way we approach self-care and independence.",
    link: "https://cleanboxent.com/embracing-independence-unraveling-the-wonders-of-fully-autonomous-bathing/",
    tag: "Innovation",
  },
];

const TAG_COLORS: Record<string, string> = {
  "Workforce": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Dignity & Privacy": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Worker Safety": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Safety": "bg-red-500/10 text-red-400 border-red-500/20",
  "Infection Control": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Wellness": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Innovation": "bg-primary/10 text-primary border-primary/20",
};

export default function Blog() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-background border-b border-white/5">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4">
              Clean Box Journal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Insights on autonomous<br />
              <span className="text-primary">care technology.</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Research, perspectives, and innovations shaping the future of dignified personal care for the elderly, disabled, and healthcare facilities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground/40 mb-6">
            Latest Article
          </div>
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${TAG_COLORS[featured.tag]}`}>
                    {featured.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-foreground/40">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed max-w-2xl">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Post Grid */}
      <section className="pb-24 bg-background">
        <div className="container">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground/40 mb-6">
            All Articles
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${TAG_COLORS[post.tag]}`}>
                    {post.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-xs text-foreground/40">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary">Stay Informed</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to see Clean Box in action?</h2>
          <p className="text-background/60 mb-8 max-w-xl mx-auto">
            Reserve your spot at a private showcase and experience the technology behind the research.
          </p>
          <a
            href="/#showcase"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Reserve Showcase Access <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
