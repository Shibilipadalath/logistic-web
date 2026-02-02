import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
          <span className="text-2xl font-bold text-gray-900 tracking-tight">
            Fizan
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-black text-white shadow-md"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black hover:bg-gray-100"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black hover:bg-gray-100"
          >
            Services
          </Link>

          <Link
            href="/gallery"
            className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black hover:bg-gray-100"
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-black hover:bg-gray-100"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <button className="bg-black text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-transform active:scale-95 cursor-pointer shadow-lg hover:shadow-xl">
          Track
        </button>
      </div>
    </header>
  );
}
