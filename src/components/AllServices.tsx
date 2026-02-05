import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Warehousing & Distribution",
    description:
      "Secure storage and efficient distribution networks to keep your supply chain moving smoothly.",
    image: "/service1.png",
  },
  {
    id: 2,
    title: "International Shipping",
    description:
      "Reliable sea and ocean freight services connecting you to global markets.",
    image: "/service2.png",
  },
  {
    id: 3,
    title: "Supply Chain Solutions",
    description:
      "End-to-end management and optimization of your logistics flow.",
    image: "/service3.png",
  },
  {
    id: 4,
    title: "Cargo Transport",
    description:
      "Ground transportation solutions for domestic and cross-border delivery.",
    image: "/service4.png",
  },
  {
    id: 5,
    title: "Air Freight",
    description:
      "Fast and secure air cargo services for your time-sensitive shipments.",
    image: "/express.jpg",
  },
  {
    id: 6,
    title: "Customs Brokerage",
    description:
      "Simplifying customs regulations to ensure quick clearance of your goods.",
    image: "/logis.png.jpg",
  },
];

export default function AllServices() {
  return (
    <section className="py-17 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-brand-black leading-[1.1] tracking-tighter mb-10 uppercase">
            Full Spectrum <br />
            <span className="font-serif italic text-brand-primary lowercase normal-case">Logistics Excellence</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10 text-brand-primary/40">
            <span className="h-px w-12 bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <p className="text-gray-600 text-xl md:text-3xl leading-[1.6] font-medium font-sans max-w-4xl mx-auto">
            We provide a full range of shipping, transportation, and warehousing
            services <span className="text-brand-black font-extrabold border-b-2 border-brand-primary/20">customized to your business needs</span>, ensuring your supply chain never stops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:border-brand-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(184,134,11,0.2)] transition-all duration-500 flex flex-col h-full relative"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Floating Icon on hover */}
                <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-lg shadow-brand-primary/40">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-grow relative z-10">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest text-brand-primary uppercase mb-2 block opacity-70">
                    Service {service.id.toString().padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-black text-brand-black transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                  {service.description}
                </p>

                {/* Bottom decorative bar */}
                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-brand-primary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
