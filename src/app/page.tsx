import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import Footer from "@/sections/Footer";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Features />
      <Projects />
      <Integrations />
      <Faqs />
      <Footer />
    </>
  );
}
