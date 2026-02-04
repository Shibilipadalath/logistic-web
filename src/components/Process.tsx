import React from "react";

const steps = [
  {
    number: "01",
    title: "Sourcing",
    description:
      "We locate and procure the highest quality goods from our trusted global network of suppliers.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Packaging",
    description:
      "Expert handling and secure packaging ensure your items remain safe throughout their journey.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Shipping",
    description:
      "Fast and reliable global shipping with real-time tracking updates until final delivery.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 16c0-3 2-5 5-5h10c3 0 5 2 5 5v2H2v-2z" />
        <path d="M7 11V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
        <path d="M2 20h20" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#B8860B] font-bold tracking-widest uppercase text-sm mb-3 block">
              {"// How It Works //"}
            </span>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight">
              Simplified logistics in <br />
              <span className="text-gray-500">three easy steps.</span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-sm text-lg relative -top-10">
            From source to destination, we handle every detail with precision
            and care.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[85px] left-0 w-full h-px bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-full border border-gray-700 bg-gray-900 flex items-center justify-center mb-8 hover:bg-gradient-to-r hover:from-[#B8860B] hover:to-[#8B5E00]  transition-all duration-300 shadow-xl">
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
              </div>

              {/* Number */}
              <span className="text-6xl font-bold text-[#B8860B] absolute top-4 right-50 opacity-75 select-none group-hover:text-[#8B5E00] transition-colors">
                {step.number}
              </span>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
