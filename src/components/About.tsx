import React from "react";
import Image from "next/image";
import { Reveal, SlideInRight } from "./Reveal";

export default function About() {
  return (
    <section className="py-8 bg-white text-brand-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
        {/* Left Side: Label + Graphic */}
        <div className="flex flex-col h-full">
          <Reveal>
            <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase mb-8 block">
              {"// About Us //"}
            </span>
          </Reveal>

          <SlideInRight className="relative w-full flex-grow min-h-[400px] rounded-xl overflow-hidden shadow-2xl group border border-gray-100 hover:shadow-[0_20px_50px_-12px_rgba(184,134,11,0.3)] transition-all duration-500">
            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src="/service1.png"
              alt="Logistics Operations"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </SlideInRight>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-12 mt-16">
          {/* Headline */}
          <Reveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.3] tracking-tight text-gray-900">
              At <span className="text-brand-primary font-serif italic">Fizan</span>, we
              combine <span className="relative inline-block">nature's best<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/10 -z-10"></span></span>{" "}
              with strict quality control to deliver freshness, safety, and excellence worldwide.
            </h2>
          </Reveal>

          {/* Divider */}
          <Reveal delay={0.3}>
            <div className="h-px w-full bg-gray-200" />
          </Reveal>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            {[
              "Strict quality control procedures",
              "Hygienic processing and packaging",
              "Timely delivery and efficient logistics",
              "Compliance with international export standards"
            ].map((feature, i) => (
              <Reveal key={i} delay={0.4 + (i * 0.1)}>
                <div className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-lg font-medium text-gray-800 group-hover:text-[#B8860B] transition-colors">
                    {feature}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
