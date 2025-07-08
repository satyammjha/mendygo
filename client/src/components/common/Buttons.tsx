"use client";

import React, { useState } from "react";
import { Sparkles, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassmorphedButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
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
                setFormData({ name: "", email: "", phone: "" });
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
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full sm:w-auto overflow-hidden rounded-xl px-8 py-4 text-base sm:text-lg font-bold text-white min-w-[200px]
    transition-all duration-300 cursor-pointer
    bg-black backdrop-blur-md shadow-[0_0_20px_#abff02]/20
    hover:bg-zinc-900 hover:shadow-[0_0_10px_#abff02]/10"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-xl opacity-5 mb-5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 group-hover:drop-shadow-sm" />
                    Join Now
                </span>
                <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-300" />
            </motion.button>


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
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Contact Number"
                                    value={formData.phone}
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
