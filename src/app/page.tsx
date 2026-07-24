import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1424] text-slate-100 relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
