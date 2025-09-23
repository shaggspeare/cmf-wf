import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CourseSection from "@/components/CourseSection";
import ApproachSection from "@/components/ApproachSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import ResultsSection from "@/components/ResultsSection";
import Program from "@/components/Program";
import PricingSection from "@/components/PricingSection";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-wrapper">
      {/*<Marquee />*/}
      <Navigation />
      <div className="main-wrapper">
        <Hero />
        <AboutSection />
        <CourseSection />
        <ApproachSection />
        <ForWhoSection />
        <BenefitsSection />
        <ResultsSection />
        <Program />
        <PricingSection />
        {/*<Projects />*/}
        {/*<Clients />*/}
        <Reviews />
        {/*<FAQ />*/}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
