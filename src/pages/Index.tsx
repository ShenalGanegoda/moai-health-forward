import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { Products } from "@/components/site/Products";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Moai Tech — Building the Future of Healthcare Technology";
    const desc = "Moai Tech is a Sri Lankan Health Tech startup building innovative digital health products and custom solutions for healthcare organizations.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Products />
      <Services />
      <About />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
