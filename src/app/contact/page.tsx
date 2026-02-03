import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <PageBanner title="Contact Us" subtitle="Get In Touch" backgroundImage="/contact_banner.png" />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
