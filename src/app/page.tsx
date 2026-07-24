import FloatingContact from "@/components/FloatingContact";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Workflow from "@/components/Workflow";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 relative">
      <FloatingContact />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Pricing />
      <Workflow />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
