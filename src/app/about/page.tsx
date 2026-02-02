import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Team from "@/components/Team";
import Vision from "@/components/Vision";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <About />
                <Team />
                <Vision />
            </div>
            <Footer />
        </main>
    );
}
