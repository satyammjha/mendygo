"use client"
import Footer from "@/components/common/Footer";
import { MyNavbar } from "@/components/common/Navbar";
import CountdownCard from "@/components/Home/CountdownCard";
import Hero from "@/components/Home/Hero";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-[100vh]">

      <MyNavbar />
      <Hero />
      <div className="p-4 cursor-pointer">
        <TextHoverEffect text={'mendygo'} />
      </div>
      <div className="p-20">
        <CountdownCard />
      </div>
      <div className="text-center max-w-[25vw] mx-auto px-4 space-y-2 mt-10">
        <h2 className="text-2xl   max-w-[25vw] md:text-2xl font-semibold text-white">
          AI Solutions That Take Your Business to the Next Level
        </h2>
        <p className="text-base max-w-[45vw] md:text-lg text-gray-300">
          We design, develop, and implement automation tools that help you work smarter, not harder
        </p>
      </div>
      <Footer />
    </div>
  );
}