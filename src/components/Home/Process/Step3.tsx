import { useEffect, useState } from 'react';

const Step3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const icons = ['📧', '💬', '📱', '💼'];
    const labels = ['Gmail', 'Slack', 'WhatsApp', 'Teams'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((i) => (i + 1) % icons.length);
                setIsTransitioning(false);
            }, 200);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#0a0a0a] text-white p-6 w-[26rem] h-80 rounded-xl shadow-xl flex flex-col">
            <div className="flex flex-col mb-6">
                <span className="bg-white/10 text-white px-2 py-1 text-xs rounded-md self-start mb-2">
                    Step 3
                </span>
                <h2 className="text-xl font-bold mb-1">Integration</h2>
                <p className="text-gray-300 text-xs leading-tight">
                    Seamless integration with your tools.
                </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <div className="flex items-center justify-between w-full max-w-48">

                    <div className="flex flex-col items-center">
                        <div className="bg-[#abff02]/10 p-3 rounded-lg mb-1">
                            <div className="w-8 h-8 bg-[#abff02] rounded flex items-center justify-center text-black font-bold text-sm">
                                AI
                            </div>
                        </div>
                        <span className="text-xs text-white/70">Our solution</span>
                    </div>

                    <div className="flex-1 relative mx-4">
                        <div className="h-px bg-white/10 w-full"></div>
                        <div className="absolute top-0 left-0 h-px bg-[#abff02] animate-[flow_2s_ease-in-out_infinite]"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className={`bg-[#abff02] p-3 rounded-lg mb-1 transition-all duration-300 transform ${isTransitioning ? 'scale-90 opacity-70' : 'scale-100 opacity-100'
                            }`}>
                            <div className={`w-8 h-8 flex items-center justify-center text-xl transition-all duration-300 ${isTransitioning ? 'scale-75' : 'scale-100'
                                }`}>
                                {icons[currentIndex]}
                            </div>
                        </div>
                        <span className={`text-xs text-white/70 transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-70'
                            }`}>
                            {labels[currentIndex]}
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes flow {
                    0% {
                        width: 0%;
                        opacity: 1;
                    }
                    50% {
                        width: 100%;
                        opacity: 1;
                    }
                    100% {
                        width: 100%;
                        opacity: 0.3;
                    }
                }
            `}</style>
        </div>
    );
};

export default Step3;