import React from "react";
import Image from "next/image";

const images = [
  { src: "/service4.png", alt: "Logistics Fleet" },
  { src: "/service2.png", alt: "Warehouse Operations" },
  { src: "/service3.png", alt: "Cargo Handling" },
  { src: "/service1.png", alt: "Global Shipping" },
  { src: "/logis.png.jpg", alt: "Team at Work" },
  { src: "/express.jpg", alt: "Express Delivery" },
];

export default function Gallery() {
  return (
    <section className="py-17 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A glimpse into our world of logistics, operations, and the dedicated
            team behind every successful delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative h-[400px] w-full overflow-hidden rounded-[2rem] shadow-lg cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
