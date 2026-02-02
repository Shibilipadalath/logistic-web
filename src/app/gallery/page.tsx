import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <Gallery />
            </div>
            <Footer />
        </main>
    );
}
