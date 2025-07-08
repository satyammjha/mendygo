"use client";
import { useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import mendygo from "../../assets/mendygo white green wordmark.png";
import mendygoBlack from "../../assets/mendygo black green wordmark.png";
import { WavyBackground } from "../ui/wavy-background";
import GlassmorphedButtons from "../common/Buttons";

type Dot = { top: number; left: number; size: number; opacity: number };
type Star = { top: number; left: number; size: number; delay: number };

export default function Hero() {
    const ref = useRef(null);
    const [dots, setDots] = useState<Dot[]>([]);
    const [stars, setStars] = useState<Star[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        setDots(
            Array.from({ length: 40 }, () => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
            }))
        );
        setStars(
            Array.from({ length: 25 }, () => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 3,
            }))
        );
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <WavyBackground containerClassName="relative">
            <section
                ref={ref}
                className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
            >
                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none z-10"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(171,255,2,0.3), transparent 50%)`,
                    }}
                />
                {/* Animated stars */}
                {stars.map((star, i) => (
                    <motion.div
                        key={`star-${i}`}
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        className="absolute z-10 rounded-full bg-yellow-200 dark:bg-yellow-100 pointer-events-none"
                        animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
                {/* Floating dots */}
                {dots.map((dot, i) => (
                    <motion.div
                        key={`dot-${i}`}
                        style={{
                            top: `${dot.top}%`,
                            left: `${dot.left}%`,
                            width: `${dot.size}px`,
                            height: `${dot.size}px`,
                            background:
                                i % 3 === 0
                                    ? "#abff02"
                                    : i % 2 === 0
                                        ? "#d1d5db"
                                        : "#9ca3af",
                        }}
                        className="absolute z-10 rounded-full pointer-events-none"
                        animate={{
                            y: ["0%", "100vh"],
                            opacity: [0, dot.opacity, dot.opacity * 0.3, 0],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.1,
                        }}
                    />
                ))}

                {/* MAIN CONTENT */}
                <div className="relative z-20 w-full max-w-7xl text-center">
                    {/* Top badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2,
                        }}
                        className="mb-6 sm:mb-8 flex justify-center"
                    >
                        <motion.span
                            className="inline-flex items-center overflow-hidden rounded-full border border-gray-200/50 bg-white/80 backdrop-blur-xl shadow-lg hover:shadow-xl hover:shadow-[#abff02]/10 transition-all duration-300 group cursor-pointer dark:border-white/20 dark:bg-black/60 dark:hover:shadow-[#abff02]/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="rounded-full bg-gradient-to-r from-[#abff02] to-[#9ae600] px-3 py-1.5 text-xs sm:text-sm font-bold text-black shadow-lg">
                                New
                            </span>
                            <span className="px-3 sm:px-4 py-1.5 text-sm sm:text-base font-medium text-gray-800 group-hover:text-[#7cb502] transition-colors duration-300 dark:text-white/90 dark:group-hover:text-[#abff02]">
                                AI based monitoring and alarm system
                            </span>
                            <ArrowRight className="w-4 h-4 mr-3 text-gray-600 group-hover:text-[#7cb502] group-hover:translate-x-1 transition-all duration-300 dark:text-white/70 dark:group-hover:text-[#abff02]" />
                        </motion.span>
                    </motion.div>

                    {/* Hero Heading */}
                    <div className="relative">
                        <h1 className="relative z-10 mx-auto max-w-6xl text-balance text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight ">
                            {"AI that adapts.".split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.6 + index * 0.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="mr-4 inline-block bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent drop-shadow-sm dark:from-white dark:via-white dark:to-gray-200 dark:drop-shadow-lg"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-10 mx-auto mt-6 xl:mt-10 sm:mt-8 max-w-4xl px-4"
                    >
                        <h2 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-black/80 flex flex-wrap justify-center items-center sm:gap-4 dark:text-gray-200">
                            <span className="leading-relaxed">Join the future with</span>
                            <motion.span
                                className="inline-flex items-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={mendygoBlack}
                                    alt="Mendygo Logo"
                                    className="object-contain w-auto mt-4 h-16 sm:h-16 md:h-12 lg:h-16 xl:h-20 drop-shadow-sm block dark:hidden xl:mt-8"
                                    priority
                                />
                                <Image
                                    src={mendygo}
                                    alt="Mendygo Logo"
                                    className="object-contain w-auto h-10 sm:h-10 md:h-12 lg:h-14 xl:h-16 drop-shadow-sm hidden dark:block xl:mt-3"
                                    priority
                                />
                            </motion.span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                        className="mt-4 sm:mt-6 mx-auto max-w-[97%] text-base sm:text-lg md:text-xl text-black/80 leading-relaxed px-4 dark:text-gray-300 font-semibold xl:mb-2 mb-8"
                    >
                        Transform your business with intelligent automation that learns,
                        adapts, and scales with your needs.
                    </motion.p>

                    <GlassmorphedButtons />

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2.6 }}
                        className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-600 dark:text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Trusted by 500+ businesses</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full dark:bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#abff02] rounded-full animate-pulse" />
                            <span>99.9% uptime guarantee</span>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 3 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-gray-400/60 rounded-full flex justify-center dark:border-white/40"
                    >
                        <motion.div
                            animate={{ y: [0, 16, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-[#abff02] rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </section>
        </WavyBackground>
    );
}
