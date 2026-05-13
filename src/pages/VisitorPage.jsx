import VisitorLayout from "../layouts/VisitorLayout";

import Navbar from "../components/visitor/Navbar";
import HeroSection from "../components/visitor/HeroSection";
import AboutSection from "../components/visitor/AboutSection";
import ProductSection from "../components/visitor/ProductSection";
import TestimonialsSection from "../components/visitor/TestimonialsSection";
import Footer from "../components/visitor/Footer";

export default function VisitorPage() {
  return (
    <VisitorLayout>
      <div className="pt-24">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </VisitorLayout>
  );
}
