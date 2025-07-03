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

            <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-purple-300 via-blue-200/20 to-purple-500 opacity-40 blur-3xl rounded-full dark:from-purple-500 dark:via-white/10 dark:to-purple-900 dark:opacity-75"></div>
            </div>

            <Card className="relative bg-white/95 text-gray-900 rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 overflow-hidden backdrop-blur-sm dark:bg-black dark:text-white dark:border-white/10">

                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl">
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 via-purple-300 to-transparent opacity-60 animate-pulse dark:from-purple-500 dark:via-purple-400 dark:to-transparent dark:opacity-80"></div>
                        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-purple-400 via-purple-300 to-transparent opacity-60 animate-pulse dark:from-purple-500 dark:via-purple-400 dark:to-transparent dark:opacity-80"></div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-200/30 via-blue-100/20 to-transparent animate-pulse opacity-20 dark:from-purple-500/20 dark:via-transparent dark:to-transparent dark:opacity-30"></div>
                    </div>
                </div>


                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white/90 to-gray-50/80 rounded-2xl dark:from-purple-900/20 dark:via-black dark:to-black"></div>

                <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full border px-3 py-1 text-xs sm:text-sm border-gray-300 bg-white/80 backdrop-blur-sm dark:border-white/20 dark:bg-white/5">
                            <span className="text-purple-500 mr-2 animate-pulse dark:text-purple-400">•</span>
                            <span className="text-gray-700 dark:text-white">
                                Available in{" "}
                                <span className="text-purple-600 font-semibold dark:text-purple-300">JULY 2025</span>
                            </span>
                        </div>
                    </div>

                    <h2 className="text-center text-xl sm:text-2xl font-semibold mb-1 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                        Get Early Access
                    </h2>
                    <p className="text-center text-gray-600 mb-4 sm:mb-5 text-xs sm:text-sm dark:text-gray-400">
                        Obtain early access and remain informed about release announcements.
                    </p>


                    <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-3 text-center">
                        {[
                            { label: "DAYS", value: timeLeft.days.toString().padStart(2, "0") },
                            { label: "HOURS", value: timeLeft.hours.toString().padStart(2, "0") },
                            { label: "MINUTES", value: timeLeft.minutes.toString().padStart(2, "0") },
                            { label: "SECONDS", value: timeLeft.seconds.toString().padStart(2, "0") },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/90 rounded-lg py-2 sm:py-3 backdrop-blur-md border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm dark:bg-black dark:border-white/5 dark:hover:bg-white/15"
                            >
                                <div className="text-lg sm:text-xl font-bold text-gray-900 transition-all duration-300 dark:text-white">
                                    {item.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-600 mt-1 dark:text-gray-300">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 text-gray-600 text-xs sm:text-sm dark:text-gray-400">
                        <CalendarDays className="w-4 h-4" />
                        LEFT UNTIL FULL RELEASE
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder="Your mail address"
                            className="w-full rounded-lg px-3 py-2 text-xs sm:text-sm bg-white/70 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/40 backdrop-blur-sm transition-all duration-300 dark:bg-black/30 dark:border-white/10 dark:text-white dark:placeholder:text-gray-400 dark:focus:ring-purple-500/50 dark:focus:border-purple-500/40"
                        />
                    </div>

                    <Button
                        borderRadius="9999px"
                        duration={4000}
                        containerClassName="w-full mt-3"
                        borderClassName="bg-[radial-gradient(#abff02_40%,transparent_60%)]"
                        className="w-full h-12 sm:h-14 text-white font-bold text-sm sm:text-base bg-gray-900/90 border-none dark:bg-[#000000a7]"
                    >
                        Sign up
                    </Button>

                    <Tooltip />
                </div>
            </Card>
        </div>
    );
};

export default CountdownCard;