import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Engineering } from "@/components/Engineering";
import { Safety } from "@/components/Safety";
import { ROI } from "@/components/ROI";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Engineering />
        <Safety />
        <ROI />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
