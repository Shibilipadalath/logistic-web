
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ExportDestinations from "@/components/ExportDestinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ExportDestinations />
    </main>
  );
}
