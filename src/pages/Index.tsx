
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import WaterProject from "@/components/WaterProject";
import Innovation from "@/components/Innovation";
import Cybersecurity from "@/components/Cybersecurity";
import Book from "@/components/Book";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <WaterProject />
      <Innovation />
      <Cybersecurity />
      <Book />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
