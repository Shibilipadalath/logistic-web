import React from "react";
import { User, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";

const professionals = [
  {
    name: "Our Vision",
    role: "What Drives Us Forward",
    image: "/vision.jpg", // optional: icon or abstract image
    description:
      "To become a globally trusted logistics partner by delivering innovative, reliable, and customer-centric supply chain solutions that connect businesses worldwide.",
    variant: "dark",
  },
  {
    name: "Our Mission",
    role: "What We Do Every Day",
    image: "/mission.jpg",
    description:
      "To provide efficient, secure, and timely logistics services by leveraging technology, expertise, and a strong global network while exceeding customer expectations.",
    variant: "light",
  },
  {
    name: "Our Guidelines",
    role: "How We Work",
    image: "/guidelines.jpg",
    description:
      "We operate with integrity, transparency, and accountability, prioritizing safety, compliance, sustainability, and continuous improvement in every shipment we handle.",
    variant: "light",
  },
];

export default function Team() {
  return (
    <section className="py-7 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionals.map((member, index) => (
            <div
              key={index}
              className="rounded-[2rem] p-8 flex flex-col justify-between min-h-[360px] relative group
           transition-all duration-300
           bg-brand-beige/20 text-brand-black
           hover:bg-gradient-to-r hover:from-[#B8860B] hover:to-[#8B5E00]
           hover:text-white hover:-translate-y-2 cursor-pointer"
            >
              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-8">
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:rotate-45 group-hover:text-white text-gray-700"
                  size={24}
                />
              </div>

              {/* Bottom Row: Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-center ">
                  {member.name}
                </h3>
                <p className="text-sm font-medium mb-4 text-center text-grey">
                  {member.role}
                </p>
                <p className="text-base leading-relaxed text-justify">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
