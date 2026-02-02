import Image from "next/image";
import { Truck, Package, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* MAIN ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white text-black">
        {/* TEXT SECTION */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-16">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            We are committed to creating reliable and seamless logistics
            solutions that help businesses transport goods efficiently across
            borders. With years of expertise and a customer-first approach, we
            ensure timely and secure deliveries worldwide.
          </p>
        </div>
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="group relative w-full md:w-3/5 overflow-hidden rounded-3xl">
              <Image
                src="/logis.png.jpg"
                alt="Fizan Logistics Team"
                width={900}
                height={500}
                className="w-full h-[380px] md:h-[420px] object-cover
          transition-transform duration-1000
          group-hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-left">
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Fizan Logistics is committed to delivering reliable and
                efficient logistics solutions that help businesses move goods
                smoothly across global markets. With a strong focus on quality
                and precision, we ensure every shipment is handled with care
                from origin to destination. Our comprehensive services include
                freight forwarding, customs clearance, warehousing, and
                transportation, designed to meet the evolving demands of modern
                supply chains. By combining industry expertise with advanced
                logistics practices, we simplify complex shipping processes for
                our clients. Backed by a dedicated team and a trusted global
                network, Fizan Logistics delivers transparency, timely
                execution, and customer-focused solutions. We strive to build
                long-term partnerships by ensuring reliability, safety, and
                consistent service excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20 text-center">
          <div>
            <h3 className="text-5xl font-bold">1000+</h3>
            <p className="text-gray-500 mt-2 font-semibold">
              Clients helped globally
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">30+</h3>
            <p className="text-gray-500 mt-2 font-semibold">
              Countries covered
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">95%</h3>
            <p className="text-gray-500 mt-2 font-semibold">
              Client satisfaction rate
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">15+</h3>
            <p className="text-gray-500 mt-2 font-semibold">
              Years of experience
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 */}
          <button
            className="group relative overflow-hidden rounded-3xl p-8 h-[320px] max-w-sm
             text-left flex flex-col justify-between
             bg-gray-100 transition-all duration-300"
          >
            <img
              src="/express.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* BLACK OVERLAY (HOVER / ACTIVE) */}
            <div
              className="absolute inset-0 bg-black opacity-0
               transition-opacity duration-300
               group-hover:opacity-60
               group-focus:opacity-60
               group-active:opacity-60"
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-full bg-white/80
                      flex items-center justify-center
                      text-gray-900"
                >
                  <Truck />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-white text-black">
                  Express Shipping
                </h3>

                <p className="text-m text-gray-800 leading-relaxed group-hover:text-gray-300 ">
                  Get your shipments delivered at lightning speed with our
                  express shipping service.
                </p>
              </div>
            </div>
          </button>

          {/* Card 2 */}
          <button
            className="group relative overflow-hidden rounded-3xl p-8 h-[320px] max-w-sm
             text-left flex flex-col justify-between
             bg-gray-100 transition-all duration-300"
          >
            <img
              src="/doordelivery.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* BLACK OVERLAY (HOVER / ACTIVE) */}
            <div
              className="absolute inset-0 bg-black opacity-0
               transition-opacity duration-300
               group-hover:opacity-60
               group-focus:opacity-60
               group-active:opacity-60"
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-full bg-white/80
                      flex items-center justify-center
                      text-gray-900"
                >
                  <Package />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-white text-black">
                  Door-to-Door Delivery
                </h3>

                <p className="text-m text-gray-800 leading-relaxed group-hover:text-gray-300 ">
                  Experience convenience with our door-to-door service.
                </p>
              </div>
            </div>
          </button>

          {/* Card 3 */}
          <button
            className="group relative overflow-hidden rounded-3xl p-8 h-[320px] max-w-sm
             text-left flex flex-col justify-between
             bg-gray-100 transition-all duration-300"
          >
            <img
              src="/international.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* BLACK OVERLAY (HOVER / ACTIVE) */}
            <div
              className="absolute inset-0 bg-black opacity-0
               transition-opacity duration-300
               group-hover:opacity-60
               group-focus:opacity-60
               group-active:opacity-60"
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-full bg-white/80
                      flex items-center justify-center
                      text-gray-900"
                >
                  <Globe />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-white text-black">
                  International Shipping
                </h3>

                <p className="text-m text-gray-800 leading-relaxed group-hover:text-gray-300 ">
                  Reliable international shipping solutions worldwide.
                </p>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* EXTRA SECTION BELOW CARDS */}
      <section className="w-full bg-[#F6E7D8] py-32 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="group relative w-full h-full overflow-hidden rounded-3xl">
            <Image
              src="/service1.png"
              alt="Logistics Ship"
              width={600}
              height={600}
              className="w-full h-full object-cover
               transition-transform duration-1000
               group-hover:scale-105"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-brown-800 leading-tight">
              Revolutionizing supply chains with accuracy
            </h2>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Our logistics company provides flawless solutions, enhancing
              efficiency, reliability, and dependability across global supply
              chains.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
