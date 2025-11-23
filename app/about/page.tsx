import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About Us | AbyssiniaCode",
    description: "Learn about our mission to empower the next generation of Ethiopian tech leaders.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <div className="pt-20">
                <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About AbyssiniaCode</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We are building the future of tech education in Ethiopia.
                    </p>
                </div>
                <AboutSection />
                <WhySection />
            </div>
            <Footer />
        </main>
    );
}
