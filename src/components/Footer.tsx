import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-brand-black text-white pt-24 pb-12 overflow-hidden relative rounded-t-[3rem] mt-[-3rem]">
            {/* Background Text Overlay - Subtle and Large */}
            <div className="absolute opacity-[0.03] bottom-0 left-0 w-full select-none pointer-events-none overflow-hidden">
                <span className="text-[20rem] md:text-[30rem] font-bold whitespace-nowrap leading-none tracking-tighter text-white block text-center translate-y-1/3">
                    Fizan
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            {/* Logo Icon */}
                            <div className="w-10 h-10 relative flex items-center justify-center">
                                <Image
                                    src="/logo.png"
                                    alt="Fizan Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">Fizan</span>
                        </div>

                        <p className="text-brand-grey leading-relaxed mb-8 max-w-sm">
                            Get a customized shipping quote tailored to your needs. Fast, transparent,
                            and hassle-free pricing for all logistics solutions.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { icon: "facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                                { icon: "twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                                { icon: "linkedin", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
                                { icon: "instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" } // Simplified paths
                            ].map((social, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary transition-colors text-white">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                        {social.icon === 'linkedin' && <circle cx="4" cy="4" r="2" />}
                                        {social.icon === 'instagram' && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" stroke="currentColor" fill="none" />}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Gallery', href: '/gallery' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-brand-grey hover:text-brand-secondary transition-colors">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courier Types */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold mb-6">Courier Types</h4>
                        <ul className="space-y-4">
                            {['Standard', 'Express', 'International', 'Ware Housing', 'Overnight', 'Pallet'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-brand-grey hover:text-brand-secondary transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="lg:col-span-4">
                        <h4 className="text-lg font-semibold mb-6">Subscribe Our Newsletter</h4>

                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-secondary transition-colors text-white placeholder:text-gray-500"
                            />
                            <button className="absolute right-1 top-1 bottom-1 bg-brand-primary hover:bg-brand-secondary px-6 rounded-full text-sm font-bold transition-colors">
                                Subscribe
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-brand-grey">
                                <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(207) 555-0119</span>
                            </div>
                            <div className="flex items-center gap-3 text-brand-grey">
                                <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>contact@fizan.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-brand-grey">
                    <p>© Fizan 2025. Designed by <span className="text-brand-secondary">Opndoo</span></p>
                </div>
            </div>
        </footer>
    );
}
