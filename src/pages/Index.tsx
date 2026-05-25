import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import FounderStory from "@/components/FounderStory";
import MarketsServed from "@/components/MarketsServed";
import Calculator from "@/components/Calculator";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <FounderStory />
      <MarketsServed />
      <Calculator />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
