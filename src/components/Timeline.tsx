
import { Award, Film, Camera, School, User, Droplets, Book, Shield, Instagram } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      year: "Nov 2024 - Present",
      title: "Cybersecurity Analyst - GRC / Risk & Compliance",
      description: "Webeet.io IT Cybersecurity - Berlin. Monitor threats and anomalies using SIEM tools, support incident response, perform vulnerability assessments, and advise on remediation strategies for sophisticated digital solutions.",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      image: "/lovable-uploads/68ae38dd-ceea-4eb8-9e30-bfa9cbf6d060.png",
    },
    {
      year: "2012-2014",
      title: "BA Film Science - Cape Peninsula University",
      description: "Earned Bachelor of Arts in Film Science in Cape Town, South Africa. Demonstrated strong storytelling, technical proficiency, and leadership through writing, directing, and editing films and documentaries.",
      icon: School,
      color: "from-blue-400 to-blue-600",
      image: "/lovable-uploads/32f0c9cc-67b0-41ab-ac26-2065d9a34682.png",
    },
    {
      year: "April 2019",
      title: "Water Project in DR Congo",
      description: "Community water project in DR Congo - developed innovative, renewable methods to drill for crystal and potable water for underprivileged families. Provided clean water access to many families through collaborative community efforts.",
      icon: Droplets,
      color: "from-cyan-400 to-blue-500",
      link: "https://www.goodcrowd.org/water-for-all?fbclid=IwY2xjawL4KqBleHRuA2FlbQIxMABicmlkETBqbTIxb28xNjBBcUpNQjdRAR61i_2qHFokZ6rGrw8iRAdzPaap1Sq8bIPMxtZFg0uwhuz4lu1VIWOO6x48PQ_aem_5p-iEquTNyEUZ9pucIt8Xg",
    },
    {
      year: "2016-2020",
      title: "African Adventure - UBUNTU MAKASI",
      description: "Embarked on an epic 9-month journey across Africa in a caravan with my 2-year-old daughter, working on social innovation projects and founding Kin-StartupLAB.",
      icon: Camera,
      color: "from-green-400 to-teal-500",
      image: "/lovable-uploads/african-adventure-heavy-blur.png",
      link: "https://africanperspectivesblog.wordpress.com/2015/12/02/ubuntu-makasi/",
      instagram: "https://www.instagram.com/ubuntumakasi/",
    },
    {
      year: "June 2020 - January 2024",
      title: "Project Manager & Innovation Lead - Kin-StartupLAB",
      description: "Led 5+ cross-sector innovation projects across Berlin, Cape Town, and Kinshasa. Spearheaded digital inclusion initiatives, clean water systems for 300+ families, and developed CuckooPack (SENDME), R.Post, SmartKargo. Mentored 30+ entrepreneurs, supported ISO 27001 and GDPR compliance, contributed to cloud security reviews and policy documentation.",
      icon: User,
      color: "from-purple-400 to-pink-500",
      image: "/lovable-uploads/713d6420-0274-47da-97cf-b80244f282e0.png",
    },
    {
      year: "2024",
      title: "MasterSchool Cybersecurity Bootcamp",
      description: "Completed intensive 1,440-hour cybersecurity program in Berlin. Trained in Splunk, Wireshark, threat intelligence, incident handling, and AI-driven security strategies.",
      icon: Shield,
      color: "from-red-400 to-orange-500",
      image: "/lovable-uploads/d91b4ddb-6b70-4e31-aef2-f1a777d0f81a.png",
    },
    {
      year: "Nov 2024 - Jan 2025",
      title: "Security Engineer - SENDME App",
      description: "Integrated MFA authentication security, performed threat modeling and code reviews, enhanced fraud prevention with anomaly detection and secure transaction validation in Cape Town.",
      icon: Shield,
      color: "from-indigo-400 to-purple-500",
      image: "/lovable-uploads/0d555220-f965-4489-aeb5-2fd0006d8844.png",
    },
    {
      year: "January 2021 - December 2021",
      title: "Cybersecurity Support Specialist - Sykes Berlin",
      description: "Banking Security for Sykes/Klarna & Expondo Projects. Delivered exceptional customer service while raising awareness about cyber-attacks, focusing on fraud prevention and social engineering threats. Promoted security best practices and implemented policies to safeguard customer data.",
      icon: Shield,
      color: "from-red-400 to-pink-500",
    },
    {
      year: "July 2020 - December 2020",
      title: "Operations Specialist - Amazon Berlin",
      description: "Optimized parcel tracking, ensured efficient routing, and coordinated shipments for timely deliveries. Proficient in tracking systems (GPS, RFID) and logistics software including IBP, Oracle Transportation Management (OTM).",
      icon: User,
      color: "from-orange-400 to-red-500",
      image: "/lovable-uploads/e0eb74dc-baa5-410f-98ad-6859d3e18bf9.png",
    },
    {
      year: "February 2016 - Present",
      title: "Film & Video Producer - Freelancer",
      description: "Worked as freelance film and video producer across Berlin & Cape Town, creating compelling visual content and managing production workflows for diverse clients and projects.",
      icon: Film,
      color: "from-purple-400 to-indigo-500",
      image: "/lovable-uploads/777a3e81-d2ce-484c-87b7-0f2f5d6fbc68.png",
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
                  {item.image && (
                    <div className="mt-4 flex justify-center">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded-full cursor-pointer transition-transform duration-300 hover:scale-[5] active:scale-[5] shadow-lg hover:shadow-xl z-10 relative"
                        onClick={(e) => {
                          e.currentTarget.classList.toggle('scale-[5]');
                          setTimeout(() => {
                            e.currentTarget.classList.remove('scale-[5]');
                          }, 2000);
                        }}
                      />
                    </div>
                  )}
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Learn more →
                    </a>
                  )}
                  {item.instagram && (
                    <a 
                      href={item.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-3 ml-4 text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <Instagram size={20} className="mr-1" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  )}
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
