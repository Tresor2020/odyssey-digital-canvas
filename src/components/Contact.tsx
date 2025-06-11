
import { Film, User, Award } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're interested in filmmaking, innovation projects, cybersecurity, or art collaboration — I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">
              <Film size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Filmmaking & Creative</h3>
            <p className="text-gray-600">Storytelling, video production, and creative collaborations</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4">
              <User size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation & Consulting</h3>
            <p className="text-gray-600">Social innovation projects and startup development</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Cybersecurity</h3>
            <p className="text-gray-600">Digital security analysis and threat assessment</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/trésor-ilunga-mukuna-b69b6518/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
