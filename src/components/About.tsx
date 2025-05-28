
import { Shield, Code, BookOpen, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Tresor Ilunga Mukuna
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/2614a0fb-87ec-42da-955b-a4c5d85b6c30.png" 
                alt="Tresor Ilunga Mukuna - Professional Portrait" 
                className="w-full max-w-md rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="space-y-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Passionate about innovation, cybersecurity, digital technology, and visual storytelling, I bring a strong foundation in analytical thinking and problem-solving. I'm skilled in threat analysis, vulnerability assessments, and risk mitigation, with expertise in security architecture, SIEM, networking, and cloud security.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                As a Virtual CISO (vCISO) and Cybersecurity Consultant, I help organizations protect their data, manage risks, and ensure compliance with global standards like POPIA and GDPR. With experience in SOC analysis, SIEM, and cyber threat intelligence, I provide strategic, hands-on leadership to businesses looking for a comprehensive cybersecurity program. I'm passionate about simplifying complex security concepts and making them actionable.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                In addition to my cybersecurity work, I'm also an Author, Visual Storyteller, and Co-Founder of Kin-StartupLab, where I merge my creative and entrepreneurial skills to drive innovation.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <Shield className="text-blue-600" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Cybersecurity</h4>
                  <p className="text-sm text-gray-600">vCISO & Consultant</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <Code className="text-purple-600" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Technology</h4>
                  <p className="text-sm text-gray-600">Digital Innovation</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <BookOpen className="text-green-600" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Author</h4>
                  <p className="text-sm text-gray-600">Visual Storyteller</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <Lightbulb className="text-orange-600" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800">Innovation</h4>
                  <p className="text-sm text-gray-600">Kin-StartupLab</p>
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
