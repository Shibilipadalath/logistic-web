"use client";

import React from "react";
import Image from "next/image";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function PageBanner({
    title,
    subtitle,
    backgroundImage = "/image.png", // Default fallback
}: PageBannerProps) {
    return (
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6 animate-fade-in-up">
                {subtitle && (
                    <span className="px-4 py-1 rounded-full border border-[#D4AF37]/30 bg-black/30 backdrop-blur-sm text-[#F4C430] font-bold tracking-[0.2em] uppercase text-xs md:text-sm shadow-sm">
                        {subtitle}
                    </span>
                )}
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
                    {title}
                </h1>
                {/* Decorative Line */}
                <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full opacity-80" />
            </div>
        </section>
    );
}
