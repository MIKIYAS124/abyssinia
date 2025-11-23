'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCourseStore } from '@/store/useCourseStore';
import { Check } from 'lucide-react';
import React, { useRef } from 'react';

const courses = [
    {
        id: 'frontend',
        title: 'Frontend Development',
        description: 'Master React, Next.js, and modern CSS to build stunning user interfaces.',
        level: 'Beginner to Advanced'
    },
    {
        id: 'backend',
        title: 'Backend Development',
        description: 'Build robust APIs and scalable systems with Node.js, Python, and Databases.',
        level: 'Intermediate'
    },
    {
        id: 'fullstack',
        title: 'Full-Stack Engineering',
        description: 'Become a complete developer. Master both frontend and backend technologies.',
        level: 'Advanced'
    },
    {
        id: 'python',
        title: 'Python for Data Science',
        description: 'Learn Python programming and dive into data analysis and machine learning.',
        level: 'Beginner'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Protect systems and networks. Learn ethical hacking and security best practices.',
        level: 'Intermediate'
    }
];

function TiltCard({ children, onClick, isSelected }: { children: React.ReactNode, onClick: () => void, isSelected: boolean }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative p-8 rounded-2xl border cursor-pointer transition-colors duration-300 group ${isSelected
                    ? 'bg-white/10 border-white ring-1 ring-white'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
        </motion.div>
    );
}

export default function CoursesSection() {
    const { selectedCourse, selectCourse } = useCourseStore();

    return (
        <section id="courses" className="py-24 perspective-1000">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Our Courses
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Choose the path that fits your career goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <TiltCard
                                onClick={() => selectCourse(course.id)}
                                isSelected={selectedCourse === course.id}
                            >
                                {selectedCourse === course.id && (
                                    <div className="absolute top-0 right-0 p-1 bg-white rounded-full -mt-2 -mr-2">
                                        <Check size={14} className="text-black" />
                                    </div>
                                )}

                                <div className="mb-4">
                                    <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                                    {course.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {course.description}
                                </p>

                                <div className="flex items-center text-sm font-medium text-white">
                                    <span>Learn more</span>
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
