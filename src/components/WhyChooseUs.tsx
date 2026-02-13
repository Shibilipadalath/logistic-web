import React from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Hygienic Handling",
    description:
      "Strict control measures throughout processing to ensure the highest hygiene standards.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Temperature-Controlled",
    description:
      "Advanced storage solutions to maintain optimal temperature and product freshness.",
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
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    title: "Safe & Compliant",
    description:
      "Secure packaging and full adherence to international export regulations.",
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
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
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
              <span className="text-sm font-bold tracking-widest text-white/70 uppercase block mb-4">
                {"// Quality Assurance //"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                OUR COMMITMENT <span className="text-brand-primary">TO QUALITY</span> ACROSS ALL OPERATIONS
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
                  <h3 className="text-lg font-semibold text-gray-900">
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
