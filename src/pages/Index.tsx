import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { ProblemSolution } from "@/components/ProblemSolution";
import { MarketsServed } from "@/components/MarketsServed";
import { ProductLine } from "@/components/ProductLine";
import { ROI } from "@/components/ROI";
import { FounderStory } from "@/components/FounderStory";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CleanboxBot } from "@/components/CleanboxBot";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProblemSolution />
        <MarketsServed />
        <ProductLine />
        <ROI />
        <FounderStory />
        <Contact />
      </main>
      <Footer />
      <CleanboxBot />
      <FloatingCTA />
    </div>
  );
};

export default Index;
