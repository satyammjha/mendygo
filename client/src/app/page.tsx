"use client";
import { useRef, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Hero from "@/components/Home/Hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import Preloader from "../components/common/Preloader";
import Image from "next/image";
import DashboardDark from '../assets/dashboard-dark.png'
import DashboardLight from '../assets/dashboard-light.png'

const CountdownCard = lazy(() => import("@/components/Home/CountdownCard"));
const Faq = lazy(() => import("@/components/Home/Faq"));
const Benefits = lazy(() => import("@/components/Home/Beniefits"));
const Step1 = lazy(() => import("@/components/Home/Process/Step1"));
const Step2 = lazy(() => import("../components/Home/Process/Step2"));
const Step3 = lazy(() => import("@/components/Home/Process/Step3"));
const Step4 = lazy(() => import("@/components/Home/Process/Step4"));
const SignUpForm = lazy(() => import("@/components/Home/Form").then(module => ({ default: module.SignUpForm })));
const Timeline = lazy(() => import("@/components/Home/Timeline"));

const LoadingSkeleton = ({ className = "" }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="bg-gray-300 dark:bg-black rounded-lg h-full w-full"></div>
  </div>
);

import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type StaggeredContainerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const StaggeredContainer = ({ children, className = "", delay = 0 }: StaggeredContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

type StaggeredChildProps = {
  children: React.ReactNode;
  className?: string;
};

const StaggeredChild = ({ children, className = "" }: StaggeredChildProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  const gradientRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden min-h-screen dark:bg-black bg-white dark:text-white text-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            key="preloader"
            onLoadingComplete={handleLoadingComplete}
            minimumDuration={0}
          />
        )}


        {!isLoading && (
          <motion.div
            key="main-site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <Hero />

            <AnimatedSection
              className="p-4 md:p-8"
              delay={0.1}
            >
              <TextHoverEffect text="mendygo" />
            </AnimatedSection>

            <AnimatedSection
              className="px-4 sm:px-6 pb-0 flex justify-center relative sm:h-[60vh] min-h-[88vh]"
              delay={0.2}
            >
              <div
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 pointer-events-none hidden sm:block"
                style={{
                  background: `radial-gradient(circle at center, rgba(96, 165, 250, 0) 0%, rgba(147, 51, 234, 0) 100%)`,
                  maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                }}
                ref={gradientRef}
              ></div>

              <motion.div
                className="w-full sm:w-[90%] md:w-[80%] h-full relative rounded-t-lg overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 2,
                  rotateX: 2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.98 }}
                onMouseMove={(e) => {
                  if (window.innerWidth >= 640) {
                    const container = e.currentTarget;
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const gradient = gradientRef.current;
                    if (gradient) {
                      gradient.style.background =
                        `radial-gradient(circle at ${x}px ${y}px, rgba(96, 165, 250, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)`;
                      gradient.style.opacity = '1';
                    }
                  }
                }}
                onMouseLeave={() => {
                  if (gradientRef.current) {
                    gradientRef.current.style.opacity = '0';
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="block sm:hidden h-full flex items-center justify-center">
                  <Image
                    src={DashboardLight}
                    alt="Mendygo dashboard"
                    className="w-auto max-w-full min-h-[90vh] max-h-full object-contain rounded-t-lg shadow-lg block dark:hidden transition-transform duration-300"
                    priority
                  />
                  <Image
                    src={DashboardDark}
                    alt="Mendygo dashboard"
                    className="w-auto max-w-full min-h-[90vh] max-h-full object-contain rounded-t-lg shadow-lg hidden dark:block transition-transform duration-300"
                    priority
                  />
                </div>

                <div className="hidden sm:block w-full h-full">
                  <Image
                    src={DashboardLight}
                    alt="Mendygo dashboard"
                    className="w-full h-full object-cover object-top rounded-t-lg shadow-lg block dark:hidden transition-transform duration-300"
                    priority
                  />
                  <Image
                    src={DashboardDark}
                    alt="Mendygo dashboard"
                    className="w-full h-full object-cover object-top rounded-t-lg shadow-lg hidden dark:block transition-transform duration-300"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection
              className="px-4 py-2 sm:py-2 md:py-12"
              delay={0.1}
            >
              <Suspense fallback={<LoadingSkeleton className="h-48" />}>
                <CountdownCard />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              className="text-center max-w-2xl mx-auto px-4 space-y-4 mb-8 sm:mb-12 md:mb-16"
              delay={0.2}
            >
              <motion.h2
                className="text-2xl md:text-2xl font-semibold text-black dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                AI Solutions That Take Your Business to the Next Level
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-black dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We design, develop, and implement automation tools that help you work smarter, not harder.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <Timeline />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              className="relative mt-16 sm:mt-20 md:mt-24 text-center px-4"
              delay={0.1}
            >
              <Badge
                className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#abff02]/30 transition"
              >
                <span className="text-sm font-semibold">Our Process</span>
              </Badge>

              <h1 className="text-2xl md:text-4xl font-bold mt-2">
                Our Simple, Smart, and Scalable Process
              </h1>
              <p className="mt-2 text-black dark:text-white max-w-xl mx-auto">
                We design, develop, and implement automation tools that help you work smarter, not harder.
              </p>
            </AnimatedSection>

            <StaggeredContainer
              className="mt-8 sm:mt-12 md:mt-16 flex flex-col items-center px-4 space-y-6 sm:space-y-8 md:space-y-10"
              delay={0.2}
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
                <StaggeredChild>
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step1 />
                  </Suspense>
                </StaggeredChild>
                <StaggeredChild>
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step2 />
                  </Suspense>
                </StaggeredChild>
              </div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
                <StaggeredChild>
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step3 />
                  </Suspense>
                </StaggeredChild>
                <StaggeredChild>
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step4 />
                  </Suspense>
                </StaggeredChild>
              </div>
            </StaggeredContainer>

            <AnimatedSection
              className="mt-6 sm:mt-8 md:mt-10"
              delay={0.1}
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <Benefits />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              className="mt-8 sm:mt-12 md:mt-16"
              delay={0.2}
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <Faq />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <SignUpForm />
              </Suspense>
            </AnimatedSection>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}