import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            A Decade of 
            <span className="block">Innovation & Adventure</span>
          </h1>
          
          <p className="text-sm sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Rooted in technology from an early age through high school studies in signal systems, automation, and binary logic, I later transitioned into film, producing award-winning documentaries after earning a Bachelor of Arts from CPUT. Today, I combine creative and analytical thinking as a cybersecurity analyst and virtual Chief Information Security Officer, while also exploring ancient wisdom through Nzaaa Painting, my expression in visual art.
          </p>
          
          <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 font-semibold">
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
