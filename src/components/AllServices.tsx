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
        <div className="text-center mb-16">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We provide a full range of shipping, transportation, and warehousing
            services customized to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-50 border border-gray-100 rounded-[2.5rem] overflow-hidden hover:bg-white hover:border-brand-primary/30 hover:shadow-[0_20px_40px_-12px_rgba(184,134,11,0.15)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-brand-black group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="text-brand-grey group-hover:text-brand-primary transition-colors group-hover:rotate-45 duration-300" />
                </div>
                <p className="text-brand-grey leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button className="text-sm font-bold uppercase tracking-wider text-brand-black underline decoration-brand-grey underline-offset-4 group-hover:text-brand-primary group-hover:decoration-brand-primary transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
