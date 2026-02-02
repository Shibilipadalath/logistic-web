import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
