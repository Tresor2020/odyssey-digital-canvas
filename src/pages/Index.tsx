
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Book from "@/components/Book";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <Timeline />
      <Book />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
