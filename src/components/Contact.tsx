import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro Text */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 md:text-xl leading-relaxed max-w-3xl mx-auto">
            Have questions about our logistics services? Need a custom quote?
            Fill out the form, and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Side: Contact Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    Visit our office
                  </h4>
                  <p className="text-gray-500">
                    123 Logistics Way, Suite 400
                    <br />
                    New York, NY 10001, USA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    Email us
                  </h4>
                  <p className="text-gray-500">contact@fizan.com</p>
                  <p className="text-gray-500">support@fizan.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    Call us
                  </h4>
                  <p className="text-gray-500">+1 (555) 000-0000</p>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-brand-primary/5 p-8 md:p-12 rounded-[2.5rem] border border-brand-primary/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  Subject
                </label>
                <select className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Request a Quote</option>
                  <option>Track Shipment</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#B8860B] to-[#8B5E00] text-white font-bold py-4 rounded-xl hover:bg-brand-secondary transition-colors shadow-lg shadow-brand-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
