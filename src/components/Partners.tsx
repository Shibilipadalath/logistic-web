
import React from 'react';

const brands = [
    {
        name: "Sisyphus",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L19.5 7.5V16.5L12 22L4.5 16.5V7.5L12 2Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 2L19.5 7.5V16.5L12 22M12 2L4.5 7.5V16.5L12 22M12 2V22M4.5 7.5L19.5 16.5M19.5 7.5L4.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        name: "Magnolia",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L14.5 8.5L20 9.5L16 13.5L17 19L12 16.5L7 19L8 13.5L4 9.5L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        name: "Epicurious",
        icon: (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 18C7.5 18 10.5 21 14.5 21C18.9183 21 22.5 17.4183 22.5 13C22.5 11.5 22.5 10 22.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M11.5 9C11.5 9 12.5 6 15.5 6C17.5 6 19.5 7.5 19.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M6.5 14H1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M7.5 10H2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M9.5 6H4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        )
    },
    {
        name: "Sisyphus",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L19.5 7.5V16.5L12 22L4.5 16.5V7.5L12 2Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M12 2L19.5 7.5V16.5L12 22M12 2L4.5 7.5V16.5L12 22M12 2V22M4.5 7.5L19.5 16.5M19.5 7.5L4.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

export default function Partners() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center gap-2 mb-8">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-[0.2em]">
                        Working with <span className="text-brand-primary">brands that matter</span>
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {brands.map((brand, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center gap-3 py-8 px-6 bg-[#FDFBF7] border border-[#B8860B]/20 rounded-xl shadow-sm hover:shadow-md hover:bg-[#B8860B] hover:border-[#B8860B] transition-all duration-300 cursor-pointer group"
                        >
                            <div className="text-[#B8860B] group-hover:text-white transition-colors">
                                {brand.icon}
                            </div>
                            <span className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-white">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
