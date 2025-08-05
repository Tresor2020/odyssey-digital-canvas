
import { ChevronRight, Eye, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();
  const paypalOptions = {
    clientId: "test", // In production, use your actual PayPal client ID
    currency: "EUR",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("gallery.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {t("gallery.subtitle")}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              {t("gallery.description")}
            </p>
            
            {/* Gallery Exhibition Poster */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/0d77c468-b1a0-4ba6-a154-a97727062e81.png" 
                alt="Nzaaa Gallery Exhibition Poster - Wisdom of the Ages"
                className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 select-none pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Recently added artwork pieces */}
            <ArtworkCard 
              title="The Return of a Warrior - Umuja-Umuja"
              description="A powerful depiction of warrior spirit and African unity"
              imageSrc="/lovable-uploads/98073be0-2894-439f-aec8-d3e98373aae5.png"
            />
            <ArtworkCard 
              title="Divine Me and the Mask of Society"
              description="Contrasting the authentic self with societal facades"
              imageSrc="/lovable-uploads/8173c9cb-48c0-4f3e-a5b5-c8b13159c06e.png"
            />
            <ArtworkCard 
              title="Celestial Awakening"
              description="Spiritual enlightenment through cosmic consciousness"
              imageSrc="/lovable-uploads/b2a798ab-ef0a-42cd-b875-f550d27fb361.png"
            />
            <ArtworkCard 
              title="The Long and Last Kongo War 1517-2025"
              description="Historical reflection on centuries of conflict and resistance"
              imageSrc="/lovable-uploads/22d4bd60-8adc-408d-aed3-ebc1123bd9e5.png"
            />
            <ArtworkCard 
              title="Nzaaa Mukaji (Mwa Bana)"
              description="Cosmic motherhood and universal feminine wisdom"
              imageSrc="/lovable-uploads/4872790c-493c-4313-b932-40ad871559ce.png"
            />
            <ArtworkCard 
              title="Wisdom of the Ages"
              description="Ancient knowledge preserved through symbolic storytelling"
              imageSrc="/lovable-uploads/61aa55a1-9e31-4cc3-b866-4eb981ac4bcf.png"
            />
            <ArtworkCard 
              title="Divine Lubuko"
              description="Sacred patterns and spiritual geometry in monochrome"
              imageSrc="/lovable-uploads/05e8da57-908c-40ce-89ff-4f73831bf410.png"
            />
            {/* Earlier artwork pieces */}
            <ArtworkCard 
              title="Cultural Fragments"
              description="Exploring the scattered pieces of African identity and heritage"
              imageSrc="/lovable-uploads/621f7902-f391-4ef7-a0a3-774413415b00.png"
            />
            <ArtworkCard 
              title="Dual Consciousness"
              description="The meeting of traditional wisdom and modern awareness"
              imageSrc="/lovable-uploads/00bc3de9-1550-42ff-9c08-d54123543524.png"
            />
            <ArtworkCard 
              title="Sacred Visions"
              description="Framed revelations of spiritual understanding"
              imageSrc="/lovable-uploads/51b4f0d4-04b0-45b9-a505-c6d9c7775a8d.png"
            />
            <ArtworkCard 
              title="Ancestral Dialogue"
              description="Contemporary display of timeless spiritual conversations"
              imageSrc="/lovable-uploads/43dd6145-8282-4a18-8783-f715b678f453.png"
            />
            <ArtworkCard 
              title="Cosmic Connection"
              description="The universe reflected in human consciousness and experience"
              imageSrc="/lovable-uploads/2f44c218-66b3-4906-9b4c-4a9caed693f5.png"
            />
            <ArtworkCard 
              title="Ethereal Transformation"
              description="Spiritual metamorphosis captured in monochromatic depth"
              imageSrc="/lovable-uploads/feaf1dcb-40a0-4a08-b401-eccbd801ed07.png"
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              {t("gallery.cta.description")}
            </p>
            
            
            <Button className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              {t("gallery.cta.button")}
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </PayPalScriptProvider>
  );
};

// Updated artwork card component to display actual images with PayPal integration
const ArtworkCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "25.00",
            currency_code: "EUR"
          },
          description: `${title} - A3 Print`,
          payee: {
            email_address: "tresor.mac@gmail.com"
          }
        }
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING"
      }
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      alert(`Transaction completed by ${details.payer.name.given_name}. Order ID: ${data.orderID}`);
    });
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 select-none pointer-events-none"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none' }}
        />
        {/* Invisible overlay to prevent interactions */}
        <div className="absolute inset-0 bg-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-900 mb-2">A3 Print - €25</p>
          <p className="text-sm text-gray-600 mb-3">Other formats available upon request</p>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            style={{
              layout: "horizontal",
              color: "blue",
              shape: "rect",
              label: "pay"
            }}
          />
        </div>
        <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1 mt-2">
          <Eye size={16} />
          View Full Size
        </Button>
      </div>
    </div>
  );
};


export default Gallery;
