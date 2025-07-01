import React, { useEffect, useState } from 'react';

// Step 1 Component
const Step1 = () => {
    const analyzingSteps = [
        { icon: '🛡️', label: 'System check' },
        { icon: '⚙️', label: 'Process check' },
        { icon: '⏱️', label: 'Speed check' },
        { icon: '📋', label: 'Manual work' },
        { icon: '🔄', label: 'Repetitive task' },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white p-6 w-90 h-80 rounded-xl shadow-xl flex flex-col">

            <div className="flex flex-col mb-4">
                <span className="bg-white/10 text-white px-2 py-1 text-xs rounded-md self-start mb-2">
                    Step 1
                </span>
                <h2 className="text-xl font-bold mb-1">Smart Analyzing</h2>
                <p className="text-gray-300 text-xs leading-tight">
                    We assess your needs and identify AI solutions.
                </p>
            </div>
            <div className="flex">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative w-32 h-32 mb-2">
                        <div className="absolute inset-0 rounded-full border border-white/20 bg-black/50">

                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-full border border-white/10"
                                    style={{
                                        width: `${(i * 100) / 3}%`,
                                        height: `${(i * 100) / 3}%`,
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                />
                            ))}

                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                <div
                                    className="absolute w-full h-full animate-spin"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent 0deg, #abff02aa 20deg, transparent 40deg)',
                                        animationDuration: '3s',
                                    }}
                                />
                            </div>

                            <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#abff02] rounded-full transform -translate-x-1/2 -translate-y-1/2" />

                            <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ top: '25%', left: '70%' }} />
                            <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ top: '60%', left: '30%', animationDelay: '0.5s' }} />
                            <div className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ top: '75%', left: '65%', animationDelay: '1s' }} />
                        </div>
                    </div>
                    <p className="text-xs text-white/70">Analyzing workflow...</p>
                </div>

                <div className="space-y-1">
                    {analyzingSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-2 py-1 border border-white/10 rounded text-xs hover:bg-white/5 transition">
                            <span className="text-[#abff02]">{step.icon}</span>
                            <span className="text-white/90">{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Step1;