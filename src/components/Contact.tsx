import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Text */}
        <div className="mb-24 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-brand-black leading-[1.1] tracking-tighter mb-10">
            Let&apos;s Start a <br />
            <span className="font-serif italic text-brand-primary lowercase normal-case">
              Conversation
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-10 text-brand-primary/40">
            <span className="h-px w-12 bg-current"></span>
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="h-px w-12 bg-current"></span>
          </div>
          <p className="text-gray-600 text-xl md:text-3xl leading-[1.6] font-medium font-sans max-w-4xl mx-auto">
            Have questions about our logistics services or need a custom quote?
            <span className="text-brand-black font-extrabold border-b border-brand-primary/20">
              {" "}
              Reach out to our experts
            </span>{" "}
            and we&apos;ll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
            <a
              href="https://maps.app.goo.gl/kDZNdfaZJRjyXSQ86?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              title="Open location in Google Maps"
              className="block"
            >
              <div
                className="bg-slate-50 p-10 rounded-xl 
                  border border-gray-100 
                  hover:border-brand-primary/30 
                  hover:shadow-xl 
                  transition-all duration-500 
                  cursor-pointer"
              >
                <div className="flex items-center gap-6 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl bg-brand-primary/10 
                      flex items-center justify-center 
                      text-brand-primary"
                  >
                    <MapPin size={28} />
                  </div>

                  <h4 className="text-2xl font-black text-gray-900">
                    Visit Our Office
                  </h4>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed pl-20">
                  Building No 135, Zone 91, Street No 3087
                  <br />
                  <span className="font-bold text-gray-900">
                    Birkat Al Awamer, Qatar
                  </span>
                </p>
              </div>
            </a>

            <div className="bg-slate-50 p-10 rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 group">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <Mail size={28} />
                </div>
                <h4 className="text-2xl font-black text-gray-900">
                  Send an Email
                </h4>
              </div>
              <div className="pl-20 space-y-1">
                <p className="text-gray-600 text-lg">contact@fizan.com</p>
                <p className="text-gray-600 text-lg">support@fizan.com</p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 group">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <Phone size={28} />
                </div>
                <h4 className="text-2xl font-black text-gray-900">
                  Call Support
                </h4>
              </div>
              <div className="pl-20 space-y-1">
                <p className="text-gray-600 text-lg">+1 (555) 000-0000</p>
                <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-12 lg:p-16 rounded-[18px] border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[5rem]" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-brand-black mb-10">
                Send a{" "}
                <span className="font-serif italic text-brand-primary">
                  Message
                </span>
              </h3>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-lg"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] ml-1">
                    Subject
                  </label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-gray-100 text-gray-900 focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-lg appearance-none">
                      <option>General Inquiry</option>
                      <option>Request a Quote</option>
                      <option>Track Shipment</option>
                      <option>Careers</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
                      <ArrowUpRight size={20} className="rotate-45" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] ml-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-gray-100 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#B8860B] to-[#8B5E00] text-white font-black py-5 rounded-2xl hover:shadow-[0_20px_40px_-10px_rgba(184,134,11,0.4)] transition-all duration-500 text-lg uppercase tracking-widest active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
