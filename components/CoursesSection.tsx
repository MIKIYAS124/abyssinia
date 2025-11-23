'use client';

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCourseStore } from '@/store/useCourseStore';
import { Check, X, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

// --- Data ---

const courses = [
    {
        id: 'frontend',
        title: 'Frontend Development',
        shortDescription: 'Master React, Next.js, and modern CSS to build stunning user interfaces.',
        level: 'Beginner to Advanced',
        price: '15,000 ETB',
        fullDescription: {
            overview: 'The Frontend Development program is designed to take you from absolute beginner to advanced UI engineer. You will learn how to build fast, modern, and responsive user interfaces using industry-standard tools like React, Next.js, and TailwindCSS. This track focuses on mastering the visual and interactive layer of the web — everything users can see and touch. By the end, you will be able to design intuitive user experiences and code fully functional production-ready frontends.',
            whatYouWillLearn: [
                'HTML5 and modern CSS fundamentals',
                'Flexbox, Grid, and responsive layout design',
                'TailwindCSS for professional-grade styling',
                'JavaScript and ES6+ features',
                'React components, hooks, and state management',
                'Next.js routing, data fetching, and server components',
                'UI animations and transitions',
                'API integration from frontend',
                'Version control with Git & GitHub'
            ],
            projects: [
                'Fully responsive landing pages',
                'Personal portfolio website',
                'Multi-page website with routing',
                'Dashboard UI',
                'A complete modern web app using Next.js'
            ],
            whoIsThisFor: [
                'Beginners starting their programming journey',
                'Designers transitioning into frontend',
                'Students preparing for tech careers',
                'Anyone wanting to build beautiful user interfaces'
            ],
            outcome: [
                'A strong frontend foundation',
                'A portfolio with real projects',
                'Confidence to apply for junior frontend developer roles'
            ]
        }
    },
    {
        id: 'backend',
        title: 'Backend Development',
        shortDescription: 'Build robust APIs and scalable systems with Node.js, Python, and Databases.',
        level: 'Intermediate',
        price: '18,000 ETB',
        fullDescription: {
            overview: 'The Backend Development program trains you to build the logic, security, and infrastructure behind real applications. You will learn to design APIs, manage databases, and architect scalable backends using Node.js, Express, PostgreSQL, and Python fundamentals. This program emphasizes problem-solving, system design thinking, and secure backend logic.',
            whatYouWillLearn: [
                'JavaScript & Node.js fundamentals',
                'Express.js for building REST APIs',
                'Database design (PostgreSQL, MongoDB optional)',
                'Authentication and authorization',
                'Security best practices',
                'Writing clean, modular backend services',
                'Using ORM tools (Prisma / Sequelize)',
                'File upload, pagination, filtering, sorting',
                'Deployment to cloud platforms',
                'Git workflows and documentation'
            ],
            projects: [
                'Authentication system (JWT, roles, permissions)',
                'REST API for an e-commerce app',
                'Event booking API',
                'Payment integration logic',
                'Database-driven backend service'
            ],
            whoIsThisFor: [
                'Intermediate programmers',
                'Students who understand basics of coding',
                'Anyone wanting to build server-side systems'
            ],
            outcome: [
                'Build and deploy complete backend APIs',
                'Manage databases and server logic',
                'Apply for backend developer or API engineer roles'
            ]
        }
    },
    {
        id: 'fullstack',
        title: 'Full-Stack Engineering',
        shortDescription: 'Become a complete developer. Master both frontend and backend technologies.',
        level: 'Advanced',
        price: '25,000 ETB',
        fullDescription: {
            overview: 'This is the most complete and advanced track. The Full-Stack Engineering program covers both frontend and backend development, preparing you to build complete applications from scratch — the same skills used by real industry developers. You will master React, Next.js, Node.js, databases, authentication, and deployment. It’s an intensive, career-oriented track for people who want to become complete developers.',
            whatYouWillLearn: [
                'Frontend: React, Next.js, TailwindCSS',
                'UI components & state management',
                'API integration and real-time updates',
                'Backend: Node.js & Express',
                'Database modeling (PostgreSQL)',
                'Authentication (JWT, OAuth)',
                'Secure backend logic & API design',
                'Tools: Git, GitHub',
                'Deployment workflows (Vercel, Render, Railway)',
                'System architecture and clean code'
            ],
            projects: [
                'Full authentication system (login, register, roles)',
                'Complete e-commerce platform',
                'Booking & scheduling platform',
                'Chat or real-time app',
                'Your final capstone project (your idea)'
            ],
            whoIsThisFor: [
                'Advanced students',
                'Developers wanting to become full-stack',
                'People preparing for high-paying tech roles'
            ],
            outcome: [
                'Mastery of both frontend & backend',
                'A strong full-stack portfolio',
                'Skills to build production software',
                'Ability to work as a Full-Stack Engineer'
            ]
        }
    },
    {
        id: 'python',
        title: 'Python for Data Science',
        shortDescription: 'Learn Python programming and dive into data analysis and machine learning.',
        level: 'Beginner',
        price: '12,000 ETB',
        fullDescription: {
            overview: 'Python for Data Science teaches you how to analyze data, build models, and solve real-world problems using Python. Perfect for beginners entering the world of AI, big data, and automation. You will learn Python programming, data analysis libraries, and introductory machine learning concepts.',
            whatYouWillLearn: [
                'Python fundamentals',
                'Functions, loops, and data structures',
                'Working with data using Pandas & NumPy',
                'Data visualization using Matplotlib & Seaborn',
                'CSV, JSON, Excel data handling',
                'Basic statistics for data science',
                'Intro to machine learning'
            ],
            projects: [
                'Sales data analysis',
                'Weather or population data visualization',
                'Mini ML project (prediction model)',
                'Personal data science portfolio'
            ],
            whoIsThisFor: [
                'Total beginners',
                'Students pursuing AI/ML',
                'Professionals wanting data skills'
            ],
            outcome: [
                'Clean, analyze, and visualize real data',
                'Build mini-ML projects',
                'Start your path toward data science, ML, or analytics careers'
            ]
        }
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        shortDescription: 'Protect systems and networks. Learn ethical hacking and security best practices.',
        level: 'Intermediate',
        price: '20,000 ETB',
        fullDescription: {
            overview: 'The Cybersecurity program teaches you how to protect networks, systems, and applications from attacks. You will learn ethical hacking, vulnerability testing, and security practices used by professionals.',
            whatYouWillLearn: [
                'Fundamentals of cybersecurity',
                'Network security & protocols',
                'Linux basics for hacking',
                'Kali Linux and ethical hacking tools',
                'Reconnaissance, scanning, and exploitation',
                'Web application security',
                'Password cracking & social engineering',
                'Securing systems & defense strategies'
            ],
            projects: [
                'Vulnerability scanning reports',
                'Secure login system demonstration',
                'Ethical hacking labs',
                'Simulation of real-world attacks',
                'Incident response documentation'
            ],
            whoIsThisFor: [
                'Intermediate learners',
                'Cybersecurity enthusiasts',
                'Students preparing for national or global cybersecurity fields'
            ],
            outcome: [
                'You understand core cybersecurity principles',
                'You can perform ethical hacking on safe environments',
                'You can pursue cybersecurity certifications',
                'You’re prepared for junior cybersecurity analyst roles'
            ]
        }
    }
];

// --- Components ---

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
            className={`relative p-8 rounded-2xl border cursor-pointer transition-colors duration-300 group h-full flex flex-col ${isSelected
                    ? 'bg-white/10 border-white ring-1 ring-white'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                }`}
        >
            <div style={{ transform: "translateZ(50px)" }} className="flex-1 flex flex-col">
                {children}
            </div>
        </motion.div>
    );
}

function CourseModal({ course, onClose }: { course: typeof courses[0], onClose: () => void }) {
    // Lock body scroll when modal is open
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="min-h-full flex items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#1A1A1C] border border-white/10 rounded-2xl w-full max-w-4xl relative shadow-2xl my-8"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        <X size={20} className="text-white" />
                    </button>

                    <div className="p-6 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 border-b border-white/10 pb-8">
                            <div>
                                <span className="text-sm font-semibold tracking-wider text-green-400 uppercase mb-2 block">
                                    {course.level}
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{course.title}</h2>
                                <p className="text-gray-400 text-base md:text-lg max-w-2xl">{course.shortDescription}</p>
                            </div>
                            <div className="flex flex-col items-end gap-4 w-full md:w-auto min-w-[200px]">
                                <span className="text-2xl md:text-3xl font-bold text-white">{course.price}</span>
                                <button className="w-full px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors">
                                    Enroll Now
                                </button>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                                <p className="text-gray-300 leading-relaxed">{course.fullDescription.overview}</p>
                            </section>

                            <div className="grid md:grid-cols-2 gap-10">
                                <section>
                                    <h3 className="text-xl font-bold text-white mb-4">What You Will Learn</h3>
                                    <ul className="space-y-3">
                                        {course.fullDescription.whatYouWillLearn.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <Check size={18} className="text-green-400 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-white mb-4">Real Projects</h3>
                                    <ul className="space-y-3">
                                        {course.fullDescription.projects.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                <section>
                                    <h3 className="text-xl font-bold text-white mb-4">Who This Is For</h3>
                                    <ul className="space-y-3">
                                        {course.fullDescription.whoIsThisFor.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <ChevronRight size={18} className="text-gray-500 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold text-white mb-4">Outcome</h3>
                                    <ul className="space-y-3">
                                        {course.fullDescription.outcome.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <Check size={18} className="text-purple-400 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function CoursesSection() {
    const { selectedCourse, selectCourse } = useCourseStore();
    const [modalCourse, setModalCourse] = useState<typeof courses[0] | null>(null);

    return (
        <section id="courses" className="py-24 perspective-1000 relative">
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

                                <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                                    {course.shortDescription}
                                </p>

                                <div className="mt-auto pt-4">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setModalCourse(course);
                                        }}
                                        className="flex items-center text-sm font-medium text-white hover:text-green-400 transition-colors group/btn"
                                    >
                                        <span>Details</span>
                                        <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {modalCourse && (
                    <CourseModal
                        course={modalCourse}
                        onClose={() => setModalCourse(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
