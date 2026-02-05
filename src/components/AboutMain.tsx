import React from "react";
import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="py-20 bg-white text-brand-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-brand-black leading-[1.1] tracking-tight mb-10">
            Committed to creating <br />
            reliable & <span className="font-serif italic text-brand-primary mr-3">seamless</span> logistics solutions.
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10 text-brand-primary/40">
            <span className="h-px w-12 bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <p className="text-gray-600 text-xl md:text-3xl leading-[1.6] font-medium font-sans max-w-4xl mx-auto">
            Helping businesses transport goods efficiently across borders with
            <span className="text-brand-black font-extrabold"> years of expertise </span>
            and a <span className="font-serif italic text-brand-primary border-b border-brand-primary/20">customer-first approach</span>, ensuring timely and secure deliveries worldwide.
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
            <h3 className="text-6xl font-black text-brand-primary tracking-tighter">1000+</h3>
            <p className="text-brand-grey text-lg font-bold uppercase tracking-widest mt-2">
              Clients globally
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-6xl font-black text-brand-primary tracking-tighter">200+</h3>
            <p className="text-brand-grey text-lg font-bold uppercase tracking-widest mt-2">
              Logistics experts
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-6xl font-black text-brand-primary tracking-tighter">95%</h3>
            <p className="text-brand-grey text-lg font-bold uppercase tracking-widest mt-2">
              Satisfaction rate
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-6xl font-black text-brand-primary tracking-tighter">15+</h3>
            <p className="text-brand-grey text-lg font-bold uppercase tracking-widest mt-2">
              Years experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
