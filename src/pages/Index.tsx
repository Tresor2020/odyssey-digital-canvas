
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import WaterProject from "@/components/WaterProject";
import Innovation from "@/components/Innovation";
import Cybersecurity from "@/components/Cybersecurity";
import Book from "@/components/Book";
import Cineflix from "@/components/Cineflix";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const paypalOptions = {
  clientId: "sb",
  currency: "EUR",
  intent: "capture",
  components: "buttons",
};


const Index = () => {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <Hero />
        <About />
        <Timeline />
        <WaterProject />
        <Innovation />
        <Cybersecurity />
        <Book />
        <Cineflix />
        <Gallery />
        <Contact />
      </div>
    </PayPalScriptProvider>
  );
};

export default Index;
