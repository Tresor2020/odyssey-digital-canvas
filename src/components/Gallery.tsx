
import { ChevronRight, Eye, ShoppingCart, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import QRCode from "react-qr-code";

const Gallery = () => {
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
              Nzaaa Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Untold stories and spiritual awakening through visual art — what is obvious but out of sight for modern man. a glimpse of wisdom of the ages.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Digitally scanned, signed and printed artwork available for purchase. A3 format: €25 (other formats available upon request). Delivery +7 EUR in Europe. Payment via PayPal (tresor.mac@gmail.com).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Actual artwork pieces */}
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
              Each piece invites viewers to transcend ordinary perception and glimpse the deeper currents of spiritual and cultural truths.
            </p>
            
            {/* QR Code Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg inline-block mb-6">
              <div className="flex items-center gap-4 mb-4">
                <QrCode className="text-blue-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Quick Access</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Scan to visit Nzaaa Gallery</p>
              <QRCodeCanvas />
            </div>
            
            <Button className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Explore Full Gallery
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
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
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

// QR Code Component
const QRCodeCanvas = () => {
  const galleryUrl = `${window.location.origin}#gallery`;

  return (
    <div className="p-4 bg-white rounded-lg border">
      <QRCode 
        value={galleryUrl} 
        size={120}
        fgColor="#1d4ed8"
        bgColor="#ffffff"
        level="M"
      />
    </div>
  );
};

export default Gallery;
