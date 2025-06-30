"use client";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

type Dot = { top: number; left: number };

export default function Hero() {
    const ref = useRef(null);
    const [dots, setDots] = useState<Dot[]>([]);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    
    useEffect(() => {
        const generated = Array.from({ length: 40 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
        }));
        setDots(generated);
    }, []);

    return (
        <section 
            ref={ref}
            className="relative flex min-h-[100vh] items-center justify-center px-4 overflow-hidden bg-black"
        >
            {/* Background GoogleGeminiEffect */}
            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
                className="opacity-40"
            />
            
            {/* Animated Dots */}
            {dots.map((dot, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white blur-[1px] z-10"
                    style={{
                        top: `${dot.top}%`,
                        left: `${dot.left}%`,
                        width: "2px",
                        height: "2px",
                        opacity: 0.3,
                    }}
                    animate={{
                        y: ["0%", "110%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                    }}
                />
            ))}

            {/* Hero Content */}
            <div className="relative z-20 w-full max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="mb-6 flex justify-center"
                >
                    <span className="inline-flex items-center overflow-hidden rounded-full border border-white/20 bg-black/20 px-0 py-1 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                        <span className="rounded-full bg-[#abff02] px-3 py-1 text-xs font-semibold text-black">
                            New
                        </span>
                        <span className="px-3 py-1 text-sm font-medium text-white dark:text-white">
                            Automated Lead Generation
                        </span>
                    </span>
                </motion.div>

                <h1 className="relative z-10 mx-auto max-w-5xl text-balance text-center text-3xl font-heading text-white md:text-5xl lg:text-7xl [word-spacing:1rem] font-semibold">
                    {"AI that adapts.".split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.4 + index * 0.08,
                                ease: "easeOut",
                            }}
                            className="mr-2 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                    className="relative z-10 mx-auto mt-4 w-full max-w-5xl text-balance text-center text-lg font-sans font-semibold text-slate-300 md:text-2xl lg:text-6xl"
                >
                    {"Join the future with mendygo".split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 1.2 + index * 0.08,
                                ease: "easeOut",
                            }}
                            className={`mr-2 inline-block ${word === "mendygo"
                                ? "bg-[#abff02] text-black font-bold px-3 py-1 rounded-full shadow-sm italic"
                                : ""
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
                        className="relative z-10 mt-10 flex justify-center"
                    >
                        <button className="relative w-52 overflow-hidden rounded-lg bg-white px-4 py-2 text-base font-medium text-black transition-all duration-300 hover:bg-gray-100 group cursor-pointer">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Sparkles className="h-4 w-4" /> Sign up now
                            </span>
                            <span className="absolute inset-0 z-0 translate-y-full bg-gradient-to-t from-gray-200 via-gray-100 to-white opacity-20 transition-transform duration-200 ease-in-out group-hover:translate-y-0" />
                        </button>
                    </motion.div>
                </motion.h2>
            </div>
        </section>
    );
}