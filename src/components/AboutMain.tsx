import React from "react";
import Image from "next/image";

export default function AboutMain() {
  return (
    <section className="py-20 bg-white text-brand-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black leading-[1.2] tracking-tight mb-10">
            Fizan International <br />
            <span className="font-serif italic text-brand-primary mr-3">Pvt. Ltd.</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10 text-brand-primary/40">
            <span className="h-px w-12 bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <p className="text-gray-600 text-xl md:text-2xl leading-[1.6] font-medium font-sans max-w-4xl mx-auto">
            At Fizan International Pvt. Ltd., we believe that <span className="text-brand-black font-extrabold">quality begins at the source</span>. Our products are directly collected from trusted farmers and fisheries, carefully processed, and preserved using advanced freezing techniques to maintain their natural freshness, taste, and nutritional value.
          </p>
        </div>

        {/* Middle Section: Large Image */}
        <div className="relative w-full h-[400px] md:h-[600px] mb-20 rounded-[18px] overflow-hidden bg-brand-beige/20 group hover:shadow-[0_20px_50px_-12px_rgba(184,134,11,0.3)] transition-all duration-500">
          <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <Image
            src="/logis.png.jpg"
            alt="Fizan International Operations"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        {/* Bottom Section: Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-transparent pt-4">
          <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Strict Quality Control</h3>
            <p className="text-gray-500 text-sm">Rigorous procedures at every stage ensuring premium standards.</p>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Hygienic Processing</h3>
            <p className="text-gray-500 text-sm">Advanced facilities ensuring safe and clean packaging.</p>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Timely Delivery</h3>
            <p className="text-gray-500 text-sm">Efficient logistics network for on-time global shipments.</p>
          </div>
          <div className="flex flex-col gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Global Compliance</h3>
            <p className="text-gray-500 text-sm">Adherence to international export and safety standards.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
