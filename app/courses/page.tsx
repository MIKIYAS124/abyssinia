import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Courses | AbyssiniaCode",
    description: "Explore our comprehensive coding courses designed to launch your tech career.",
};

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <div className="pt-20">
                <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">All Courses</h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        From beginner to advanced, we have the right course for you.
                    </p>
                </div>
                <CoursesSection />
            </div>
            <Footer />
        </main>
    );
}
