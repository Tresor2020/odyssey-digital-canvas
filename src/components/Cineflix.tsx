import { Play, Film, Video, Camera } from "lucide-react";

const Cineflix = () => {
  return (
    <section id="cineflix" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ea8f8e29-220c-4860-97a0-c6d837c0c48f.png"
          alt="Cineflix Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Film className="w-12 h-12 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold">Cineflix</h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated space for my documentaries, short films, and cinematic experiments. 
            From cultural memory to radical innovation, these visual stories reflect my journey 
            as a filmmaker, storyteller, and seeker.
          </p>
          <p className="text-lg text-gray-400 mt-4">
            Inspired by the original Cineflix Archive at KinStartupLab
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Video className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Documentaries</h3>
            <p className="text-gray-300">
              Award-winning documentaries exploring cultural narratives and human stories
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Camera className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Short Films</h3>
            <p className="text-gray-300">
              Experimental narratives and artistic visual expressions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Play className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Cinematic Experiments</h3>
            <p className="text-gray-300">
              Innovative storytelling techniques and visual exploration
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://kinstartuplab.wixsite.com/mysite-2/my-cineflix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Play size={20} />
            View Original Cineflix Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cineflix;