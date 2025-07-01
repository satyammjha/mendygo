"use client";
import React from "react";
import WorldMap from "@/components/ui/world-map";

export function SignUpForm() {
    return (
        <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
            <div className="max-w-2xl mx-auto px-4 w-full z-10 animate-fade-in">
                <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold transition-all duration-500 ease-in-out">
                    Join the waitlist
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-3 text-sm text-center transition-opacity duration-700 delay-100">
                    Signup to access all our mendygo features and be the first to know when we launch.
                </p>

                <form className="space-y-3 mt-6 w-full max-w-md mx-auto 
          bg-black/40 backdrop-blur-lg p-6 rounded-2xl 
          border border-white/10 shadow-[0_4px_60px_rgba(0,0,0,0.3)] z-10 relative ring-1 ring-white/5"
                >
                    <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition duration-300 ease-in-out"
                    />
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition duration-300 ease-in-out"
                    />
                    <input
                        type="tel"
                        placeholder="Phone (optional)"
                        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#abff02] transition duration-300 ease-in-out"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#abff02] text-black font-semibold py-2 rounded-lg hover:brightness-110 transition duration-300 ease-in-out"
                    >
                        Join Now
                    </button>
                </form>
            </div>

            <div className="absolute inset-0 z-0">
                <WorldMap
                    lineColor="#abff02"
                    dots={[
                        { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 40.7128, lng: -74.0060 } },
                        { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 55.7558, lng: 37.6173 } },
                        { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: -33.8688, lng: 151.2093 } },
                        { start: { lat: 19.0760, lng: 72.8777 }, end: { lat: 1.3521, lng: 103.8198 } },
                        { start: { lat: 22.5726, lng: 88.3639 }, end: { lat: 35.6762, lng: 139.6503 } },
                        { start: { lat: 13.0827, lng: 80.2707 }, end: { lat: -1.2921, lng: 36.8219 } },
                        { start: { lat: 13.0827, lng: 80.2707 }, end: { lat: 25.276987, lng: 55.296249 } },
                        { start: { lat: 26.1445, lng: 91.7362 }, end: { lat: 39.9042, lng: 116.4074 } },
                    ]}
                />
            </div>
        </div>
    );
}