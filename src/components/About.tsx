import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-8 bg-white text-brand-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
        {/* Left Side: Label + Graphic */}
        <div className="flex flex-col h-full">
          <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase mb-8 block">
            {"// About Us //"}
          </span>

          <div className="relative w-full flex-grow min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100 hover:shadow-[0_20px_50px_-12px_rgba(184,134,11,0.3)] transition-all duration-500">
            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src="/service1.png"
              alt="Logistics Operations"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-12 mt-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight text-gray-500">
            At <span className="text-brand-black font-semibold">Fizan</span>, We
            combine logistics{" "}
            <span className="text-brand-black font-semibold">expertise</span>{" "}
            and digital innovation to deliver cargo with speed, confidence, and
            impact worldwide.
          </h2>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold flex items-baseline gap-1 text-center text-[#B8860B]">
                15+{" "}
                <span className="text-2xl text-brand-grey font-medium font-semibold -top-1">
                  Years
                </span>
              </h3>
              <p className="text-brand-grey text-m font-medium">
                of shipping expertise
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-bold flex items-baseline gap-1 text-[#B8860B]">
                30+{" "}
                <span className="text-2xl text-brand-grey font-medium font-semibold">
                  Countries
                </span>
              </h3>
              <p className="text-brand-grey text-m font-medium text-center">
                covered
              </p>
            </div>

            <div className="space-y-2 ">
              <h3 className="text-4xl font-bold flex items-baseline gap-1 text-center text-[#B8860B]">
                60K+{" "}
                <span className="text-2xl text-brand-grey font-medium font-semibold text-center">
                  TN
                </span>
              </h3>
              <p className="text-brand-grey text-m font-medium">
                Cargo handled worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
