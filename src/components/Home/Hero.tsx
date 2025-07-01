"use client";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import mendygo from "../../assets/mendygo white green wordmark.png";

type Dot = { top: number; left: number; size: number; opacity: number };

export default function Hero() {
    const ref = useRef(null);
    const [dots, setDots] = useState<Dot[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        const generated = Array.from({ length: 60 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.1,
        }));
        setDots(generated);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={ref}
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(171,255,2,0.1),transparent_70%)]" />


            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(171,255,2,0.15), transparent 40%)`,
                }}
            />

            {dots.map((dot, i) => (
                <motion.div
                    key={i}
                    className="absolute z-10 rounded-full"
                    style={{
                        top: `${dot.top}%`,
                        left: `${dot.left}%`,
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        background: i % 3 === 0 ? '#abff02' : '#ffffff',
                        opacity: dot.opacity,
                        filter: 'blur(0.5px)',
                    }}
                    animate={{
                        y: ["0%", "110%"],
                        opacity: [dot.opacity, dot.opacity * 0.3, dot.opacity]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.1,
                    }}
                />
            ))}

            <div className="relative z-20 w-full max-w-7xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.2
                    }}
                    className="mb-6 sm:mb-8 flex justify-center"
                >
                    <motion.span
                        className="inline-flex items-center overflow-hidden rounded-full border border-white/30 bg-black/40 backdrop-blur-xl shadow-2xl hover:shadow-[#abff02]/20 transition-all duration-300 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="rounded-full bg-gradient-to-r from-[#abff02] to-[#9ae600] px-3 py-1.5 text-xs sm:text-sm font-bold text-black shadow-lg">
                            New
                        </span>
                        <span className="px-3 sm:px-4 py-1.5 text-sm sm:text-base font-medium text-white group-hover:text-[#abff02] transition-colors duration-300">
                            AI based monitoring and alarm system
                        </span>
                        <ArrowRight className="w-4 h-4 mr-3 text-white/70 group-hover:text-[#abff02] group-hover:translate-x-1 transition-all duration-300" />
                    </motion.span>
                </motion.div>

                <div className="relative">
                    <h1 className="relative z-10 mx-auto max-w-6xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
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
                                className="mr-4 inline-block bg-gradient-to-b from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <div className="absolute inset-0 bg-gradient-to-b from-[#abff02]/20 to-transparent blur-3xl -z-10" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.4,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="relative z-10 mx-auto mt-6 sm:mt-8 max-w-4xl"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-slate-300 flex flex-wrap justify-center items-center gap-2 sm:gap-4">
                        <span className="leading-relaxed">Join the future with</span>
                        <motion.span
                            className="inline-flex items-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Image
                                src={mendygo}
                                alt="Mendygo Logo"
                                width={200}
                                height={50}
                                className="object-contain w-auto h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 drop-shadow-lg"
                                priority
                            />
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                    className="mt-6 sm:mt-8 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-white leading-relaxed px-4"
                >
                    Transform your business with intelligent automation that learns, adapts, and scales with your needs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                    className="relative z-10 mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                >
                    <motion.button
                        className="group relative w-full sm:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-[#abff02] to-[#9ae600] px-8 py-4 text-base sm:text-lg font-bold text-black transition-all duration-300 hover:shadow-2xl hover:shadow-[#abff02]/25 min-w-[200px]"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            Join Now
                        </span>
                        <motion.span
                            className="absolute inset-0 z-0 bg-gradient-to-r from-white/20 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.button>

                    <motion.button
                        className="group relative w-full sm:w-auto overflow-hidden rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:border-[#abff02]/50 hover:bg-white/10 min-w-[200px]"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Play className="h-5 w-5" />
                            Watch Demo
                        </span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.6 }}
                    className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>Trusted by 500+ businesses</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#abff02] rounded-full animate-pulse" />
                        <span>99.9% uptime guarantee</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-[#abff02] rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}