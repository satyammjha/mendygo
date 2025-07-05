"use client";

import React, { useState } from "react";
import { Sparkles, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassmorphedButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("https://m.satyamjha.me/contact/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (res.ok) {
                alert("Submitted successfully!");
                setFormData({ name: "", email: "" });
                setIsModalOpen(false);
            } else {
                alert(result.message || "Submission failed.");
            }
        } catch (err) {
            console.error(err);
            alert("Server error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                className="relative z-10 mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
                {/* Join Now Button */}
                <motion.button
                    onClick={() => setIsModalOpen(true)}
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
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <Sparkles className="h-5 w-5 group-hover:rotate-12 group-hover:drop-shadow-sm" />
                        Join Now
                    </span>
                    <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-300" />
                </motion.button>

                {/* Watch Demo Button */}
                <motion.button
                    className="group cursor-pointer relative w-full sm:w-auto overflow-hidden rounded-xl border-2 border-gray-300/50 bg-white/70 backdrop-blur-xl px-8 py-4 text-base sm:text-lg font-semibold text-gray-800 transition-all duration-300 hover:border-[#abff02]/50 hover:bg-white/90 min-w-[200px] dark:border-white/20 dark:bg-black/40 dark:text-white dark:hover:border-[#abff02]/50 dark:hover:bg-black/60"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 dark:from-white/5 dark:via-white/2 dark:to-white/5 backdrop-blur-md rounded-xl"></div>
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 rounded-t-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-xl"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <Play className="h-5 w-5 group-hover:scale-110" />
                        Watch Demo
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#abff02]/0 via-[#abff02]/5 to-[#abff02]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-neutral-900 rounded-2xl p-6 w-full max-w-sm text-white shadow-xl border border-white/10 relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white hover:text-[#abff02] transition"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h2 className="text-xl font-semibold text-center mb-4">
                                Join the Waitlist
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#abff02] text-black font-semibold py-2 rounded-lg hover:brightness-110 transition disabled:opacity-60"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}