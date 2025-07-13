"use client";
import { useRef, useState, lazy, Suspense, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Hero from "@/components/Home/Hero";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Badge } from "@/components/ui/badge";
import Preloader from "../components/common/Preloader";
import Image from "next/image";
import DashboardDark from '../assets/dashboard-dark.webp'
import DashboardLight from '../assets/dashboard-light.webp'
import CompanySlideshow from "@/components/Home/SlideShow";

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

const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px", amount: 0.3 });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggeredContainer = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px", amount: 0.2 });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StaggeredChild = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative overflow-hidden min-h-screen dark:bg-black bg-white dark:text-white text-black">
      {!isHydrated ? (
        <div className="fixed inset-0 z-50 bg-black" />
      ) : (
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

              <AnimatedSection className="p-4 md:p-8" delay={0.1}>
                <TextHoverEffect text="mendygo" />
              </AnimatedSection>
              <AnimatedSection
                className="px-4 sm:px-6 pb-0 flex justify-center relative"
                delay={0.2}
              >
                <div className="w-full sm:w-[90%] md:w-[80%] mb-16 h-full relative rounded-t-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={DashboardLight}
                      alt="Mendygo dashboard"
                      className="w-full h-full object-cover sm:object-cover object-top rounded-t-lg shadow-lg block dark:hidden"
                      priority
                    />

                    <Image
                      src={DashboardDark}
                      alt="Mendygo dashboard"
                      className="w-full h-full object-cover sm:object-cover object-top rounded-t-lg shadow-lg hidden dark:block"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[37%] sm:h-[15%] pointer-events-none bg-gradient-to-t from-white via-white/90 via-white/70 via-white/40 to-transparent dark:from-black dark:via-black/90 dark:via-black/70 dark:via-black/40 dark:to-transparent rounded-t-lg" />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="px-4 py-0 sm:py-0 md:py-8" delay={0.1}>
                <Suspense fallback={<LoadingSkeleton className="h-48" />}>
                  <CountdownCard />
                </Suspense>
              </AnimatedSection>

              <AnimatedSection
                className="text-center max-w-2xl mx-auto px-4 space-y-4 mb-4 mt-32"
                delay={0.2}
              >
                <h2 className="text-2xl md:text-2xl font-semibold text-black dark:text-white">
                  AI Solutions That Take Your Business to the Next Level
                </h2>
                <p className="text-base md:text-lg text-black dark:text-white">
                  We design, develop, and implement automation tools that help you work smarter, not harder.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Suspense fallback={<LoadingSkeleton className="h-96 mt-72" />}>
                  <Timeline />
                </Suspense>
              </AnimatedSection>

              <AnimatedSection
                className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4"
                delay={0.1}
              >
                <Badge className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#abff02]/30 transition">
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
                className="mt-6 sm:mt-8 px-8 md:mt-8 flex flex-col items-center lg:px-4 space-y-4 sm:space-y-6 md:space-y-6 -ml-6 lg:ml-0"
                delay={0.2}
              >
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
                  <StaggeredChild>
                    <Suspense fallback={<LoadingSkeleton className="h-64 w-full" />}>
                      <Step1 />
                    </Suspense>
                  </StaggeredChild>
                  <StaggeredChild>
                    <Suspense fallback={<LoadingSkeleton className="h-64 w-full" />}>
                      <Step2 />
                    </Suspense>
                  </StaggeredChild>
                </div>
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full max-w-6xl justify-center">
                  <StaggeredChild className="">
                    <Suspense fallback={<LoadingSkeleton className="h-64 w-full" />}>
                      <Step3 />
                    </Suspense>
                  </StaggeredChild>
                  <StaggeredChild className="">
                    <Suspense fallback={<LoadingSkeleton className="h-64 w-full" />}>
                      <Step4 />
                    </Suspense>
                  </StaggeredChild>
                </div>
              </StaggeredContainer>

              <AnimatedSection className="mt-6 sm:mt-8 md:mt-8" delay={0.1}>
                <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                  <Benefits />
                </Suspense>
              </AnimatedSection>

              <AnimatedSection
                className="relative mt-8 sm:mt-12 md:mt-12 text-center px-4"
                delay={0.1}
              >
                <Badge className="backdrop-blur-md bg-[#abff02]/20 border border-white/20 text-black dark:text-white mx-auto mb-4 hover:shadow-lg hover:shadow-[#abff02]/30 transition">
                  <span className="text-sm font-semibold">Our Partners</span>
                </Badge>

                <h1 className="text-2xl md:text-4xl font-bold mt-2">
                  Trusted by the Best in the Industry
                </h1>
                <p className="mt-2 text-black dark:text-white max-w-xl mx-auto">
                  We are proud to be the automation partner of top-tier automotive and tech companies across the globe.
                </p>

                <CompanySlideshow />
              </AnimatedSection>


              <AnimatedSection className="mt-6 sm:mt-8 md:mt-8" delay={0.2}>
                <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                  <Faq />
                </Suspense>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Suspense fallback={<LoadingSkeleton className="h-96" />}>
                  <SignUpForm />
                </Suspense>
              </AnimatedSection>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}