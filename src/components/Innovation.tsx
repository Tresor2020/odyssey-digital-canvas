
import { Compass, Map, Lightbulb } from "lucide-react";

const Innovation = () => {
  return (
    <section id="innovation" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            African Innovation & Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of tradition and innovation across the African continent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Innovation Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Journey of Discovery</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Through Kin-StartupLab and various innovation projects, I've explored the vast potential of African entrepreneurship and technological advancement, connecting traditional wisdom with modern solutions.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The journey across Africa has been one of continuous learning, where each community visited offered unique insights into sustainable development, innovation, and the power of collective action.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  From mobile caravan expeditions to community-based innovation labs, these adventures have shaped my understanding of how technology and tradition can work together to create lasting positive impact.
                </p>
              </div>
            </div>

            {/* Innovation Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Compass className="mx-auto text-orange-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Exploration</h4>
                <p className="text-sm text-gray-600">Continental adventures</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Lightbulb className="mx-auto text-yellow-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Innovation</h4>
                <p className="text-sm text-gray-600">Startup ecosystems</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Map className="mx-auto text-green-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Impact</h4>
                <p className="text-sm text-gray-600">Community development</p>
              </div>
            </div>
          </div>

          {/* Caravan Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/f55479b3-2d01-4dc5-98d6-f5c8097e51ce.png" 
                alt="Adventure caravan for African innovation journey" 
                className="w-full max-w-md rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
