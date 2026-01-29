
"use client";

import React from 'react';

const destinations = [
    { name: "United States", code: "US", coords: { x: 220, y: 130 } },
    { name: "Germany", code: "DE", coords: { x: 480, y: 110 } },
    { name: "China", code: "CN", coords: { x: 740, y: 140 } },
    { name: "Brazil", code: "BR", coords: { x: 300, y: 320 } },
    { name: "Australia", code: "AU", coords: { x: 800, y: 350 } },
    { name: "South Africa", code: "ZA", coords: { x: 500, y: 380 } },
];

export default function ExportDestinations() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3 block">
                        {"// Global Network //"}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Connecting Your Business to the World
                    </h2>
                    <p className="text-lg text-gray-500">
                        Our expansive logistics network covers over 30 countries, ensuring your cargo reaches its destination safely and on time.
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">

                    {/* Abstract World Map SVG Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <svg viewBox="0 0 1000 500" className="w-full h-full text-black fill-current">
                            <path d="M150,120 Q180,100 220,130 T300,320 T200,350 T150,250 Z" /> {/* Americas approx */}
                            <path d="M450,80 Q500,50 550,100 T600,150 T500,380 T450,200 Z" /> {/* Europe/Africa approx */}
                            <path d="M650,100 Q750,80 850,150 T800,350 T700,300 Z" /> {/* Asia/Aus approx */}
                            {/* Simplified blobs for aesthetic map representation since we don't have a real geojson handy */}
                        </svg>
                    </div>

                    {/* Better detailed Dotted Map Pattern Overlay (CSS radial gradient) */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                    </div>

                    {/* Destination Hotspots */}
                    <div className="relative w-full h-full">
                        {destinations.map((dest) => (
                            <div
                                key={dest.code}
                                className="absolute group cursor-pointer"
                                style={{
                                    left: `${(dest.coords.x / 1000) * 100}%`,
                                    top: `${(dest.coords.y / 500) * 100}%`
                                }}
                            >
                                {/* Pulse Effect */}
                                <div className="absolute -inset-4 bg-orange-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Dot */}
                                <div className="relative w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-125 z-10" />

                                {/* Tooltip */}
                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    <div className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl flex flex-col items-center">
                                        <span>{dest.name}</span>
                                        <div className="w-2 h-2 bg-black rotate-45 absolute -bottom-1"></div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Connecting Lines (Decorative) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <path
                                d="M220,130 Q350,-50 480,110"
                                fill="none"
                                stroke="#000"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                className="opacity-10"
                            />
                            <path
                                d="M480,110 Q610,250 740,140"
                                fill="none"
                                stroke="#000"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                className="opacity-10"
                            />
                            <path
                                d="M740,140 Q770,300 800,350"
                                fill="none"
                                stroke="#000"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                className="opacity-10"
                            />
                        </svg>
                    </div>
                </div>

                {/* Categories / Tickers */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
                    {['Global Shipping', 'Warehousing', 'Customs Brokerage', 'Supply Chain Management'].map((tag) => (
                        <div key={tag} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                            <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">{tag}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
