import React from "react";
import Image from "next/image";

export default function Vision() {
    return (
        <section className="py-24 bg-brand-beige/20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Image */}
                <div className="relative w-full h-[500px] rounded-[18px] overflow-hidden shadow-2xl">
                    <Image
                        src="/service1.png" // Reusing an existing ship image
                        alt="Logistic Ship"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                        Revolutionizing <span className="text-brand-primary">supply chains</span> with accuracy and flawless solutions.
                    </h2>
                </div>
            </div>
        </section>
    );
}
