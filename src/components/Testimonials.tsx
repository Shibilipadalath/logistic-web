"use client";

import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3 block">
              {"// Testimonials //"}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight uppercase">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation Arrows (Visual only for now) */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Stats/Intro */}
          <div className="lg:col-span-4 flex flex-col justify-between pl-19">
            <div className="max-w-xs">
              <h3 className="text-m font-bold text-gray-900 uppercase tracking-wide leading-relaxed mb-8">
                Words from the
                <br />
                ones who know us
                <br />
                best
              </h3>
            </div>

            <div className="mt-auto">
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl md:text-7xl font-light tracking-tighter mr-1">
                  +
                </span>
                <span className="text-6xl md:text-8xl font-bold tracking-tighter">
                  99
                </span>
                <span className="text-5xl md:text-7xl font-light tracking-tighter text-gray-400">
                  %
                </span>
              </div>
              <p className="text-gray-500 font-medium mt-2">
                Achieving Excellence Every Time
              </p>
            </div>
          </div>

          {/* Right Column: Testimonial Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <blockquote className="text-3xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight mb-12">
              &quot;Working with Boulevard felt less like building with a creative
              partner. Every visual, every word—just hit right.&quot;
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-8">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
                    alt="David Wilson"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    David Wilson
                  </h4>
                  <p className="text-gray-500">Business Consultant</p>
                </div>
              </div>

              {/* Social Icon */}
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
              >
                {/* X / Twitter Icon */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
