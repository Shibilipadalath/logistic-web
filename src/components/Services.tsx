"use client";

import React, { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Warehousing & Distribution",
    status: "(2024 - Still on going)",
    image: "/service1.png",
  },
  {
    id: 2,
    title: "International Shipping",
    status: "(2024 - Still on going)",
    image: "/service2.png",
  },
  {
    id: 3,
    title: "Supply Chain Solutions",
    status: "(2024 - Still on going)",
    image: "/service3.png",
  },
  {
    id: 4,
    title: "Cargo transport",
    status: "(2024 - Still on going)",
    image: "/service4.png",
  },
];

export default function Services() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

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

  // Get current items to display
  const currentServices = services.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <span className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3 block">
              {"// Our Services //"}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Explore Our Services
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors cursor-pointer group"
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
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors cursor-pointer group"
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
            <span className="text-brand-secondary font-medium tracking-wide">
              {`(SERVICES ${String(startIndex + 1).padStart(2, "0")}/${String(services.length).padStart(2, "0")})`}
            </span>
          </div>
        </div>

        {/* Horizontal Slider Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentServices.map((service) => (
            <div key={service.id} className="group cursor-pointer select-none">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 group-hover:shadow-[0_20px_40px_-12px_rgba(14,79,85,0.2)] transition-shadow duration-500">
                <div className="absolute inset-0 bg-gray-100 skeleton-loader"></div>
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between border-t border-transparent pt-2">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <span className="text-gray-400 text-sm md:text-base font-medium whitespace-nowrap ml-4">
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
