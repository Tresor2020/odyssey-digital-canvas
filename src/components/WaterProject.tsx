
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
          <div className="flex flex-col items-center space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/606ae225-2d1a-48b8-bfb3-32cae82446d6.png" 
                  alt="Community member celebrating access to clean water in Africa" 
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img 
                  src="/lovable-uploads/1206d388-9011-4975-a21a-e29e4465c9b1.png" 
                  alt="Joy and celebration as clean water flows from the well" 
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="/lovable-uploads/e7534747-cb85-4e40-b59c-b07779ce16cc.png" 
                alt="Showing the precious water from the community well project" 
                className="w-40 h-52 sm:w-48 sm:h-60 object-cover shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                style={{
                  borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              ></div>
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
