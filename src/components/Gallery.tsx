
import { ChevronRight, Eye } from "lucide-react";
import { Button } from "./ui/button";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nzaaa Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Untold stories and spiritual awakening through visual art — what is obvious but out of sight for modern man. a glimpse of wisdom of the ages.
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
          <Button className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Explore Full Gallery
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Updated artwork card component to display actual images
const ArtworkCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <Button variant="secondary" size="sm" className="self-start flex items-center gap-1">
          <Eye size={16} />
          View Artwork
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
