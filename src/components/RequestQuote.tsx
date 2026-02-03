"use client";

import React from 'react';

export default function RequestQuote() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-brand-primary/5 rounded-[3rem] p-8 md:p-20 text-center border border-brand-primary/10">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Request a Free Quote
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            Get a customized shipping quote tailored to your needs. Fast, transparent,
                            and hassle-free pricing for all logistics solutions.
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="max-w-5xl mx-auto bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
                        <form className="flex flex-col md:flex-row gap-4 items-end">

                            {/* Name Input */}
                            <div className="flex-1 w-full text-left">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all placeholder:text-gray-400"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex-1 w-full text-left">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all placeholder:text-gray-400"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="flex-1 w-full text-left">
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                                    Phone Number*
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all placeholder:text-gray-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="w-full md:w-auto">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/20 whitespace-nowrap"
                                >
                                    Submit Now
                                </button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
