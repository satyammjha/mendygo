'use client'
import { useEffect, useState } from 'react';

const Step4 = () => {
    const [animationStates, setAnimationStates] = useState([false, false, false]);
    const [progressValues, setProgressValues] = useState([20, 0, 100]);

    const systems = [
        {
            name: 'Chatbot',
            status: '↻',
            baseText: 'Efficiency',
            animating: true
        },
        {
            name: 'Workflow',
            status: '↓',
            baseText: 'Update available',
            animating: true
        },
        {
            name: 'Sales',
            status: '✓',
            baseText: 'Up to date',
            animating: false
        },
    ];

    useEffect(() => {
        const chatbotInterval = setInterval(() => {
            setAnimationStates(prev => [!prev[0], prev[1], prev[2]]);
        }, 1500);

        const workflowInterval = setInterval(() => {
            setAnimationStates(prev => [prev[0], !prev[1], prev[2]]);
        }, 2000);

        const progressInterval = setInterval(() => {
            setProgressValues(prev => [
                prev[0] >= 35 ? 20 : prev[0] + 1,
                prev[1],
                prev[2]
            ]);
        }, 100);

        return () => {
            clearInterval(chatbotInterval);
            clearInterval(workflowInterval);
            clearInterval(progressInterval);
        };
    }, []);

    const getStatusText = (index: number) => {
        switch (index) {
            case 0:
                return `Efficiency +${progressValues[0]}%`;
            case 1:
                return animationStates[1] ? 'Downloading...' : 'Update available';
            case 2:
                return 'Up to date';
            default:
                return '';
        }
    };

    const getProgressBar = (index: number) => {
        if (index === 1 && animationStates[1]) {
            return (
                <div className="w-full h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-[#abff02] rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-[#0a0a0a] text-white p-6 w-[26rem] h-80 rounded-xl shadow-xl flex flex-col">
            <div className="flex flex-col mb-6">
                <span className="bg-white/10 text-white px-2 py-1 text-xs rounded-md self-start mb-2">
                    Step 4
                </span>
                <h2 className="text-xl font-bold mb-1">Optimization</h2>
                <p className="text-gray-300 text-xs leading-tight">
                    Continuous monitoring and improvement.
                </p>
            </div>

            <div className="flex-1 space-y-1">
                {systems.map((system, i) => (
                    <div key={i} className="border border-white/30 rounded-md p-1 hover:bg-white/5 transition-all duration-300 hover:border-[#abff02]/30">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium">{system.name} system</p>
                                <p className={`text-xs transition-all duration-300 ${i === 1 && animationStates[1] ? 'text-[#abff02]' : 'text-white/70'
                                    }`}>
                                    {getStatusText(i)}
                                </p>
                                {getProgressBar(i)}
                            </div>
                            <div className="ml-4 relative">
                                <span className={`text-lg text-[#abff02] transition-all duration-300 inline-block ${i === 0 && animationStates[0] ? 'animate-spin' : ''
                                    } ${i === 1 && animationStates[1] ? 'animate-bounce' : ''
                                    } ${i === 2 ? 'hover:scale-110' : ''
                                    }`}>
                                    {system.status}
                                </span>
                                {i === 0 && (
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#abff02] rounded-full animate-pulse"></div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes progress {
                    0% {
                        width: 0%;
                        transform: translateX(-100%);
                    }
                    50% {
                        width: 100%;
                        transform: translateX(0%);
                    }
                    100% {
                        width: 100%;
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Step4;