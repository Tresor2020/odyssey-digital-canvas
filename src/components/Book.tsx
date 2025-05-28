
import { ShoppingCart, Book as BookIcon, Heart } from "lucide-react";
import { Button } from "./ui/button";

const Book = () => {
  return (
    <section id="book" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Published Book
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A spiritual journey through the heart of Africa, exploring the sacred connection between humanity and water.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/0cf2e577-bd93-42ce-8952-bf70acde441a.png" 
                alt="Kongo Spirit Water - Journey Book Cover" 
                className="w-full max-w-md rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">KONGO Spirit Water - Journey</h3>
              <p className="text-xl text-blue-600 font-semibold">by Tresor Ilunga Mukuna</p>
              <div className="flex items-center gap-2 mt-2">
                <BookIcon className="text-blue-500" size={20} />
                <span className="text-sm text-gray-600">NEW BOOK RELEASE</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                With an enthusiastic and positive attitude, I responded to a spirit and echoing voice from my ancestors to come back into the heart of Africa, my homeland the KONGO to start a project adventure for a search of potable and drinkable water sources for my community well as my parent who was lacking it daily.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Although we witness the magical encounter of man and water source, however, success wasn't the final destination. An adventure that turns out not only to be an awakening journey that took me, my family, and the whole community into the tunnel voyage of fear, sorrow, nostalgia from the past, world political glimpses, organized religion, the sacred African spirituality, and now the spiritual crisis in Africa, the illusion of existing enemies, witnessing angels in the sky and evil-doers dancing then facing a mirror of witchcraft and realized that death was the only way toward awakening.
              </p>

              <p className="text-gray-700 leading-relaxed">
                A journey of inner and outer surrender which reveals the natural secret of self-healing methods, which we all have abilities to access and manifest. A concord adventure that was the echoes of African ancestors. A journey beyond the shadow of doubt and the encounter of man and water throughout the rise up of the shining sun.
              </p>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400 my-6">
                <h4 className="text-lg font-semibold text-cyan-800 mb-3">SPIRITUAL DIMENSION OF WATER</h4>
                <p className="text-gray-700 leading-relaxed">
                  If there is one sacred element in our beautiful blue planet that can claim an ability to contain physical and spiritual energies from a macro-level which connect us all, well as scientific and spiritual information on every living thing and being, it is for sure our MOTHER WATER - A carrier of it all. Water is a living spirit, full of life, and those who obey and surrender to it will flourish.
                </p>
                <blockquote className="mt-4 text-cyan-700 font-medium italic">
                  "Where water is the Lord there, the land must obey." – African Proverb
                </blockquote>
              </div>
            </div>

            {/* Pricing and Purchase */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-blue-600">€9.90</span>
                  <p className="text-sm text-gray-600">Shipping within Germany: €4.50</p>
                </div>
                <Heart className="text-red-500" size={24} />
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  onClick={() => window.open('https://kinstartuplab.wixsite.com/mysite-2/my-e-book', '_blank')}
                >
                  <ShoppingCart size={20} />
                  Purchase Book
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://kinstartuplab.wixsite.com/mysite-2/my-e-book', '_blank')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
