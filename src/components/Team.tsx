import React from "react";
import { User, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";

const professionals = [
  {
    name: "Our Vision",
    role: "Where We Are Going",
    image: "/vision.jpg", // optional: icon or abstract image
    description:
      "To be the leading global provider of premium fresh produce, setting standards for quality, sustainability, and ethical business practices in the international market.",
    variant: "dark",
  },
  {
    name: "Our Mission",
    role: "Why We Exist",
    image: "/mission.jpg",
    description:
      "To build long-term partnerships by delivering consistent quality and dependable service to our global clients.",
    variant: "light",
  },
  {
    name: "Our Values",
    role: "What We Believe In",
    image: "/guidelines.jpg",
    description:
      "Quality, Integrity, and Reliability. We connect nature’s best directly from farmers and fisheries to global buyers with unwavering commitment to excellence.",
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
              className="rounded-xl p-8 pt-6 flex flex-col min-h-[360px] relative group
           transition-all duration-500 border border-gray-100 shadow-sm
           bg-white text-brand-black
           hover:shadow-[0_30px_60px_-15px_rgba(93,91,71,0.25)]
           hover:-translate-y-3 cursor-pointer overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-[#c1b588]/20 transition-all duration-500" />

              {/* Top Row: Icon container */}
              <div className="mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-gradient-to-r group-hover:from-[#5d5b47] group-hover:to-[#c1b588] group-hover:text-white transition-all duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
              </div>

              {/* Info Section */}
              <div className="relative z-10 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-primary mb-3 block opacity-70 text-center">
                  {member.role}
                </span>
                <h3 className="text-xl font-extrabold mb-4 group-hover:text-[#5d5b47] transition-colors text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors text-justify">
                  {member.description}
                </p>
              </div>

              {/* Decorative Progress Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#5d5b47] to-[#c1b588] group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
