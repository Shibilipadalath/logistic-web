import React from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Fast & Secure Delivery",
    description:
      "We prioritize speed and safety, making sure your goods arrive on time and in perfect condition.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Custom Shipping Plans",
    description:
      "Every business is different. We tailor logistics strategies that fit your timeline, budget, and requirements.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "24/7 Tracking & Support",
    description:
      "Stay informed with real-time shipment tracking and dedicated customer support whenever you need it.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-10 mx-auto max-w-[1400px] px-4 md:px-6">
      <div className="relative rounded-xl overflow-hidden min-h-[600px] bg-slate-900">
        {/* Background Image */}
        <Image
          src="/whychoose.png"
          alt="Logistics Operations"
          fill
          className="object-cover opacity-60"
        />

        {/* Content Container */}
        <div className="relative z-10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full">
          {/* Left Side */}
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase block mb-4">
                {"// Why Choose Us //"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                WHY BUSINESSES <span className="text-brand-primary">CHOOSE US</span> FOR THEIR LOGISTICS
              </h2>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#B8860B] to-[#8B5E00] text-white px-8 py-3.5 rounded-full font-bold hover:bg-brand-secondary transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 flex items-start gap-6 shadow-lg hover:translate-x-2 transition-transform duration-300 hover:ring-2 hover:ring-brand-secondary border border-transparent"
              >
                <div className="p-3 bg-brand-primary/10 text-[#B8860B] rounded-2xl shrink-0">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
