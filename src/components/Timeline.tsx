
import { Award, Film, Camera, School, User, Droplets, Book, Shield } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      year: "Nov 2024 - Present",
      title: "Cybersecurity Analyst - GRC / Risk & Compliance",
      description: "Webeet.io IT Cybersecurity - Berlin. Monitor threats and anomalies using SIEM tools, support incident response, perform vulnerability assessments, and advise on remediation strategies for sophisticated digital solutions.",
      icon: Shield,
      color: "from-red-500 to-orange-600",
    },
    {
      year: "2012-2014",
      title: "BA Film Science - Cape Peninsula University",
      description: "Earned Bachelor of Arts in Film Science in Cape Town, South Africa. Demonstrated strong storytelling, technical proficiency, and leadership through writing, directing, and editing films and documentaries.",
      icon: School,
      color: "from-blue-400 to-blue-600",
    },
    {
      year: "Early 2010s",
      title: "Water Project in Africa",
      description: "Led water infrastructure development project across African communities, focusing on sustainable water solutions and community empowerment through innovative approaches.",
      icon: Droplets,
      color: "from-cyan-400 to-blue-500",
    },
    {
      year: "2016-2020",
      title: "African Adventure & Innovation",
      description: "Embarked on an epic 9-month journey across Africa in a caravan with my 2-year-old daughter, working on social innovation projects and founding Kin-StartupLAB.",
      icon: Camera,
      color: "from-green-400 to-teal-500",
    },
    {
      year: "June 2020 - January 2024",
      title: "Project Manager & Innovation Lead - Kin-StartupLAB",
      description: "Led 5+ cross-sector innovation projects across Berlin, Cape Town, and Kinshasa. Spearheaded digital inclusion initiatives, clean water systems for 300+ families, and developed CuckooPack (SENDME), R.Post, SmartKargo. Mentored 30+ entrepreneurs, supported ISO 27001 and GDPR compliance, contributed to cloud security reviews and policy documentation.",
      icon: User,
      color: "from-purple-400 to-pink-500",
    },
    {
      year: "2024",
      title: "MasterSchool Cybersecurity Bootcamp",
      description: "Completed intensive 1,440-hour cybersecurity program in Berlin. Trained in Splunk, Wireshark, threat intelligence, incident handling, and AI-driven security strategies.",
      icon: Shield,
      color: "from-red-400 to-orange-500",
    },
    {
      year: "Nov 2024 - Jan 2025",
      title: "Security Engineer - SENDME App",
      description: "Integrated MFA authentication security, performed threat modeling and code reviews, enhanced fraud prevention with anomaly detection and secure transaction validation in Cape Town.",
      icon: Shield,
      color: "from-indigo-400 to-purple-500",
    },
    {
      year: "2025-Present",
      title: "Cybersecurity Analyst & Author",
      description: "Currently working as Cybersecurity Analyst while completing 'Kongo Spirit Water - Journey' book, combining technical expertise with spiritual and cultural storytelling.",
      icon: Book,
      color: "from-teal-400 to-cyan-500",
    },
    {
      year: "2018-Present",
      title: "Nzaaa Gallery Artist",
      description: "Developed artistic expression through painting, creating the Nzaaa Gallery to showcase visual artwork exploring untold stories, spiritual awakening, and wisdom of the ages.",
      icon: Film,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section id="timeline" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Professional Journey
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From Film Science graduate to Cybersecurity Analyst - a journey spanning water projects in Africa, innovation entrepreneurship, artistic expression, and technical expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-purple-200 rounded-full"></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-6 sm:mb-12 ${
                index % 2 === 0 ? "sm:flex-row flex-col" : "sm:flex-row-reverse flex-col"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white border-2 sm:border-4 border-blue-400 rounded-full z-10"></div>

              {/* Content */}
              <div
                className={`w-full sm:w-5/12 ${
                  index % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                } px-4 sm:px-0`}
              >
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className={`inline-flex p-2 sm:p-3 rounded-full bg-gradient-to-r ${item.color} text-white mb-3 sm:mb-4`}>
                    <item.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
