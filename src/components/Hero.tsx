import Image from "next/image";
import Link from "next/link";
import { Reveal, FadeIn } from "./Reveal";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
      {/* Headlines */}
      <Reveal delay={0.1}>
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1a1a] tracking-tight leading-none">
            Seamless Logistics, <br />
            Faster{" "}
            <span className="font-serif italic text-[#B8860B] font-medium">
              Deliveries
            </span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium pt-4">
            Streamlined freight management with real-time tracking.
          </p>
        </div>
      </Reveal>

      {/* Image Section */}
      <FadeIn delay={0.3} className="w-full">
        <div className="relative w-full aspect-[16/10] md:aspect-[2.3/1] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-gray-900/5 group">
          <Image
            src="/image.png"
            alt="Container Ship Logistics"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          {/* Top Notch Buttons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30 flex items-start justify-center">
            {/* Left Smoother (Concave Fillet) */}
            <div
              className="w-16 h-16 relative -mr-1 z-10"
              style={{
                background:
                  "radial-gradient(circle at bottom left, transparent 3.9rem, #ffffff 4.1rem)",
              }}
            ></div>

            {/* Main Notch Block */}
            <div className="bg-white pt-0 px-2 pb-2 rounded-b-[2.5rem] relative z-20 -mt-0.5 h-24 flex items-center">
              <div className="flex items-center gap-4 px-4 pt-2">
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-[#B8860B] to-[#8B5E00] 
    text-white px-7 py-3 rounded-full text-base font-bold transition-all 
    shadow-[0_10px_30px_-10px_rgba(184,134,11,0.5)] 
    hover:from-[#B8860B]  hover:to-[#B8860B]
    hover:shadow-[0_20px_40px_-10px_rgba(218,165,32,0.6)] 
    hover:-translate-y-1 cursor-pointer flex items-center justify-center text-center"
                >
                  Our Services
                </Link>

                <Link
                  href="/contact"
                  className="bg-white border-2 border-[#B8860B] text-[#B8860B] 
    hover:bg-[#B8860B] hover:text-white 
    px-7 py-3 rounded-full text-base font-bold 
    transition-all hover:-translate-y-1 cursor-pointer flex items-center justify-center text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Smoother (Concave Fillet) */}
            <div
              className="w-16 h-16 relative -ml-1 z-10"
              style={{
                background:
                  "radial-gradient(circle at bottom right, transparent 3.9rem, #ffffff 4.1rem)",
              }}
            ></div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
