import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white relative overflow-hidden border-t border-white/10">

            <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 0.08, scale: 1.3 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#abff02] to-transparent pointer-events-none z-0"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="mendygo" className="h-10 w-10" />
                        <h1 className="text-xl font-bold italic text-black bg-[#abff02] px-3 py-1 rounded-full">
                            Mendygo
                        </h1>
                    </div>
                    <p className="text-sm text-gray-300">Join our newsletter</p>
                    <div className="flex items-center space-x-2">
                        <Input
                            type="email"
                            placeholder="name@mendygo.com"
                            className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                        />
                        <Button className="bg-[#abff02]  hover:bg-[#abff029f] text-white cursor-pointer">
                            <Mail className="w-4 h-4 mr-1" />
                            Subscribe
                        </Button>
                    </div>
                </div>

                <div className="space-y-2 text-sm">
                    <h4 className="font-semibold text-white mb-2">Links</h4>
                    <ul className="text-gray-400 space-y-1">
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/process">Process</Link></li>
                        <li><Link href="/case-studies">Case studies</Link></li>
                        <li><Link href="/benefits">Benefits</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                    </ul>
                </div>

                {/* Pages */}
                <div className="space-y-2 text-sm">
                    <h4 className="font-semibold text-white mb-2">Pages</h4>
                    <ul className="text-gray-400 space-y-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="space-y-2 text-sm">
                    <h4 className="font-semibold text-white mb-2">Socials</h4>
                    <ul className="text-gray-400 space-y-1">
                        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                        <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-white/10 text-center text-xs text-gray-500 py-4">
                © Mendygo 2025. All rights reserved.
            </div>
        </footer>
    );
}