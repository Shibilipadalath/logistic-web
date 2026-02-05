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
              className="rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[420px] relative group
           transition-all duration-500 border border-gray-100 shadow-sm
           bg-white text-brand-black
           hover:shadow-[0_30px_60px_-15px_rgba(184,134,11,0.25)]
           hover:-translate-y-3 cursor-pointer overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/20 transition-all duration-500" />

              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <ArrowUpRight
                    className="transition-transform duration-500 group-hover:rotate-45"
                    size={28}
                  />
                </div>
              </div>

              {/* Bottom Row: Info */}
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-primary mb-3 block opacity-70 text-center">
                  {member.role}
                </span>
                <h3 className="text-3xl font-black mb-4 group-hover:text-brand-primary transition-colors text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors text-justify">
                  {member.description}
                </p>
              </div>

              {/* Decorative Progress Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-brand-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
