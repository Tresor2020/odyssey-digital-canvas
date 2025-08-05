
import { ShoppingCart, Book as BookIcon, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const Book = () => {
  const { t } = useTranslation();
  return (
    <section id="book" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t("book.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("book.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                src="/lovable-uploads/0cf2e577-bd93-42ce-8952-bf70acde441a.png" 
                alt="Kongo Spirit Water - Journey Book Cover" 
                className="w-full max-w-md rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{t("book.bookTitle")}</h3>
              <p className="text-xl text-blue-600 font-semibold">{t("book.author")}</p>
              <div className="flex items-center gap-2 mt-2">
                <BookIcon className="text-blue-500" size={20} />
                <span className="text-sm text-gray-600">{t("book.newRelease")}</span>
              </div>
            </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {t("book.description.paragraph1")}
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {t("book.description.paragraph2")}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {t("book.description.paragraph3")}
                </p>

                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400 my-6">
                  <h4 className="text-lg font-semibold text-cyan-800 mb-3">{t("book.spiritualDimension.title")}</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {t("book.spiritualDimension.description")}
                  </p>
                  <blockquote className="mt-4 text-cyan-700 font-medium italic">
                    {t("book.spiritualDimension.quote")}
                  </blockquote>
                </div>
              </div>

            {/* Pricing and Purchase */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-blue-600">{t("book.pricing.price")}</span>
                  <p className="text-sm text-gray-600">{t("book.pricing.shipping")}</p>
                </div>
                <Heart className="text-red-500" size={24} />
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  onClick={() => window.open('https://kinstartuplab.wixsite.com/mysite-2/my-e-book', '_blank')}
                >
                  <ShoppingCart size={20} />
                  {t("book.buttons.purchase")}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://kinstartuplab.wixsite.com/mysite-2/my-e-book', '_blank')}
                >
                  {t("book.buttons.learnMore")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
