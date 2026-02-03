import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import PageBanner from "@/components/PageBanner";

export default function GalleryPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <div className="pt-24">
                <PageBanner title="Gallery" subtitle="Our Work" backgroundImage="/gallery_banner.png" />
                <Gallery />
            </div>
            <Footer />
        </main>
    );
}
