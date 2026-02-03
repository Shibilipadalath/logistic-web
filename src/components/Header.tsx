"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 py-6">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-full mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group ml-4">
          <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="Fizan Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-brand-black tracking-tight">
            Fizan
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                  ? "bg-brand-primary text-white shadow-md"
                  : "text-brand-grey hover:text-brand-black hover:bg-brand-beige/20"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <button className="bg-brand-primary text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-brand-secondary transition-transform active:scale-95 cursor-pointer shadow-lg hover:shadow-xl">
          Track
        </button>
      </div>
    </header>
  );
}
