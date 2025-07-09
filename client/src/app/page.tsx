"use client";
import { useRef, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import Preloader from "../components/common/Preloader";
import Image from "next/image";
import DashboardDark from '../assets/dashboard-dark.png'
import DashboardLight from '../assets/dashboard-light.png'

const CountdownCard = lazy(() => import("@/components/Home/CountdownCard"));
const Faq = lazy(() => import("@/components/Home/Faq"));
const Hero = lazy(() => import("@/components/Home/Hero"));
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

import type { Variants, Transition } from "framer-motion";

type AnimationType =
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "fade"
  | "scale"
  | "rotate"
  | "bounce"
  | "elastic"
  | "glitch"
  | "float";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animationType?: AnimationType;
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  animationType = "slideUp",
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.3,
  });

  const getAnimationVariants = (): Variants => {
    switch (animationType) {
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 80, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "slideDown":
        return {
          hidden: { opacity: 0, y: -80, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: -100, rotateY: -15 },
          visible: { opacity: 1, x: 0, rotateY: 0 },
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: 100, rotateY: 15 },
          visible: { opacity: 1, x: 0, rotateY: 0 },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.7 },
          visible: { opacity: 1, scale: 1 },
        };
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -15, scale: 0.8 },
          visible: { opacity: 1, rotate: 0, scale: 1 },
        };
      case "bounce":
        return {
          hidden: { opacity: 0, y: 100, scale: 0.8 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "elastic":
        return {
          hidden: { opacity: 0, scale: 0.3, rotate: -180 },
          visible: { opacity: 1, scale: 1, rotate: 0 },
        };
      case "glitch":
        return {
          hidden: {
            opacity: 0,
            x: -20,
            y: 20,
            scale: 0.9,
            skewX: 10,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            skewX: 0,
            filter: "blur(0px)",
          },
        };
      case "float":
        return {
          hidden: { opacity: 0, y: 60, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
    }
  };

  const variants = getAnimationVariants();

  const getTransition = (): Transition => {
    switch (animationType) {
      case "bounce":
        return {
          duration: 0.8,
          delay,
          type: "spring",
          stiffness: 400,
          damping: 10,
        };
      case "elastic":
        return {
          duration: 1.2,
          delay,
          type: "spring",
          stiffness: 200,
          damping: 8,
        };
      case "glitch":
        return {
          duration: 0.6,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        };
      case "float":
        return {
          duration: 1.0,
          delay,
          type: "spring",
          stiffness: 80,
          damping: 12,
        };
      default:
        return {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15,
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={getTransition()}
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
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay
          }
        }
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
  animationType?: AnimationType;
};

const StaggeredChild = ({ children, className = "", animationType = "slideUp" }: StaggeredChildProps) => {
  const getChildVariants = () => {
    switch (animationType) {
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: -50, scale: 0.9 },
          visible: { opacity: 1, x: 0, scale: 1 }
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: 50, scale: 0.9 },
          visible: { opacity: 1, x: 0, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 30, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 }
        };
    }
  };

  return (
    <motion.div
      variants={getChildVariants()}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15
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
            minimumDuration={2500}
          />
        )}

        {!isLoading && (
          <motion.div
            key="main-site"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Suspense fallback={<LoadingSkeleton className="h-screen" />}>
              <Hero />
            </Suspense>

            <AnimatedSection
              className="p-4 md:p-8"
              animationType="glitch"
              delay={0.1}
            >
              <TextHoverEffect text="mendygo" />
            </AnimatedSection>

            <AnimatedSection
              className="px-4 sm:px-6 pb-0 flex justify-center relative sm:h-[60vh] min-h-[88vh]"
              delay={0.2}
              animationType="float"
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
              animationType="slideLeft"
            >
              <Suspense fallback={<LoadingSkeleton className="h-48" />}>
                <CountdownCard />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              className="text-center max-w-2xl mx-auto px-4 space-y-4 mb-8 sm:mb-12 md:mb-16"
              delay={0.2}
              animationType="bounce"
            >
              <motion.h2
                className="text-2xl md:text-2xl font-semibold text-black dark:text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                AI Solutions That Take Your Business to the Next Level
              </motion.h2>
              <motion.p
                className="text-base md:text-lg text-black dark:text-white"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                We design, develop, and implement automation tools that help you work smarter, not harder.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
              animationType="slideRight"
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <Timeline />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              className="relative mt-16 sm:mt-20 md:mt-24 text-center px-4"
              delay={0.1}
              animationType="elastic"
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
                <StaggeredChild animationType="slideLeft">
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step1 />
                  </Suspense>
                </StaggeredChild>
                <StaggeredChild animationType="slideRight">
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step2 />
                  </Suspense>
                </StaggeredChild>
              </div>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
                <StaggeredChild animationType="slideLeft">
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step3 />
                  </Suspense>
                </StaggeredChild>
                <StaggeredChild animationType="slideRight">
                  <Suspense fallback={<LoadingSkeleton className="h-64 w-full md:w-1/2" />}>
                    <Step4 />
                  </Suspense>
                </StaggeredChild>
              </div>
            </StaggeredContainer>

            <AnimatedSection
              className="mt-6 sm:mt-8 md:mt-10"
              delay={0.1}
              animationType="rotate"
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <Benefits />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              className="mt-8 sm:mt-12 md:mt-16"
              delay={0.2}
              animationType="slideLeft"
            >
              <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                <Faq />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
              animationType="glitch"
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