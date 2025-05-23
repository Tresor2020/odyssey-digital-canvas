
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
          {/* Artwork pieces with more meaningful descriptions */}
          <ArtworkCard 
            title="Spiritual Awakening"
            description="A journey through consciousness and spiritual enlightenment"
            emoji="✨"
          />
          <ArtworkCard 
            title="Unseen Realities"
            description="Revealing dimensions beyond ordinary perception"
            emoji="👁️"
          />
          <ArtworkCard 
            title="Cultural Tapestry"
            description="Weaving together diverse human experiences across cultures"
            emoji="🌍"
          />
          <ArtworkCard 
            title="Divine Connection"
            description="Exploring the relationship between humanity and the sacred"
            emoji="🕊️"
          />
          <ArtworkCard 
            title="Hidden Narratives"
            description="Stories that exist in the margins of collective consciousness"
            emoji="📜"
          />
          <ArtworkCard 
            title="Transcendent Vision"
            description="Bridging the visible and invisible aspects of existence"
            emoji="🌌"
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

// Artwork card component for cleaner code organization
const ArtworkCard = ({ title, description, emoji }: { title: string; description: string; emoji: string }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="aspect-square bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <Button variant="secondary" size="sm" className="flex items-center gap-1">
          <Eye size={16} />
          View Artwork
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
