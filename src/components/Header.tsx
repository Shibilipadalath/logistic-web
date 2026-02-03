"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 py-2">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-full mt-2 relative">
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
                  ? "bg-gradient-to-r from-[#B8860B] to-[#8B5E00] text-white shadow-md"
                  : "text-brand-grey hover:text-brand-black hover:bg-brand-beige/20"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              document.getElementById("track-map")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hidden md:block bg-gradient-to-r from-[#B8860B] to-[#8B5E00] text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-brand-secondary transition-transform active:scale-95 cursor-pointer shadow-lg hover:shadow-xl"
          >
            Track
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-black hover:bg-gray-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-[2rem] shadow-xl border border-gray-100 p-4 md:hidden flex flex-col gap-2 overflow-hidden animate-fade-in-up">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3 rounded-xl text-center font-bold text-lg transition-all duration-200 ${isActive
                  ? "bg-[#B8860B]/10 text-[#B8860B]"
                  : "text-brand-grey hover:text-brand-black hover:bg-gray-50"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setIsOpen(false);
              document.getElementById("track-map")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="mt-2 bg-gradient-to-r from-[#B8860B] to-[#8B5E00] text-white px-5 py-3 rounded-xl text-lg font-bold shadow-lg active:scale-95 transition-transform"
          >
            Track
          </button>
        </div>
      )}
    </header>
  );
}
