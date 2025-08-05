
import { Shield, Code, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Tresor Ilunga Mukuna
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Profile Image - Now on the left */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="/lovable-uploads/2d26a8ea-7db4-49ba-b8a2-c47001cc1c4c.png" 
                alt="Tresor Ilunga Mukuna - Professional Portrait" 
                className="w-full max-w-md rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Profile Content - Now on the right */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                I am Tresor ILunga Mukuna, a passionate explorer, innovator, and technology leader with a deep commitment to bridging African innovation with global solutions. My journey spans from the ancient kingdoms of Kongo to modern cybersecurity landscapes.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                As an author, I've documented the rich history of African civilizations, particularly the Kongo Kingdom's enduring legacy. Through my exploration projects across Africa, I've witnessed firsthand the continent's incredible potential for innovation and technological advancement.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                My work in cybersecurity and technology focuses on creating secure, accessible solutions that can benefit communities across Africa and beyond. I believe in the power of storytelling, exploration, and technology to create positive change in the world.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Shield className="text-blue-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Cybersecurity</h4>
                    <p className="text-sm text-gray-600">Advanced security solutions and threat assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Code className="text-purple-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Technology</h4>
                    <p className="text-sm text-gray-600">Innovative tech solutions for African markets</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <BookOpen className="text-green-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Author</h4>
                    <p className="text-sm text-gray-600">Historical documentation and storytelling</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                  <Lightbulb className="text-orange-600" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Innovation</h4>
                    <p className="text-sm text-gray-600">Bridging traditional knowledge with modern tech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

