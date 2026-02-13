import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Frozen Fish",
    description:
      "Premium quality frozen fish collected from trusted fisheries and processed with IQF technology.",
    image: "/service1.png",
  },
  {
    id: 2,
    title: "Fresh Vegetables",
    description:
      "Farm-fresh vegetables sourced directly from growers, sorted and graded for export.",
    image: "/service2.png",
  },
  {
    id: 3,
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled storage and transport ensuring freshness from source to destination.",
    image: "/service3.png",
  },
  {
    id: 4,
    title: "Global Export",
    description:
      "Seamless export operations to markets in Europe and the Middle East with full compliance.",
    image: "/service4.png",
  },
  {
    id: 5,
    title: "Custom Packaging",
    description:
      "Hygienic and secure packaging solutions tailored to buyer requirements.",
    image: "/express.jpg",
  },
  {
    id: 6,
    title: "Quality Assurance",
    description:
      " rigorous quality inspections at every stage to meet international food safety standards.",
    image: "/logis.png.jpg",
  },
];

export default function AllServices() {
  return (
    <section className="py-17 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black leading-[1.2] tracking-tighter mb-10 uppercase">
            Our Premium <br />
            <span className="font-serif italic text-brand-primary lowercase normal-case">
              Product Range
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10 text-brand-primary/40">
            <span className="h-px w-12 bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <p className="text-gray-600 text-xl md:text-3xl leading-[1.6] font-medium font-sans max-w-4xl mx-auto">
            We offer a diverse selection of high-quality frozen fish and fresh vegetables,
            <span className="text-brand-black font-extrabold border-b-2 border-brand-primary/20">
              {" "}processed and delivered{" "}
            </span>
            with strict adherence to global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-brand-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(184,134,11,0.2)] transition-all duration-500 flex flex-col h-full relative"
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
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-grow relative z-10">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-widest text-brand-primary uppercase mb-2 block opacity-70">
                    Service {service.id.toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold text-brand-black transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
