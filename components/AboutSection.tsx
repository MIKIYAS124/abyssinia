'use client';

import { motion } from 'framer-motion';
import { Code2, Users, Trophy } from 'lucide-react';

const features = [
    {
        icon: <Code2 className="w-8 h-8 text-white" />,
        title: "Expert-Led Training",
        description: "Learn from industry professionals with years of experience in top tech companies."
    },
    {
        icon: <Users className="w-8 h-8 text-white" />,
        title: "Community Driven",
        description: "Join a vibrant community of developers. Collaborate, share knowledge, and grow together."
    },
    {
        icon: <Trophy className="w-8 h-8 text-white" />,
        title: "Career Focused",
        description: "Our curriculum is designed to get you hired. Real projects, portfolio building, and interview prep."
    }
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Why Choose AbyssiniaCode?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We are more than just a coding school. We are a movement to empower the next generation of Ethiopian tech leaders.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/10 w-fit">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
