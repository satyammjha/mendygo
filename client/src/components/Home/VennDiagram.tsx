"use client";

import { useState } from "react";
import {
    PlugZap,
    DownloadCloud,
    Share2,
    BarChart3,
    LineChart,
    Wand2,
} from "lucide-react";
import logo from '../../assets/logo.png'

const icons = [
    PlugZap,
    DownloadCloud,
    Share2,
    BarChart3,
    LineChart,
    Wand2,
];

export default function VennDiagram() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const center = { cx: 350, cy: 350 };
    const ellipseRx = 160;
    const ellipseRy = 100;
    const outerCircleRadius = 260;

    const labels = [
        { title: "Mendygo", id: 0, ...center },
        { title: "Connect", id: 1 },
        { title: "Collect", id: 2 },
        { title: "Integrate", id: 3 },
        { title: "Report", id: 4 },
        { title: "Analyze", id: 5 },
        { title: "Optimize", id: 6 },
    ];

    return (
        <div className="flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 700 700"
                    className="text-black dark:text-gray-300 w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <circle
                        cx={center.cx}
                        cy={center.cy}
                        r={outerCircleRadius}
                        fill="none"
                        stroke="#abff02"
                        strokeWidth="1.6"
                        className="opacity-20"
                        filter="url(#glow)"
                    />

                    <circle
                        cx={center.cx}
                        cy={center.cy}
                        r="40"
                        fill="transparent"
                        stroke="none"
                        onMouseEnter={() => setHoverIndex(-1)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="transition-all duration-300 cursor-pointer"
                    />
                    <circle
                        cx={center.cx}
                        cy={center.cy}
                        r="40"
                        fill="none"
                        stroke="#abff02"
                        strokeWidth={hoverIndex === -1 ? 2.5 : 1.5}
                        className={`transition-all duration-300 pointer-events-none ${hoverIndex === -1 ? "animate-pulse" : ""
                            }`}
                        filter="url(#glow)"
                    />

                    <image
                        x={center.cx - 20}
                        y={center.cy - 20}
                        width="40"
                        height="40"
                        href="/logo.png"
                        className="pointer-events-none"
                    />

                    {labels.slice(1).map((label, index) => {
                        const angle = (index * 60 * Math.PI) / 180;
                        const orbitRadius = outerCircleRadius - ellipseRy;
                        const x = center.cx + Math.cos(angle) * orbitRadius;
                        const y = center.cy + Math.sin(angle) * orbitRadius;
                        const Icon = icons[index];

                        return (
                            <g key={label.id}>
                                <ellipse
                                    cx={center.cx}
                                    cy={center.cy}
                                    rx={ellipseRx}
                                    ry={ellipseRy}
                                    transform={`rotate(${index * 60}, ${center.cx}, ${center.cy})`}
                                    fill="transparent"
                                    stroke="none"
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    className="transition-all duration-300 cursor-pointer"
                                />

                                <ellipse
                                    cx={center.cx}
                                    cy={center.cy}
                                    rx={ellipseRx}
                                    ry={ellipseRy}
                                    transform={`rotate(${index * 60}, ${center.cx}, ${center.cy})`}
                                    fill="none"
                                    stroke="#abff02"
                                    strokeWidth={hoverIndex === index ? 2.5 : 1.5}
                                    strokeOpacity={hoverIndex === index ? 0.8 : 0.4}
                                    className={`transition-all duration-300 pointer-events-none ${hoverIndex === index ? "animate-pulseBorder" : ""
                                        }`}
                                    filter="url(#glow)"
                                />

                                <foreignObject
                                    x={x - 70}
                                    y={y - 15}
                                    width={140}
                                    height={30}
                                    className="pointer-events-none"
                                >
                                    <div className="flex items-center justify-center gap-1 text-sm text-center text-current font-medium">
                                        <Icon className="w-4 h-4" />
                                        <span>{`0${label.id + 1} ${label.title}`}</span>
                                    </div>
                                </foreignObject>
                            </g>
                        );
                    })}
                </svg>
            </div>

            <style jsx>{`
        @keyframes pulseBorder {
          0% {
            stroke-width: 1.5;
          }
          50% {
            stroke-width: 3;
          }
          100% {
            stroke-width: 1.5;
          }
        }

        .animate-pulseBorder {
          animation: pulseBorder 1.5s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}