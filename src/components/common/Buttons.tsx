import React from 'react';
import { Sparkles, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GlassmorphedButtons() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
            className="relative z-10 mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
            <motion.button
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl px-8 py-4 text-base sm:text-lg font-bold text-black min-w-[200px] 
    transition-all duration-300 cursor-pointer dark:text-white
    bg-[#abff02]/70  dark:bg-[#abff02] backdrop-blur-md
    hover:bg-[#abff02]/40 hover:shadow-[#abff02]/40
     dark:hover:bg-[#abff02]/30"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-xl opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Label with icon */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:drop-shadow-sm" />
                    Join Now
                </span>

                {/* Border + subtle hover pop */}
                <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
            </motion.button>


            <motion.button
                className="group cursor-pointer relative w-full sm:w-auto overflow-hidden rounded-xl border-2 border-gray-300/50 bg-white/70 backdrop-blur-xl px-8 py-4 text-base sm:text-lg font-semibold text-gray-800 transition-all duration-300 hover:border-[#abff02]/50 hover:bg-white/90 min-w-[200px] dark:border-white/20 dark:bg-black/40 dark:text-white dark:hover:border-[#abff02]/50 dark:hover:bg-black/60"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Enhanced glassmorphism layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-white/5 dark:via-white/2 dark:to-white/5 backdrop-blur-md rounded-xl"></div>

                {/* Glass reflection highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 rounded-t-xl"></div>

                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-xl"></div>

                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Play className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                    Watch Demo
                </span>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#abff02]/0 via-[#abff02]/5 to-[#abff02]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
        </motion.div>
    );
}