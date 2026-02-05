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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight text-gray-900">
              At <span className="text-brand-primary font-serif italic">Fizan</span>, We
              combine <span className="relative inline-block">logistics expertise<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-primary/10 -z-10"></span></span>{" "}
              and digital innovation to deliver cargo with speed, confidence, and
              impact worldwide.
            </h2>
          </Reveal>

          {/* Divider */}
          <Reveal delay={0.3}>
            <div className="h-px w-full bg-gray-200" />
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { number: "15+", label: "Years", sub: "of shipping expertise" },
              { number: "30+", label: "Countries", sub: "covered" },
              { number: "60K+", label: "TN", sub: "Cargo handled worldwide" }
            ].map((stat, i) => (
              <Reveal key={i} delay={0.4 + (i * 0.1)}>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold flex items-baseline gap-1 text-center text-[#B8860B]">
                    {stat.number}{" "}
                    <span className="text-2xl text-brand-grey font-medium font-semibold -top-1">
                      {stat.label}
                    </span>
                  </h3>
                  <p className="text-brand-grey text-m font-medium text-center md:text-left">
                    {stat.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
