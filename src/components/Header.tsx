import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
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
        <nav className="hidden md:flex items-center gap-1 bg-gray-50/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200/50 shadow-sm">
          {["Home", "About Us", "Services", "Gallery", "Contact"].map(
            (item, i) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${i === 0 ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"}`}
              >
                {item}
              </Link>
            ),
          )}
        </nav>

        {/* Action Button */}
        <button className="bg-black text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-transform active:scale-95 cursor-pointer shadow-lg hover:shadow-xl">
          Track
        </button>
      </div>
    </header>
  );
}
