import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto flex flex-col items-center text-center">
      {/* Headlines */}
      <div className="space-y-4 mb-8 fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#1a1a1a] tracking-tight leading-[1.1]">
          Seamless Logistics, <br />
          Faster{" "}
          <span className="font-serif italic text-teal-700 font-medium">
            Deliveries
          </span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium pt-4">
          Streamlined freight management with real-time tracking.
        </p>
      </div>

      {/* Image Section */}
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
              <button className="bg-[#FF6B35] hover:bg-[#ff5514] text-white px-7 py-3 rounded-full text-base font-bold transition-all shadow-[0_10px_30px_-10px_rgba(255,107,53,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(255,107,53,0.6)] hover:-translate-y-1 cursor-pointer">
                Our Services
              </button>
              <button className="bg-white border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-7 py-3 rounded-full text-base font-bold transition-all cursor-pointer">
                Contact Us
              </button>
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

        {/* Floating Badge Left: Users */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-white/10 backdrop-blur-xl border border-white/30 p-2 pr-6 rounded-full flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform hover:scale-105 cursor-default">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="w-11 h-11 rounded-full border-[3px] border-white/80 overflow-hidden relative bg-gray-200"
              >
                <Image
                  src={`https://i.pravatar.cc/100?img=${10 + id}`}
                  alt="User"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-left">
            <span className="block text-white font-bold text-sm leading-tight">
              +10M User
            </span>
            <span className="block text-white/80 text-xs">
              Trusted globally
            </span>
          </div>
        </div>

        {/* Floating Badge Right: Reviews */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 bg-black/30 backdrop-blur-xl border border-white/10 p-2.5 px-6 rounded-full flex items-center gap-3 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform hover:scale-105 cursor-default">
          <div className="bg-orange-500 rounded-full p-1.5">
            <span className="text-white text-xs block">★</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-base leading-tight">845k+</span>
            <span className="opacity-80 text-xs font-medium">
              4.5 Verified Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
