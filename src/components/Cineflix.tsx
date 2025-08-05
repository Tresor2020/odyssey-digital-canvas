import { Play, Film, Video, Camera } from "lucide-react";
import { useTranslation } from "react-i18next";

const Cineflix = () => {
  const { t } = useTranslation();
  return (
    <section id="cineflix" className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ea8f8e29-220c-4860-97a0-c6d837c0c48f.png"
          alt="Cineflix Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/30"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Film className="w-8 h-8 sm:w-12 sm:h-12 text-red-500" />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">{t("cineflix.title")}</h2>
          </div>
          <p className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("cineflix.subtitle")}
          </p>
          <p className="text-sm sm:text-lg text-gray-400 mt-3 sm:mt-4">
            {t("cineflix.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Video className="w-10 h-10 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t("cineflix.categories.documentaries.title")}</h3>
            <p className="text-gray-300">
              {t("cineflix.categories.documentaries.description")}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Camera className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t("cineflix.categories.shortFilms.title")}</h3>
            <p className="text-gray-300">
              {t("cineflix.categories.shortFilms.description")}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Play className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{t("cineflix.categories.cinematicExperiments.title")}</h3>
            <p className="text-gray-300">
              {t("cineflix.categories.cinematicExperiments.description")}
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
            {t("cineflix.cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cineflix;