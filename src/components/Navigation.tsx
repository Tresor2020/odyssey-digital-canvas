
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Home, User, Clock, Droplets, Lightbulb, Shield, BookOpen, Images, Mail, Film } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: t("navigation.home"), href: "#home", icon: Home },
    { name: t("navigation.about"), href: "#about", icon: User },
    { name: t("navigation.journey"), href: "#timeline", icon: Clock },
    { name: t("navigation.waterProject"), href: "#water-project", icon: Droplets },
    { name: t("navigation.innovation"), href: "#innovation", icon: Lightbulb },
    { name: t("navigation.cybersecurity"), href: "#cybersecurity", icon: Shield },
    { name: t("navigation.book"), href: "#book", icon: BookOpen },
    { name: t("navigation.cineflix"), href: "#cineflix", icon: Film },
    { name: t("navigation.gallery"), href: "#gallery", icon: Images },
    { name: t("navigation.contact"), href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tresor ILunga Mukuna
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-blue-50"
                >
                  <IconComponent size={18} />
                  <span className="text-sm">{item.name}</span>
                </button>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-left"
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
