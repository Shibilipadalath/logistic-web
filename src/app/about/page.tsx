import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutMain from "@/components/AboutMain";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import PageBanner from "@/components/PageBanner";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <PageBanner title="About Us" subtitle="Who We Are" backgroundImage="/about_banner.png" />
                <AboutMain />
                <Team />
                <Vision />
            </div>
            <Footer />
        </main>
    );
}
