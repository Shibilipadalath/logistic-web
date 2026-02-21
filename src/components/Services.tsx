"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal, FadeIn } from "./Reveal";

const services = [
  {
    id: 1,
    title: "Frozen Fish",
    status: "Freshly sourced • IQF Frozen",
    image: "/service1.png",
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    status: "Farm Fresh • Export Grade",
    image: "/service2.png",
  },
  {
    id: 3,
    title: "Quality Assurance",
    status: "Strict Quality Control",
    image: "/service3.png",
  },
  {
    id: 4,
    title: "Global Export",
    status: "Europe & Middle East",
    image: "/service4.png",
  },
];

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 2; // Show 2 items at a time

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= services.length ? 0 : prev + itemsPerPage,
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, services.length - itemsPerPage)
        : prev - itemsPerPage,
    );
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused || services.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [startIndex, isPaused]);

  // Get current items to display
  // Since we only have 2 items and itemsPerPage is 2, this logic works but might be simple.
  // If we had more, slicing would matter. For now just show all if <= itemsPerPage.
  const currentServices = services.slice(startIndex, startIndex + itemsPerPage);
  // Ensure we always have items to show even if array is small
  const displayServices = currentServices.length > 0 ? currentServices : services.slice(0, itemsPerPage);


  return (
    <section
      className="py-20 bg-white text-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <Reveal>
              <span className="text-sm font-bold tracking-widest text-[#c1b588] uppercase mb-3 block">
                {"// Our Products //"}
              </span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none">
                Quality <br />
                <span className="font-serif italic text-brand-primary lowercase normal-case">Products</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.3} width="fit-content" className="ml-auto">
            {/* Hide arrows if no pagination needed */}
            {services.length > itemsPerPage && (
              <div className="flex flex-col items-end gap-4">
                {/* Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#c1b588] hover:text-white transition-colors cursor-pointer group"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-60 group-hover:opacity-100"
                    >
                      <path d="M19 12H5" />
                      <path d="M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-colors cursor-pointer group"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-60 group-hover:opacity-100"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Counter */}
                <span className="text-[#c1b588] font-medium tracking-wide">
                  {`(PRODUCTS ${String(startIndex + 1).padStart(2, "0")}/${String(services.length).padStart(2, "0")})`}
                </span>
              </div>
            )}
          </Reveal>
        </div>

        {/* Horizontal Slider Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayServices.map((service, index) => (
            <FadeIn key={service.id} delay={0.2 + (index * 0.2)} className="h-full">
              <div className="group cursor-default select-none h-full flex flex-col bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between border-t border-transparent pt-2 mt-auto p-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#c1b588] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-gray-400 text-sm md:text-base font-medium whitespace-nowrap ml-4">
                    {service.status}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
