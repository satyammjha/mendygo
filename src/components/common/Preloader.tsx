import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../assets/logo.png"

interface PreloaderProps {
    onLoadingComplete?: () => void;
    minimumDuration?: number;
}

export default function Preloader({
    onLoadingComplete,
    minimumDuration = 2000
}: PreloaderProps) {
    const [particles, setParticles] = useState<
        { x: number; y: number; duration: number; delay: number }[]
    >([]);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        const p = Array.from({ length: 6 }).map(() => ({
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setParticles(p);

        let startTime = Date.now();
        let isPageLoaded = false;
        let progressInterval: NodeJS.Timeout;


        progressInterval = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) return 100;
                return prev + Math.random() * 10;
            });
        }, 100);

        const handleComplete = () => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minimumDuration - elapsedTime);

            setLoadingProgress(100);
            clearInterval(progressInterval);

            setTimeout(() => {
                onLoadingComplete?.();
            }, remainingTime);
        };

        const handlePageLoad = () => {
            isPageLoaded = true;
            if (loadingProgress >= 90) {
                handleComplete();
            }
        };

        if (document.readyState === 'complete') {
            handlePageLoad();
        } else {
            window.addEventListener('load', handlePageLoad);
        }
        const progressCheck = setInterval(() => {
            if (loadingProgress >= 100 && isPageLoaded) {
                handleComplete();
                clearInterval(progressCheck);
            }
        }, 100);

        return () => {
            clearInterval(progressInterval);
            clearInterval(progressCheck);
            window.removeEventListener('load', handlePageLoad);
        };
    }, [onLoadingComplete, minimumDuration, loadingProgress]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.6, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-96 h-96 border border-white/20 rounded-full"
            />
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.2, 0] }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.3,
                }}
                className="absolute w-[500px] h-[500px] border border-white/10 rounded-full"
            />

            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                    scale: 1,
                    rotate: 0,
                    y: [0, -10, 0],
                }}
                transition={{
                    scale: { duration: 0.8, ease: "easeOut" },
                    rotate: { duration: 0.8, ease: "easeOut" },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative z-10"
            >
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 0px rgba(171, 255, 2, 0)",
                            "0 0 30px rgba(171, 255, 2, 0.5)",
                            "0 0 0px rgba(171, 255, 2, 0)",
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="rounded-full p-4 bg-black/50 backdrop-blur-sm border border-white/10"
                >
                    <Image
                        src={logo}
                        alt="mendygo logo"
                        width={80}
                        height={80}
                        className="drop-shadow-lg"
                        priority
                    />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-1/3 text-center"
            >
                <motion.p
                    className="text-white/70 text-sm font-medium tracking-wider mb-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    LOADING... {Math.round(loadingProgress)}%
                </motion.p>

                <div className="relative w-[200px] h-0.5 bg-white/10 rounded-full mx-auto">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#abff02] to-[#7acc00] rounded-full"
                    />

                    <motion.div
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            x: [`${loadingProgress - 10}%`, `${loadingProgress}%`, `${loadingProgress - 10}%`],
                        }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 w-4 h-0.5 bg-white rounded-full blur-sm"
                        style={{ left: `${Math.max(0, loadingProgress - 2)}%` }}
                    />
                </div>
            </motion.div>

            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0,
                        x: particle.x,
                        y: particle.y,
                    }}
                    animate={{
                        opacity: [0, 0.6, 0],
                        y: [0, -100, -200],
                        x: [0, particle.x / 2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeOut",
                    }}
                    className="absolute w-1 h-1 bg-[#abff02] rounded-full"
                />
            ))}
        </motion.div>
    );
}