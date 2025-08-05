
import { Droplets, Heart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const WaterProject = () => {
  const { t } = useTranslation();
  return (
    <section id="water-project" className="py-12 sm:py-20 bg-gradient-to-br from-cyan-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {t("waterProject.title")}
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("waterProject.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Water Project Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/606ae225-2d1a-48b8-bfb3-32cae82446d6.png" 
                alt="Community member celebrating access to clean water in Africa" 
                className="w-full max-w-md rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{t("waterProject.content.title")}</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("waterProject.content.paragraph1")}
                </p>
                
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("waterProject.content.paragraph2")}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("waterProject.content.paragraph3")}
                </p>
              </div>
            </div>

            {/* Project Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Droplets className="mx-auto text-cyan-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">{t("waterProject.impact.cleanWater.title")}</h4>
                <p className="text-sm text-gray-600">{t("waterProject.impact.cleanWater.description")}</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Users className="mx-auto text-blue-600 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">{t("waterProject.impact.community.title")}</h4>
                <p className="text-sm text-gray-600">{t("waterProject.impact.community.description")}</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="mx-auto text-red-500 mb-2" size={32} />
                <h4 className="font-semibold text-gray-800">{t("waterProject.impact.spiritual.title")}</h4>
                <p className="text-sm text-gray-600">{t("waterProject.impact.spiritual.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterProject;
