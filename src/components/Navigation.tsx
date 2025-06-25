
import { useState } from "react";
import { Menu, X, Home, User, Clock, Droplets, Lightbulb, Shield, BookOpen, Images, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Journey", href: "#timeline", icon: Clock },
    { name: "Water Project", href: "#water-project", icon: Droplets },
    { name: "Innovation", href: "#innovation", icon: Lightbulb },
    { name: "Cybersecurity", href: "#cybersecurity", icon: Shield },
    { name: "Book", href: "#book", icon: BookOpen },
    { name: "Gallery", href: "#gallery", icon: Images },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tresor ILunga Mukuna
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-blue-50"
                >
                  <IconComponent size={18} />
                  <span className="text-sm">{item.name}</span>
                </a>
              );
            })}
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
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent size={18} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
