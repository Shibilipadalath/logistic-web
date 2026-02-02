import React from "react";
import { User, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";

const professionals = [
    {
        name: "Johnathan Smith",
        role: "Chief Executive Officer",
        image: "/team1.jpg", // Placeholder
        description:
            "Guiding our strategic direction with over 20 years of experience in global logistics and supply chain management.",
        variant: "dark",
    },
    {
        name: "Sarah Johnson",
        role: "Head of Operations",
        image: "/team2.jpg", // Placeholder
        description:
            "Ensuring smooth daily operations and overseeing our global network to deliver efficiency and reliability.",
        variant: "light",
    },
    {
        name: "Michael Brown",
        role: "Logistics Manager",
        image: "/team3.jpg", // Placeholder
        description:
            "Expert in international shipping regulations and customs clearance, ensuring your goods reach safely.",
        variant: "light",
    },
];

export default function Team() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-semibold mb-12 text-brand-black">
                    Meet Our Professionals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {professionals.map((member, index) => (
                        <div
                            key={index}
                            className={`rounded-[2rem] p-8 flex flex-col justify-between min-h-[360px] relative group transition-all duration-300 hover:-translate-y-2 ${member.variant === "dark"
                                ? "bg-brand-black text-white"
                                : "bg-brand-beige/20 text-brand-black hover:bg-brand-beige/40"
                                }`}
                        >
                            {/* Top Row: Icon & Arrow */}
                            <div className="flex justify-between items-start mb-8">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${member.variant === "dark"
                                        ? "bg-white text-brand-black"
                                        : "bg-white text-brand-black shadow-sm"
                                        }`}
                                >
                                    <User size={24} />
                                </div>
                                <ArrowUpRight
                                    className={`transition-transform duration-300 group-hover:rotate-45 ${member.variant === "dark" ? "text-white" : "text-brand-grey"
                                        }`}
                                    size={24}
                                />
                            </div>

                            {/* Bottom Row: Info */}
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                                <p
                                    className={`text-sm font-medium mb-4 ${member.variant === "dark" ? "text-gray-300" : "text-gray-500"
                                        }`}
                                >
                                    {member.role}
                                </p>
                                <p
                                    className={`text-base leading-relaxed ${member.variant === "dark"
                                        ? "text-gray-400"
                                        : "text-gray-600"
                                        }`}
                                >
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
