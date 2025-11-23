'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Rocket, Target, Heart } from 'lucide-react';
import { useRef } from 'react';

const reasons = [
    {
        icon: <Target className="w-6 h-6 text-black" />,
        title: "Personalized Mentorship",
        description: "Get 1-on-1 guidance from senior developers who care about your success."
    },
    {
        icon: <Rocket className="w-6 h-6 text-black" />,
        title: "Real-World Projects",
        description: "Build a portfolio of production-ready applications, not just toy projects."
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-black" />,
        title: "Career Guidance",
        description: "Resume reviews, mock interviews, and job placement assistance."
    },
    {
        icon: <Heart className="w-6 h-6 text-black" />,
        title: "Supportive Community",
        description: "Learn alongside peers who motivate and challenge you to be your best."
    }
];

export default function WhySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-24 bg-white text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div style={{ opacity }}>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why Students Love <br />
                            <span className="text-gray-500">AbyssiniaCode</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We bridge the gap between self-learning and professional engineering. Our approach is practical, intensive, and results-oriented.
                        </p>
                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 p-2 bg-gray-100 rounded-lg">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-1">{reason.title}</h3>
                                        <p className="text-gray-600">{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ y }}
                        className="relative h-[600px] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl"
                    >
                        {/* Placeholder for an image or graphic */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                            <span className="text-gray-400 font-medium">Parallax Image Placeholder</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
