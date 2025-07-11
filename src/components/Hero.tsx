import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            A Decade of 
            <span className="block">Innovation & Adventure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rooted in technology from an early age, through high school studies in signal systems, automation, and binary logic, I later transitioned into filmmaking, producing award-winning documentaries after earning a Bachelor of Arts from CPUT. Today, I bridge creative storytelling and analytical thinking as a cybersecurity analyst and VCISO. I also explore ancestral memory and ancient wisdom through Nzaaa Painting, my personal expression in visual art.
          </p>
          
          <div className="space-y-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🖼️ Nzaaa Painting – Art for the Soul</h3>
              <p className="text-lg text-gray-600 mb-4">
                Signed, high-resolution digital scans and fine art prints of my paintings are available for purchase.
              </p>
              <div className="text-gray-600">
                <p><strong>Formats:</strong> A2, A3, A1</p>
                <p>Other sizes available upon request</p>
                <p><strong>Shipping:</strong> +7 EUR in Europe</p>
                <p className="mt-2"><strong>Payment options:</strong></p>
                <ul className="ml-4 list-disc">
                  <li>PayPal: tresor.mac@gmail.com</li>
                  <li>Crypto accepted (details on request)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📍 Contact</h3>
              <div className="text-gray-600">
                <p><strong>Email:</strong> tresor.mac@gmail.com</p>
                <p><strong>Phone:</strong> +49 30 - 98434071</p>
                <p><strong>WhatsApp:</strong> +49 152 04443475</p>
                <p><strong>Locations:</strong> Berlin (Germany), Kinshasa (DRC), Cape Town (South Africa)</p>
                <p>Available worldwide for remote collaboration</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🎬 Cineflix – My Visual Stories</h3>
              <p className="text-lg text-gray-600 mb-4">
                Cineflix is a dedicated space for my documentaries, short films, and cinematic experiments.
                From cultural memory to radical innovation, these visual stories reflect my journey as a filmmaker, storyteller, and seeker.
                Inspired by the original Cineflix Archive at KinStartupLab.
              </p>
              <a 
                href="https://kinstartuplab.wixsite.com/mysite-2/my-cineflix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
              >
                View Original Cineflix Collection
              </a>
            </div>
          </div>
          
          <p className="text-lg text-gray-500 mb-8 font-semibold">
            Exploring, creating, securing — always evolving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#timeline"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore My Journey
            </a>
            <a
              href="#gallery"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Nzaaa Gallery
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
