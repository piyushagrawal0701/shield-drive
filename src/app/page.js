import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TrustSection from "@/components/TrustSection";
import CTA from "@/components/CTA";
import HowItWorks from "@/components/HowItWorks";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
    <Toaster />
      <Navbar />
      <Hero />
      <TrustSection />
      <HowItWorks/>
      <Testimonials />
      <CTA/>
      <FAQ />
      <Footer />
    </>
  );
}