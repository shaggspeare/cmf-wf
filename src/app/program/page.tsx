"use client";

import Navigation from "@/components/Navigation";
import DetailedProgramSection from "@/components/DetailedProgramSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="main-wrapper">
        <DetailedProgramSection />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}