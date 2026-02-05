"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

export default function ExportDestinations() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/WorldMap"), {
        loading: () => (
          <div className="w-full h-full bg-slate-50 flex items-center justify-center text-gray-400">
            Loading Map...
          </div>
        ),
        ssr: false,
      }),
    [],
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-[#B8860B] uppercase mb-3 block">
            {"// Global Network //"}
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.1]">
            Connecting Your <br />
            <span className="font-serif italic text-brand-primary">Business to the World</span>
          </h2>
          <p className="text-lg text-gray-500">
            Our expansive logistics network covers over 30 countries, ensuring
            your cargo reaches its destination safely and on time.
          </p>
        </div>

        {/* Map Container */}
        <div
          id="track-map"
          className="relative w-full aspect-[16/9] md:aspect-[2.2/1] bg-slate-50 rounded-xl border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          <Map />
        </div>

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
          {[
            "Global Shipping",
            "Warehousing",
            "Customs Brokerage",
            "Supply Chain Management",
          ].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#B8860B] rounded-full" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
