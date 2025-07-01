import { Card } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/moving-border";
import Tooltip from "./ToolTip";

const CountdownCard = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 17,
        hours: 20,
        minutes: 41,
        seconds: 3,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[80vh] mx-auto px-2 sm:px-4">
            {/* Background glow circle */}
            <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-purple-500 via-white/10 to-purple-900 opacity-75 blur-3xl rounded-full"></div>
            </div>

            <Card className="relative bg-black text-white rounded-2xl shadow-2xl border border-white/10 p-4 sm:p-6 overflow-hidden">
                {/* Pulsing border effects */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-transparent opacity-80 animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-purple-500 via-purple-400 to-transparent opacity-80 animate-pulse"></div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-transparent animate-pulse opacity-30"></div>
                    </div>
                </div>

                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black rounded-2xl"></div>

                <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full border px-3 py-1 text-xs sm:text-sm border-white/20 bg-white/5 backdrop-blur-sm">
                            <span className="text-purple-400 mr-2 animate-pulse">•</span>
                            <span>
                                Available in{" "}
                                <span className="text-purple-300 font-semibold">JULY 2025</span>
                            </span>
                        </div>
                    </div>

                    <h2 className="text-center text-xl sm:text-2xl font-semibold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Get Early Access
                    </h2>
                    <p className="text-center text-gray-400 mb-4 sm:mb-5 text-xs sm:text-sm">
                        Obtain early access and remain informed about release announcements.
                    </p>

                    {/* Countdown timer */}
                    <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-3 text-center">
                        {[
                            { label: "DAYS", value: timeLeft.days.toString().padStart(2, "0") },
                            { label: "HOURS", value: timeLeft.hours.toString().padStart(2, "0") },
                            { label: "MINUTES", value: timeLeft.minutes.toString().padStart(2, "0") },
                            { label: "SECONDS", value: timeLeft.seconds.toString().padStart(2, "0") },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-black rounded-lg py-2 sm:py-3 backdrop-blur-md border border-white/5 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="text-lg sm:text-xl font-bold text-white transition-all duration-300">
                                    {item.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-300 mt-1">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 text-gray-400 text-xs sm:text-sm">
                        <CalendarDays className="w-4 h-4" />
                        LEFT UNTIL FULL RELEASE
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Your mail address"
                            className="w-full rounded-lg px-3 py-2 text-xs sm:text-sm bg-black/30 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/40 backdrop-blur-sm transition-all duration-300"
                        />
                    </div>

                    <Button
                        borderRadius="9999px"
                        duration={4000}
                        containerClassName="w-full mt-3"
                        borderClassName="bg-[radial-gradient(#abff02_40%,transparent_60%)]"
                        className="w-full h-12 sm:h-14 text-white font-bold text-sm sm:text-base bg-[#000000a7] dark:bg-black border-none"
                    >
                        Sign up
                    </Button>

                    <Tooltip />
                </div>
            </Card>
        </div>
    );
};

export default CountdownCard