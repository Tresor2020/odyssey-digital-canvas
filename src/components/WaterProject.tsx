
import { Droplets, Heart, Users } from "lucide-react";

const WaterProject = () => {
  return (
    <section id="water-project" className="py-12 sm:py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Water Project for Africa
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A journey to bring clean, potable water to communities in the heart of Africa - the KONGO homeland.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Water Project Images */}
          <div className="flex flex-col items-center space-y-6">
            {/* Top row - 3 images */}
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/8f5b8cbe-c285-4c23-a397-346cb4bb75ce.png" 
                  alt="Community members collecting water from the well" 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/0eac97b0-a13b-480f-b98a-2400e607cd7e.png" 
                  alt="Clean water flowing into a bucket" 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/8211f785-3276-4e57-b0af-c5f51d52ce6f" 
                  alt="Testing water quality from the well" 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Middle row - 2 larger center images */}
            <div className="flex justify-center gap-6">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/22280363-305f-42a2-9051-409e70c61dda.png" 
                  alt="Community celebration with water from the well" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/5210def7-99b8-4dc8-80bc-1978e0a60a77.png" 
                  alt="Water flowing and community using the well" 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Bottom row - 4 images */}
            <div className="flex justify-center gap-3 flex-wrap">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/57a21665-c0b2-4768-82ba-45fd708f4211.png" 
                  alt="Water quality analysis samples" 
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/28869b21-6e40-474b-b45a-9c075a0e516e.png" 
                  alt="Well installation and distribution system" 
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/4c3e69d3-3113-47b8-a76b-8153ba9ea0e9.png" 
                  alt="Community working together on the well project" 
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/4ad93212-bcbe-4c6c-abb6-d0ef2d86fa7f.png" 
                  alt="Ground samples and well drilling progress" 
                  className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Bring water to all</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  In response to the call of our ancestors and the pressing needs of our people, this project became both a sacred offering and a practical mission: to bring clean, drinkable water to the heart of the KONGO region.
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  What began as a simple act of service grew into a life-altering journey. It reawakened the deep bond between humanity and this elemental force. Water is not just a resource. It is life, memory, healing, and renewal.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  In the rural community of Bibwa, Kongo-Kinshasa, we witnessed the powerful reunion between people and the sacred source. This project captured that magical moment when clean water emerged from the earth, sparking waves of joy, health, and prosperity throughout the village.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  The vision was born from an ancestral whisper. I followed that echo, and with the strength of the community, we came together, guided by spirit and powered by our hands, to drill over 23 meters into the earth. What emerged was not just water, but hope.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This journey was both spiritual and physical. It nearly took my life. And yet, it gave life to many.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This project is only the beginning, a seed planted with love and purpose. My long-term vision is to bring potable water to every community in need. Not just through wells, but through sustainable, eco-conscious systems of tap water, powered by innovation, ancestral wisdom, and collective action.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Clean water is a birthright. And together, we will reclaim it for all of Africa.
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <a 
                    href="https://www.goodcrowd.org/water-for-all?fbclid=IwY2xjawL4KqBleHRuA2FlbQIxMABicmlkETBqbTIxb28xNjBBcUpNQjdRAR61i_2qHFokZ6rGrw8iRAdzPaap1Sq8bIPMxtZFg0uwhuz4lu1VIWOO6x48PQ_aem_5p-iEquTNyEUZ9pucIt8Xg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-800 underline"
                  >
                    Read more about this project →
                  </a>
                </p>
              </div>
            </div>

            {/* Project Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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
