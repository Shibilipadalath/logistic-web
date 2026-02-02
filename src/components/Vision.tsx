import React from "react";
import Image from "next/image";

export default function Vision() {
    return (
        <section className="py-24 bg-[#FDF8F4]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Image */}
                <div className="relative w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image
                        src="/service1.png" // Reusing an existing ship image
                        alt="Logistic Ship"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl md:leading-[1.15] font-semibold text-[#3d2b1f] mb-8">
                        Revolutionizing supply chains with accuracy, our logistics company
                        provides flawless solutions, enhancing dependability
                    </h2>
                </div>
            </div>
        </section>
    );
}
