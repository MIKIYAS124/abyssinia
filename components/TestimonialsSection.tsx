'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Abebe Kebede",
        role: "Frontend Developer at Ride",
        content: "AbyssiniaCode changed my life. The mentorship was incredible, and I landed my dream job within 3 months of graduating."
    },
    {
        name: "Sara Tadesse",
        role: "Full Stack Engineer at EthioTelecom",
        content: "The curriculum is tough but worth it. You learn how to think like an engineer, not just how to write code."
    },
    {
        name: "Dawit Alemu",
        role: "Freelance Developer",
        content: "I tried learning on my own for a year but got stuck. AbyssiniaCode gave me the structure and support I needed."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Success Stories
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Hear from our graduates who are now making an impact in the tech industry.
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-8 px-4">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 whitespace-normal"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
