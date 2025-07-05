'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
    Link,
    Database,
    Settings2,
    FileBarChart2,
    SearchCode,
    Settings,
    ArrowRight,
} from 'lucide-react';
import logo from '../../assets/logo.png';

const Timeline = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const steps = [
        {
            title: 'Connect',
            icon: Link,
            slug: 'connect',
            description: 'Establish seamless connections with your data sources and systems',
        },
        {
            title: 'Collect',
            icon: Database,
            slug: 'collect',
            description: 'Gather and centralize all your critical business information',
        },
        {
            title: 'Integrate',
            icon: Settings2,
            slug: 'integrate',
            description: 'Merge disparate systems into a unified, coherent ecosystem',
        },
        {
            title: 'Report',
            icon: FileBarChart2,
            slug: 'report',
            description: 'Generate comprehensive reports and actionable insights',
        },
        {
            title: 'Analyze',
            icon: SearchCode,
            slug: 'analyze',
            description: 'Deep dive into data patterns and discover hidden opportunities',
        },
        {
            title: 'Optimize',
            icon: Settings,
            slug: 'optimize',
            description: 'Fine-tune processes for maximum efficiency and performance',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-black dark:to-black flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        How do we do?
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        "In a world filled with challenges, solutions can be—simple or complex, and we consistently choose the path of simplicity"
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative flex items-center justify-center">
                        <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                            <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-2xl border border-white/30 dark:border-white/10 shadow-lg shadow-black/10 dark:shadow-black/20">
                                <div className="w-full h-full rounded-full flex items-center justify-center">
                                    <Image
                                        src={logo}
                                        alt="MENDYGO"
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {steps.map((step, index) => {
                                const IconComponent = step.icon;
                                const angle = (index * 60) - 90;
                                const radius = 200;
                                const x = Math.cos(angle * Math.PI / 180) * radius;
                                const y = Math.sin(angle * Math.PI / 180) * radius;

                                return (
                                    <div
                                        key={step.slug}
                                        className={`absolute transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
                                        style={{
                                            left: `calc(50% + ${x}px)`,
                                            top: `calc(50% + ${y}px)`,
                                            transform: 'translate(-50%, -50%)',
                                            animationDelay: `${0.3 + (0.2 * index)}s`
                                        }}
                                    >
                                        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                                                    <IconComponent className="w-4 h-4 text-black dark:text-white" />
                                                </div>
                                                <span className="text-black dark:text-white font-medium text-sm hidden sm:inline">
                                                    {step.title}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/10 dark:border-white/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                            <div className="absolute inset-4 rounded-full border border-white/10 dark:border-white/20"></div>
                            <div className="absolute inset-8 rounded-full border border-white/5 dark:border-white/10"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <NextLink href={`/timeline/${step.slug}`} key={step.slug}>
                                    <div
                                        className={`group relative bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-white/20 dark:hover:bg-black/20`}
                                    >
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Step {index + 1} of our process
                                            </p>
                                        </div>

                                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 text-gray-900 dark:text-white" />
                                        </div>

                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                </NextLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;