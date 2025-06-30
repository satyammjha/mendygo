"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black text-white">
            <div className="mx-auto max-w-7xl px-8 py-18 md:flex md:justify-between md:items-start">
                <div className="mb-10 md:mb-0 md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <Image
                            src={logo} alt={"mendygo"} className="h-12 w-12" />
                        <h1 className="text-xl text-black rounded-full italic font-bold bg-[#abff02]">Mendygo</h1>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">Subscribe to stay updated</p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 placeholder:text-gray-400 text-white" />
                        <Button className="bg-purple-600 hover:bg-purple-500 text-white">
                            <Mail className="h-4 w-4 mr-2" />
                            Submit
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 text-sm">

                    <div>
                        <h4 className="font-semibold mb-2 text-white">Links</h4>
                        <ul className="space-y-1 text-gray-400">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-white">Pages</h4>
                        <ul className="space-y-1 text-gray-400">
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-white">Social</h4>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                            <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                            <li><a href="https://github.com" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}