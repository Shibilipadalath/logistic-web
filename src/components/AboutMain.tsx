import React from "react";
import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="py-20 bg-white text-brand-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We are committed to creating reliable and seamless logistics
            solutions that help businesses transport goods efficiently across
            borders. With years of expertise and a customer-first approach, we
            ensure timely and secure deliveries worldwide.
          </p>
        </div>

        {/* Middle Section: Large Image */}
        <div className="relative w-full h-[400px] md:h-[600px] mb-20 rounded-[2.5rem] overflow-hidden bg-brand-beige/20 group hover:shadow-[0_20px_50px_-12px_rgba(184,134,11,0.3)] transition-all duration-500">
          <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <Image
            src="/logis.png.jpg" // Using the team/logistics image from the previous AboutPage
            alt="About Fizan Logistics"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        {/* Bottom Section: Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-transparent pt-4 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-semibold text-brand-primary">1000+</h3>
            <p className="text-brand-grey text-lg font-medium">
              Clients helped globally
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-semibold  text-brand-primary">200+</h3>
            <p className="text-brand-grey text-lg font-medium">
              Logistics experts
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-semibold  text-brand-primary">95%</h3>
            <p className="text-brand-grey text-lg font-medium">
              Client satisfaction rate
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-semibold text-brand-primary">15+</h3>
            <p className="text-brand-grey text-lg font-medium">
              Years of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
