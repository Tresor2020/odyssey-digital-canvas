
import { Award, Film, Camera, School, User } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      year: "2014",
      title: "Film Scholarship Achievement",
      description: "Won a prestigious scholarship to study film, launching my creative journey into the world of storytelling and visual arts.",
      icon: Award,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2014-2016",
      title: "Professional Filmmaker",
      description: "Established myself as a professional filmmaker, creating compelling narratives and mastering the craft of visual storytelling.",
      icon: Film,
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "2016",
      title: "African Adventure",
      description: "Embarked on an epic 9-month journey across Africa in a caravan with my 2-year-old daughter, working on social innovation projects.",
      icon: Camera,
      color: "from-green-400 to-teal-500",
    },
    {
      year: "2016-2017",
      title: "Co-founder of Kin-startuplab.net",
      description: "Co-founded an innovation company focused on social impact and technological solutions across African communities.",
      icon: User,
      color: "from-purple-400 to-pink-500",
    },
    {
      year: "2017-2020",
      title: "Berlin Creative Professional",
      description: "Moved to Germany, working as storyteller, filmmaker, videographer, and teaching basic filmmaking in Berlin's vibrant creative scene.",
      icon: School,
      color: "from-red-400 to-pink-500",
    },
    {
      year: "2018-Present",
      title: "Nzaaa Gallery Artist",
      description: "Developed my artistic expression through painting, creating the Nzaaa Gallery to showcase my visual artwork and creative vision.",
      icon: Film,
      color: "from-indigo-400 to-purple-500",
    },
    {
      year: "2020-Present",
      title: "Cybersecurity Analyst",
      description: "Transitioned into cybersecurity, applying analytical skills and creative problem-solving to protect digital infrastructure and data.",
      icon: User,
      color: "from-gray-600 to-blue-600",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of continuous growth, exploration, and transformation across continents and industries.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full z-10"></div>

              {/* Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
                    <item.icon size={24} />
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
