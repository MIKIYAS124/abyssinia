import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-white/20">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
