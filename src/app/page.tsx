import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="main-wrapper">
        <Hero />
        <AboutSection />
        <Projects />
        <Services />
        <Clients />
        <Reviews />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
