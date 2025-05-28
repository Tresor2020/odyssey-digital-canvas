
import { Droplets, Heart, Users } from "lucide-react";

const WaterProject = () => {
  return (
    <section id="water-project" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Water Project for Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey to bring clean, potable water to communities in the heart of Africa - the KONGO homeland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Water Project Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/606ae225-2d1a-48b8-bfb3-32cae82446d6.png" 
                alt="Community member celebrating access to clean water in Africa" 
                className="w-full max-w-md rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Bringing Water to Life</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Responding to the call of ancestors and the urgent need of communities, this project represents a spiritual and practical journey to provide access to clean, drinkable water sources in the KONGO region.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  What began as a simple mission to address water scarcity became a transformative adventure that touched the lives of entire communities, revealing the profound connection between humanity and this sacred element.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The project showcases the magical encounter between communities and water sources, demonstrating how access to clean water creates ripples of joy, health, and prosperity throughout African communities.
                </p>
              </div>
            </div>

            {/* Project Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Droplets className="mx-auto text-cyan-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Clean Water</h4>
                <p className="text-sm text-gray-600">Access to potable water sources</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Users className="mx-auto text-blue-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Community</h4>
                <p className="text-sm text-gray-600">Transforming lives together</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="mx-auto text-red-500 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">Spiritual Journey</h4>
                <p className="text-sm text-gray-600">Connection to ancestral wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterProject;
