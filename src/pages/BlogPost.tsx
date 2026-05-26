import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Section {
  heading?: string;
  body: string;
}

interface Post {
  slug: string;
  title: string;
  date: string;
  tag: string;
  intro: string;
  sections: Section[];
  closing: string;
}

const POSTS: Post[] = [
  {
    slug: "overcoming-bathing-challenges",
    title: "Overcoming Bathing Challenges for CNAs and Nurses: How Automation Can Help",
    date: "January 15, 2025",
    tag: "Workforce",
    intro: "Bathing patients is a fundamental yet challenging aspect of caregiving that Certified Nursing Assistants (CNAs) and nurses face daily. Providing this essential care requires balancing safety, dignity, and comfort — but the process is often fraught with difficulties. From mobility issues to cognitive impairments, bathing can become a daunting task for caregivers and patients alike.",
    sections: [
      { heading: "Common Challenges in Patient Bathing", body: "Caring for patients with varying needs presents unique obstacles. Patients with limited mobility often require significant physical assistance to transfer safely, leading to caregiver strain and increased accident risk. Patients with dementia or cognitive challenges may resist bathing, feel confused, or become agitated. Fragile or sensitive skin common in elderly patients demands careful handling to avoid irritation. And the time pressure of managing multiple patients means bathing often becomes rushed — compromising quality of care for everyone involved." },
      { heading: "1. Mobility Limitations", body: "Patients with limited mobility often require significant assistance to transfer safely into a bathtub or shower. This can lead to physical strain for caregivers and increase the risk of accidents for both parties. Manual transfers are one of the leading causes of workplace injuries among nursing staff." },
      { heading: "2. Cognitive Impairments", body: "Patients with dementia or other cognitive challenges may resist bathing, feel confused about the process, or become agitated — making it harder to complete the task smoothly while preserving the patient's dignity. This requires both patience and skill from caregivers who may be managing multiple patients simultaneously." },
      { heading: "3. Skin Sensitivities", body: "Fragile skin, common in elderly patients or those with conditions like eczema or psoriasis, requires careful and gentle handling. Traditional bathing methods can sometimes cause irritation, abrasions, or discomfort that compromise patient health and comfort." },
      { heading: "How CleanBox Helps", body: "The CleanBox fully autonomous bathing system is engineered to address these exact challenges. Designed with both patient comfort and caregiver safety in mind, it transforms the bathing experience through automation, smart design, and thoughtful engineering." },
      { heading: "Slip-and-Fall Prevention", body: "Non-slip surfaces and strategically designed safety features ensure that patients are securely seated throughout the entire bathing process — dramatically reducing the risk of accidents and giving both patients and caregivers genuine peace of mind." },
      { heading: "Accessible Seating", body: "The machine's ergonomic seating allows for effortless patient transfer, minimizing caregiver strain and increasing accessibility for those with mobility challenges. The threshold-free design means no dangerous steps or lifts." },
      { heading: "Automated Scrubbing", body: "Built-in scrubbers gently clean the body — including hard-to-reach areas — with adjustable pressure to accommodate fragile skin. This eliminates the need for caregivers to manually scrub patients, reducing both strain and the potential for skin injury." },
      { heading: "Automated Drying", body: "After bathing, an integrated drying system ensures patients are quickly and thoroughly dried, reducing the risk of chills or skin irritation. No manual towel drying required — the system handles everything automatically." },
    ],
    closing: "By removing the physical demands of traditional patient bathing, CleanBox empowers CNAs and nurses to focus on what truly matters: providing compassionate, high-quality care. The result is a safer environment for caregivers, a more dignified experience for patients, and a more efficient care facility overall.",
  },
  {
    slug: "autonomy-and-privacy",
    title: "The Empowerment of Autonomy and Privacy: Fully Autonomous Baths Redefining Personal Hygiene",
    date: "November 16, 2023",
    tag: "Dignity & Privacy",
    intro: "In the journey of life, the essence of autonomy and privacy holds an invaluable place — particularly when it comes to personal hygiene. For individuals experiencing functional loss, the quest for autonomy in personal care becomes paramount. Recent studies reveal a compelling insight: people with functional limitations favor robotic bathing systems precisely because they preserve autonomy and privacy in ways traditional assisted bathing cannot.",
    sections: [
      { heading: "Why Autonomy Matters", body: "For many individuals — especially those aging or living with disability — losing the ability to bathe independently is one of the most psychologically difficult aspects of functional decline. It represents a loss of privacy, self-determination, and dignity. Traditional caregiver-assisted bathing, while well-intentioned, requires another person to be physically present for one of the most intimate acts of daily life. The CleanBox system was built to change that equation entirely." },
      { heading: "Features That Restore Independence", body: "CleanBox combines easy accessibility, autonomous body scrubbing, therapeutic water jets, automated super-powered drying, and slip-resistant surfaces into a single seamlessly integrated experience. The user initiates the process, the machine handles everything else — no caregiver required in the room. This simple shift in dynamic restores an immense sense of personal agency." },
      { heading: "The Role of Privacy in Dignity", body: "Privacy during bathing is not a luxury — it is a fundamental human need. When individuals can bathe without another person present, they report significantly higher satisfaction with their care experience, reduced feelings of shame or helplessness, and improved overall emotional well-being." },
      { heading: "Nurturing the Human Connection", body: "While technology fosters autonomy and privacy, the human elements of caregiving remain irreplaceable. Professional caregivers bring communication, compassion, health monitoring, and emotional connection that machines cannot replicate. Fully autonomous baths free caregivers from physically demanding tasks so they can devote more attention to the relational aspects of care that matter most." },
      { heading: "Technology and Care", body: "Fully autonomous baths represent a fusion of technology and empathy. They offer users the choice and privacy they seek while allowing caregivers to focus on building meaningful relationships with the people they serve." },
    ],
    closing: "In redefining personal hygiene through autonomy and privacy, fully autonomous baths do not just clean the body — they restore the human spirit. They affirm that regardless of age, ability, or circumstance, every person deserves to experience bathing as a private, dignified, and self-directed act.",
  },
  {
    slug: "empowering-healthcare-workers",
    title: "Empowering Healthcare Workers: Fully Autonomous Baths in Preventing Musculoskeletal Disorders",
    date: "October 23, 2023",
    tag: "Worker Safety",
    intro: "Healthcare workers are the backbone of our care system — but the physical demands of their work exact a serious toll. In 2017, nursing assistants faced musculoskeletal disorder (MSD) rates more than five times the national average. These injuries result from the strenuous, repetitive patient-handling tasks that healthcare workers perform daily. Fully autonomous bathing technology offers a transformative path forward.",
    sections: [
      { heading: "The Physical Burden of Patient Bathing", body: "Manually bathing patients requires caregivers to lift, transfer, position, and scrub — often with poor ergonomic conditions and little mechanical assistance. Over time, these repetitive movements cause cumulative damage to the back, shoulders, neck, and knees. Musculoskeletal disorders are the most common occupational injuries in healthcare, leading to sick leave, reduced productivity, and in many cases, permanent disability." },
      { heading: "The Scale of the Problem", body: "Nursing assistants experience MSDs at rates far exceeding those in physically demanding industries like construction and manufacturing. This is not a minor workforce issue — it is a systemic crisis that drives caregiver burnout, high turnover rates, and significant costs to healthcare facilities. Addressing it requires not just better training but fundamentally different tools." },
      { heading: "How Autonomous Bathing Protects Workers", body: "The CleanBox system eliminates the most physically demanding aspects of patient bathing. With easy patient accessibility, autonomous body scrubbing, therapeutic water jets, and automated super-powered drying, caregivers no longer need to lift, position, or manually clean patients during bathing. The physical burden is absorbed by the machine — not the human body." },
      { heading: "Universal Benefits", body: "For healthcare workers, CleanBox provides relief from the physical toll of patient handling. For elderly and disabled individuals, it offers independence and dignity. For facilities, it reduces workers comp claims, sick days, and staff turnover — delivering measurable operational savings alongside improved care outcomes." },
      { heading: "A Commitment to Those Who Care", body: "Fully autonomous bathing technology reflects a deeper value: that those who dedicate their lives to caring for others deserve to be protected. Every facility that deploys autonomous bathing sends a clear message to its staff: your health and safety matter." },
    ],
    closing: "Fully autonomous baths transform the occupational health landscape for the healthcare workers who need it most. By removing the physical demands of manual patient bathing, CleanBox helps ensure that the people who care for others can sustain that care for years to come.",
  },
  {
    slug: "bathing-safely",
    title: "Bathing Safely: How Fully Autonomous Baths Protect Against Slip and Fall Incidents",
    date: "October 8, 2023",
    tag: "Safety",
    intro: "In the United States alone, falls are the leading cause of injury among adults aged 65 and older, resulting in millions of emergency department visits, hospitalizations, and fatalities each year. For many, the bathroom is the most dangerous room in the home. Fully autonomous bathing technology addresses this crisis directly.",
    sections: [
      { heading: "The Scope of the Fall Risk Problem", body: "Fall-related injuries during bathing are disproportionately severe. Wet surfaces, the need to step over tub walls, and the physical effort of self-cleaning create conditions where a single misstep can result in hip fractures, head injuries, or worse. For elderly and disabled individuals, a fall during bathing is not just a medical event — it is often a turning point that accelerates functional decline and loss of independence." },
      { heading: "Traditional Solutions Fall Short", body: "Grab bars, non-slip mats, and walk-in tubs help at the margins but do not address the root problem. Even walk-in tubs require users to step over a threshold and wait for the tub to drain before exiting — creating vulnerability at both entry and exit." },
      { heading: "How CleanBox Eliminates the Risk", body: "The CleanBox system is designed from the ground up with fall prevention as a core engineering priority. The threshold-free entry eliminates the step that causes most tub-related falls. Secure, ergonomically designed seating ensures the user is safely positioned throughout — no standing, no balancing, no reaching." },
      { heading: "Automated Drying: The Often-Overlooked Risk", body: "One of the most dangerous moments during bathing is immediately after — when users must dry themselves while still wet on a slippery surface. CleanBox integrated super-powered drying system ensures users are completely dried before they exit, eliminating this critical risk window entirely." },
      { heading: "Peace of Mind for Families and Facilities", body: "Fully autonomous bathing technology provides documented, systematic fall prevention — not just a recommendation, but an engineered solution that works every single time. For care facilities, fall incidents carry significant liability. CleanBox eliminates that risk." },
    ],
    closing: "Safety and dignity are not competing values in bathing care — they are inseparable. When individuals can bathe without fear of falling, they engage in self-care more willingly, more frequently, and with greater wellbeing. CleanBox makes genuinely safe bathing accessible to everyone who needs it.",
  },
  {
    slug: "infection-control",
    title: "Revolutionizing Healthcare: Fully Automatic Bathing Machines and the Fight Against Nosocomial Infections",
    date: "September 30, 2023",
    tag: "Infection Control",
    intro: "Nosocomial infections — healthcare-associated infections (HAIs) — account for 7% of infections in developed countries and 10% in developing nations. Beyond the physical burden, HAIs lead to prolonged hospital stays, disability, and enormous economic costs. Fully autonomous bathing technology offers a powerful and underutilized tool in this fight.",
    sections: [
      { heading: "What Are HAIs?", body: "HAIs include central line-associated bloodstream infections, catheter-associated urinary tract infections, surgical site infections, and ventilator-associated pneumonia. They develop in patients during healthcare treatment — when immune systems are already compromised. Inadequate hygiene practices are a primary transmission vector for many of these infections." },
      { heading: "The Role of Bathing in Infection Prevention", body: "Thorough, consistent patient bathing is one of the most effective infection control measures available — yet one of the most inconsistently implemented. Manual bathing is time-consuming and dependent on individual caregiver technique. Automated bathing removes this variability entirely, delivering the same standardized, thorough clean every time." },
      { heading: "CleanBox Infection Control Design", body: "The CleanBox system incorporates 24 precision shower jets, antibacterial soap delivery, and replaceable microfiber cleaning brushes — engineered to deliver comprehensive, hygienic cleaning of the entire body surface. The automated process ensures no areas are missed, no pressure is inconsistent, and no cross-contamination occurs between patients." },
      { heading: "Standardization as a Clinical Tool", body: "In clinical settings, standardization saves lives. When bathing outcomes are predictable and consistent, infection control teams can measure, audit, and improve hygiene protocols with confidence. Autonomous bathing creates a documented, reproducible bathing event — a significant upgrade from the inherent variability of manual bathing." },
      { heading: "Broader Impact on Healthcare Systems", body: "Reducing HAI rates translates directly to shorter hospital stays, lower costs, better patient outcomes, and reduced liability for healthcare facilities. Infection prevention through better hygiene technology is one of the highest-return investments available in modern healthcare." },
    ],
    closing: "The fight against healthcare-associated infections is fought on many fronts. Fully autonomous bathing technology opens a new front — one where consistent, thorough, standardized hygiene becomes a reliable component of every patient care protocol. CleanBox is built to win that fight.",
  },
  {
    slug: "skin-health-aromatherapy",
    title: "Nurturing Skin Health: Aromatherapy Dryer System in Fully Autonomous Bathing Machines",
    date: "September 15, 2023",
    tag: "Wellness",
    intro: "As we age, our skin becomes more susceptible to dryness, irritation, and environmental damage. For elderly individuals, dry skin is not merely a cosmetic concern — it affects physical comfort, infection vulnerability, and psychological well-being. The aromatherapy dryer system integrated into CleanBox addresses these concerns with a holistic, science-informed approach to skin health.",
    sections: [
      { heading: "The Reality of Aging Skin", body: "Aging skin produces less natural oil, loses elasticity, and becomes thinner and more fragile over time. Medical conditions like diabetes and kidney disease, as well as common medications including diuretics and statins, can further exacerbate skin dryness. Traditional post-bath towel drying can be abrasive on fragile skin, and incomplete drying can leave moisture trapped in skin folds — creating conditions for fungal infections." },
      { heading: "Conventional Drying Limitations", body: "Standard towel drying requires physical effort, can cause micro-abrasions on delicate skin, and often leaves areas like under the arms, between the toes, and skin folds inadequately dried. For individuals with limited mobility, thoroughly drying hard-to-reach areas is genuinely challenging without assistance." },
      { heading: "The Aromatherapy Dryer System", body: "CleanBox integrated aromatherapy dryer system provides gentle, thorough drying through warm air infused with skin-nourishing elements. The system envelops the user in a carefully controlled air flow that dries all body surfaces evenly — including areas that are typically difficult to reach manually. The aromatherapy component introduces therapeutic scents that promote relaxation and stress relief." },
      { heading: "Skin Hydration and Oxygen Delivery", body: "Beyond surface drying, the system supports increased oxygen delivery to skin cells — a key element of skin rejuvenation and healing. The warm air treatment helps open pores and promote circulation, contributing to healthier, more resilient skin over time. Each bathing session becomes a therapeutic intervention, not merely a cleansing routine." },
      { heading: "Holistic Well-Being", body: "The sensory experience of the aromatherapy dryer — warm air, soothing scents, physical comfort — triggers relaxation responses that reduce cortisol levels and promote emotional calm. For elderly individuals in care settings where sensory comfort is often undervalued, this dimension of the bathing experience is genuinely transformative." },
    ],
    closing: "Skin health is not separate from overall health — it is a window into it. By integrating an aromatherapy dryer system that nurtures skin while promoting relaxation, CleanBox transforms bathing from a functional necessity into a holistic wellness ritual that benefits both body and mind.",
  },
  {
    slug: "unleashing-wellness",
    title: "Unleashing Wellness: The Transformative Physical and Mental Health Benefits of Fully Autonomous Bathing",
    date: "August 29, 2023",
    tag: "Wellness",
    intro: "In a fast-paced world, self-care has never been more important — and never more difficult for those with physical limitations to access independently. Fully autonomous bathing technology unlocks a full spectrum of physical and mental health benefits that extend far beyond clean skin. CleanBox transforms the daily bath into a comprehensive wellness experience.",
    sections: [
      { heading: "Physical Rejuvenation", body: "The physical benefits of thorough, consistent bathing extend far beyond hygiene. Regular scrubbing removes dead skin cells, stimulates circulation, and promotes lymphatic drainage. With CleanBox automated scrub system, these benefits are delivered consistently every time — without depending on the user physical ability or caregiver technique. Improved circulation supports better sleep, faster healing, and greater physical vitality." },
      { heading: "Therapeutic Water Jets", body: "Water jet therapy has well-documented benefits for musculoskeletal health. Targeted water pressure stimulates muscle tissue, reduces joint stiffness, and relieves chronic pain — particularly in conditions like arthritis prevalent in the elderly population. CleanBox water jet system delivers these therapeutic benefits as a standard part of every bathing session." },
      { heading: "Mental Health Benefits", body: "Bathing has profound effects on mental health that are frequently underestimated. The warmth, sensory comfort, and privacy of a good bath reduce cortisol levels, decrease anxiety, and promote the release of oxytocin. For individuals in care settings who experience limited sensory comfort and reduced autonomy, a high-quality bathing experience can be one of the most meaningful moments of their day." },
      { heading: "Time Efficiency Without Compromise", body: "Fully autonomous bathing completes a comprehensive cleaning, scrubbing, and drying cycle in significantly less time than traditional manual bathing — without any compromise in thoroughness or comfort. For care facilities managing multiple residents, this time efficiency translates to improved scheduling and more consistent care delivery." },
      { heading: "Sustainable Wellness", body: "CleanBox is engineered with water conservation in mind. Precise water delivery through targeted jets reduces water consumption compared to traditional bathing methods — making each session not only personally beneficial but environmentally responsible." },
    ],
    closing: "Fully autonomous baths embody a holistic approach to personal well-being. They make therapeutic, dignified, and thorough bathing accessible to everyone — regardless of age or ability — and in doing so, elevate the standard of care from functional minimum to genuine wellness.",
  },
  {
    slug: "beyond-limitations",
    title: "Beyond Limitations: Embracing Fully Autonomous Bathing Over Traditional Assistive Living Tubs",
    date: "August 15, 2023",
    tag: "Innovation",
    intro: "The world of assistive bathing has long been dominated by walk-in tubs, roll-in tubs, and various adaptations of traditional bath designs. While these products represent genuine attempts to improve accessibility, they carry significant limitations that fully autonomous bathing technology has been designed to transcend.",
    sections: [
      { heading: "The Reality of Traditional Options", body: "Walk-in tubs require users to step over a threshold — a genuine hazard for those with balance or mobility impairments. Users must enter the tub before it fills and remain inside while it drains after bathing. Roll-in showers require caregiver assistance for cleaning, negating much of the accessibility benefit. Throughout, the user remains exposed, dependent, and cold." },
      { heading: "The Threshold Problem", body: "The most dangerous moment in traditional assistive bathing is entry and exit. Even a low threshold represents a fall risk for individuals with weak legs, poor balance, or cognitive impairment. Walk-in tubs that require water to drain before exit leave users sitting in a cooling tub — uncomfortable, vulnerable, and waiting. These design limitations are fundamental failures for the population these products claim to serve." },
      { heading: "Dependency and Dignity", body: "Traditional assistive solutions typically still require caregiver assistance for the actual cleaning process. The fundamental problem — that another person must be physically present and involved in intimate personal care — remains unresolved." },
      { heading: "How Fully Autonomous Bathing Changes Everything", body: "CleanBox fully autonomous system eliminates the threshold entirely with a flat-entry design. The user is safely and comfortably seated from start to finish. The machine handles scrubbing, rinsing, and drying — with no caregiver required in the room. Safety and peace of mind are built into the machine operation, not dependent on individual caregiver diligence." },
      { heading: "Independence as the Standard", body: "Fully autonomous bathing makes independence the default experience — not a special accommodation. When safety, comfort, privacy, and thorough cleaning are all delivered by the system itself, the user physical limitations cease to be barriers to excellent personal hygiene." },
    ],
    closing: "Traditional assistive living tubs were well-meaning solutions to a real problem — but they were designed within the constraints of the old paradigm. CleanBox was built outside those constraints entirely. The result is a bathing experience that goes beyond what any assistive tub can offer, delivering real independence, real dignity, and real safety for everyone.",
  },
  {
    slug: "embracing-independence",
    title: "Embracing Independence: Unraveling the Wonders of Fully Autonomous Bathing",
    date: "August 3, 2023",
    tag: "Innovation",
    intro: "Fully autonomous bathing is not an incremental improvement on existing solutions — it is the apotheosis of cutting-edge technology, compassion, and state-of-the-art design. It represents a revolutionary approach to self-care that empowers individuals to experience thorough, dignified bathing with minimal human intervention.",
    sections: [
      { heading: "Understanding Fully Autonomous Bathing", body: "At its core, fully autonomous bathing is a self-care system designed to require minimal human intervention. Advanced PLC programming and smart sensors work together to create an independent and customizable bathing experience unlike anything previously available. The system reads user preferences, adapts to individual needs, and executes a complete bathing cycle — scrubbing, rinsing, and drying — with precision and consistency." },
      { heading: "The Technology Behind the Experience", body: "CleanBox deploys precision-engineered water jets positioned to ensure comprehensive coverage of the human body. Automated microfiber scrubbing elements provide thorough skin cleansing without abrasion. Smart temperature control maintains water at the user preferred setting throughout the session. The integrated drying system uses controlled warm air to ensure complete, comfortable drying before the user exits." },
      { heading: "Who Benefits", body: "The reach of autonomous bathing technology extends across demographics. For elderly individuals, it restores the independence and privacy of personal hygiene that aging had taken away. For people with disabilities, it removes physical barriers that made traditional bathing inaccessible or unsafe. For busy caregivers and healthcare facilities, it reduces workload and improves care consistency." },
      { heading: "The Future of Personal Care", body: "Fully autonomous bathing represents not just a product but a paradigm shift in how we think about personal hygiene and independence. As the technology evolves, the possibilities expand: personalized wellness protocols, health monitoring integration, remote caregiver oversight for safety without presence." },
      { heading: "What Independence Means", body: "Independence in personal care is not merely a convenience — it is deeply connected to human dignity, self-worth, and quality of life. When individuals can manage their own bathing — privately, safely, and thoroughly — they maintain agency over one of the most fundamental aspects of daily life. Technology that restores this agency is not just useful. It is profound." },
    ],
    closing: "CleanBox was founded on the belief that every person, regardless of age or ability, deserves access to safe, private, and dignified personal hygiene. Fully autonomous bathing is how that belief becomes reality. This is not the future of care — it is the present, available now, for those ready to embrace it.",
  },
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
          <h1 className="text-3xl font-bold">Post Not Found</h1>
          <Link to="/blog" className="text-primary underline">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const tagColors: Record<string, string> = {
    "Workforce": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Dignity & Privacy": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Worker Safety": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Safety": "bg-red-500/20 text-red-300 border-red-500/30",
    "Infection Control": "bg-green-500/20 text-green-300 border-green-500/30",
    "Wellness": "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Innovation": "bg-primary/20 text-primary border-primary/30",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-black to-background">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm mb-8">
            ← Back to Blog
          </Link>
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-5 ${tagColors[post.tag] ?? "bg-primary/20 text-primary border-primary/30"}`}>
            {post.tag}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-3 text-white/40 text-sm">
            <span>CleanBox Enterprise</span><span>·</span><span>{post.date}</span>
          </div>
        </div>
      </section>
      <div className="h-px bg-white/10 max-w-3xl mx-auto" />
      <article className="max-w-3xl mx-auto px-6 py-14">
        <p className="text-lg text-white/80 leading-relaxed mb-12 font-light">{post.intro}</p>
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2 className="text-xl font-bold text-white mb-3">{section.heading}</h2>}
              <p className="text-white/70 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-white/80 leading-relaxed italic">{post.closing}</p>
        </div>
        <div className="mt-14 rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
          <h3 className="text-xl font-bold mb-3">Ready to See CleanBox in Action?</h3>
          <p className="text-white/60 mb-6 text-sm">Experience the future of autonomous care. Reserve your private showcase today.</p>
          <Link to="/showcase" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Reserve Showcase Access
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
}
