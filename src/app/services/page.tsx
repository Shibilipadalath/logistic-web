import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AllServices from "@/components/AllServices";

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <AllServices />
            </div>
            <Footer />
        </main>
    );
}
