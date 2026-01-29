
import React from 'react';

export default function About() {
    return (
        <section className="py-24 bg-white text-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">

                {/* Left Side: Label + Graphic */}
                <div className="relative flex flex-col justify-between h-full min-h-[300px]">
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                        {"// About Us //"}
                    </span>

                    {/* Faded Background Graphic mimicking the silhouette */}
                    <div className="absolute inset-0 top-10 flex items-center justify-center pointer-events-none opacity-[0.03]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto max-w-[400px]">
                            <path d="M2 16c0-3 2-5 5-5h10c3 0 5 2 5 5v2H2v-2z" />
                            <path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
                            <path d="M12 2v3" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-12">
                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-gray-400">
                        At <span className="text-black font-semibold">Swifthub</span>, We combine logistics <span className="text-black font-semibold">expertise</span> and digital innovation to deliver cargo with speed, confidence, and impact worldwide.
                    </h2>

                    {/* Divider */}
                    <div className="h-px w-full bg-gray-200" />

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold flex items-baseline gap-1">
                                15+ <span className="text-2xl text-gray-400 font-medium">YR</span>
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">of shipping expertise</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold flex items-baseline gap-1">
                                30+ <span className="text-2xl text-gray-400 font-medium">CO</span>
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">Countries Covered</p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold flex items-baseline gap-1">
                                60K+ <span className="text-2xl text-gray-400 font-medium">TN</span>
                            </h3>
                            <p className="text-gray-500 text-sm font-medium">Cargo handled worldwide</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
