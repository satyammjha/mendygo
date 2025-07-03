"use client";

import { Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black px-4 py-8 md:py-16 text-black dark:text-white relative overflow-hidden">

            <div className="absolute inset-x-0 top-0 h-64 pointer-events-none z-0 blur-3xl opacity-40 dark:opacity-20" style={{ background: "radial-gradient(ellipse at center, #abff02 0%, transparent 80%)" }} />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
                <button className="text-xs px-4 py-1 rounded-full border dark:border-white/20 border-black/20 dark:text-white text-black hover:bg-[#abff02] hover:text-black transition">
                    Contact
                </button>

                <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-black">Get in Touch with Us</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                    Have questions or need AI solutions? Let us know by filling out the form, and we'll be in touch!
                </p>

                <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

                    <div className="relative group">

                        <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                        <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-white/10 text-left">
                            <div className="flex items-center gap-3 mb-2 text-black dark:text-white">
                                <div className="p-2 bg-[#abff02]/20 rounded-lg">
                                    <Mail className="w-5 h-5 text-[#abff02]" />
                                </div>
                                <span className="font-semibold">E-mail</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Admin@mendygo.com</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                        <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg border border-white/20 dark:border-white/10 text-left">
                            <div className="flex items-center gap-3 mb-2 text-black dark:text-white">
                                <div className="p-2 bg-[#abff02]/20 rounded-lg">
                                    <Phone className="w-5 h-5 text-[#abff02]" />
                                </div>
                                <span className="font-semibold">Phone</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">+1(969) XXX-XXXX</p>
                        </div>
                    </div>
                </div>
                <div className="relative group mt-6 md:mt-8">
                    <div className="absolute inset-0 bg-[#abff02] rounded-xl blur-2xl opacity-10 group-hover:opacity-15 transition-opacity duration-300"></div>
                    <div className="relative bg-white/80 dark:bg-black/90 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="bg-white/60 dark:bg-white/5
                             backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-whiteplaceholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-whiteplaceholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-whiteplaceholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <textarea
                            placeholder="Hi, I am Jane I want help with..."
                            rows={4}
                            className="bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/30 dark:border-white/20 rounded-lg px-4 py-3 text-sm md:text-base dark:text-white text-black placeholder:dark:text-whiteplaceholder:text-gray-600 sm:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#abff02]/50 focus:border-[#abff02]/50 transition-all"
                        />
                        <button
                            type="submit"
                            className="bg-[#abff02] hover:bg-[#c7ff5f] text-black font-semibold py-3 px-6 rounded-lg sm:col-span-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#abff02]/50"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;