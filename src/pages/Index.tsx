import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { ProductLine } from "@/components/ProductLine";
import { Engineering } from "@/components/Engineering";
import { Safety } from "@/components/Safety";
import { ROI } from "@/components/ROI";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CleanboxBot } from "@/components/CleanboxBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProductLine />
        <Engineering />
        <Safety />
        <ROI />
        <Contact />
      </main>
      <Footer />
      <CleanboxBot />
    </div>
  );
};

export default Index;
