"use client";
import Footer from "@/components/common/Footer";
import { MyNavbar } from "@/components/common/Navbar";
import CountdownCard from "@/components/Home/CountdownCard";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Benefits from "@/components/Home/Beniefits";
import { Badge } from "@/components/ui/badge";
import Step1 from "@/components/Home/Process/Step1";
import Step2 from "../components/Home/Process/Step2";
import Step3 from "@/components/Home/Process/Step3";
import Step4 from "@/components/Home/Process/Step4";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SignUpForm } from "@/components/Home/Form";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white">
      <MyNavbar />
      <Hero />

      <div className="p-4">
        <TextHoverEffect text="mendygo" />
      </div>

      <div className="px-4 py-16">
        <CountdownCard />
      </div>
      <WavyBackground>
        <div className="text-center max-w-2xl mx-auto px-4 space-y-4 mt-50">
          <h2 className="text-2xl md:text-2xl font-semibold">
            AI Solutions That Take Your Business to the Next Level
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            We design, develop, and implement automation tools that help you work smarter, not harder.
          </p>
        </div>
      </WavyBackground >
      <div className="relative mt-40 text-center px-4">
        <Badge className="bg-[#abff02] text-black mx-auto mb-4">
          <span className="text-sm font-semibold">Our Process</span>
        </Badge>

        <h1 className="text-2xl md:text-4xl font-bold mt-2">
          Our Simple, Smart, and Scalable Process
        </h1>
        <p className="mt-2 text-gray-300 max-w-xl mx-auto">
          We design, develop, and implement automation tools that help you work smarter, not harder.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center px-4 space-y-10">

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">
          <Step1 />
          <Step2 />
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">
          <Step3 />
          <Step4 />
        </div>
      </div>

      <div className="mt-12">
        <Benefits />
      </div>

      <div className="mt-20">
        <Faq />
      </div>
      <SignUpForm />
      <Footer />
    </div >
  );
}