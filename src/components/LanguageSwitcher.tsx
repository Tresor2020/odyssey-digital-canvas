import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe, Loader } from 'lucide-react';
import useAITranslation from '@/hooks/useAITranslation';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { isTranslating } = useAITranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-blue-50"
      >
        {isTranslating ? <Loader size={18} className="animate-spin" /> : <span className="text-lg">{currentLanguage.flag}</span>}
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center gap-3 w-full px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${
                  i18n.language === language.code 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;