import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllServices from "@/components/AllServices";
import PageBanner from "@/components/PageBanner";

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <PageBanner title="Our Services" subtitle="What We Do" backgroundImage="/services_banner.png" />
                <AllServices />
            </div>
            <Footer />
        </main>
    );
}
