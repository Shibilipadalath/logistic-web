import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const images = [
  { src: "/service4.png", alt: "Logistics Fleet", title: "Logistics Fleet" },
  {
    src: "/service2.png",
    alt: "Warehouse Operations",
    title: "Warehouse Distribution",
  },
  { src: "/service3.png", alt: "Cargo Handling", title: "Cargo Handling" },
  { src: "/service1.png", alt: "Global Shipping", title: "Global Shipping" },
  {
    src: "/logis.png.jpg",
    alt: "Team at Work",
    title: "International Shipping",
  },
  { src: "/express.jpg", alt: "Express Delivery", title: "Express Delivery" },
];

export default function Gallery() {
  return (
    <section className="py-17 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black leading-[1.2] tracking-tighter mb-10">
            A Glimpse Into <br />
            <span className="font-serif italic text-brand-primary lowercase normal-case">Our Operations</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10 text-brand-primary/40">
            <span className="h-px w-12 bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <p className="text-gray-600 text-xl md:text-3xl leading-[1.6] font-medium font-sans max-w-4xl mx-auto">
            Explore our world of logistics, from high-scale warehousing to the
            <span className="text-brand-black font-extrabold border-b-2 border-brand-primary/20"> dedicated team</span> behind every successful delivery across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative h-[450px] w-full overflow-hidden rounded-xl shadow-xl cursor-pointer bg-brand-black"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content box */}
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-primary block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    Portfolio Case
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {img.title}
                    </h3>
                  </div>
                  <div className="w-12 h-1 bg-brand-primary rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
