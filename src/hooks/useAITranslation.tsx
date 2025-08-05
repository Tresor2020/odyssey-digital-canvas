import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface TranslationCache {
  [key: string]: {
    [language: string]: string;
  };
}

const useAITranslation = () => {
  const { i18n } = useTranslation();
  const [translationCache, setTranslationCache] = useState<TranslationCache>({});
  const [isTranslating, setIsTranslating] = useState(false);

  const translateText = async (text: string, targetLanguage: string): Promise<string> => {
    // Check cache first
    const cacheKey = text.trim();
    if (translationCache[cacheKey]?.[targetLanguage]) {
      return translationCache[cacheKey][targetLanguage];
    }

    // If target language is English, return original text
    if (targetLanguage === 'en') {
      return text;
    }

    try {
      setIsTranslating(true);

      // Enhanced AI translation mapping - In production, you would integrate with OpenAI, Google Translate, or similar
      const translations: { [key: string]: { [key: string]: string } } = {
        fr: {
          // Hero Section
          'A Decade of': 'Une Décennie de',
          'Innovation & Adventure': 'Innovation et Aventure',
          'Exploring, creating, securing — always evolving.': 'Explorer, créer, sécuriser — toujours évoluer.',
          'Explore My Journey': 'Explorez Mon Parcours',
          'View Nzaaa Gallery': 'Voir la Galerie Nzaaa',
          'Rooted in technology from an early age through high school studies in signal systems, automation, and binary logic, I later transitioned into film, producing award-winning documentaries after earning a Bachelor of Arts from CPUT. Today, I combine creative and analytical thinking as a cybersecurity analyst and virtual Chief Information Security Officer, while also exploring ancient wisdom through Nzaaa Painting, my expression in visual art.': 'Enraciné dans la technologie dès le plus jeune âge grâce aux études de lycée en systèmes de signalisation, automatisation et logique binaire, j\'ai ensuite transitionné vers le cinéma, produisant des documentaires primés après avoir obtenu un Bachelor of Arts de CPUT. Aujourd\'hui, je combine la pensée créative et analytique en tant qu\'analyste en cybersécurité et directeur virtuel de la sécurité de l\'information, tout en explorant la sagesse ancienne à travers la Peinture Nzaaa, mon expression dans l\'art visuel.',
          
          // Navigation & Sections
          'About Tresor Ilunga Mukuna': 'À Propos de Tresor Ilunga Mukuna',
          'Cybersecurity': 'Cybersécurité',
          'Technology': 'Technologie',
          'Author': 'Auteur',
          'Innovation': 'Innovation',
          'Water Project for Africa': 'Projet d\'Eau pour l\'Afrique',
          'African Innovation & Adventure': 'Innovation et Aventure Africaines',
          'Cybersecurity Excellence': 'Excellence en Cybersécurité',
          'The Book of Nzaaa': 'Le Livre de Nzaaa',
          'Cineflix Productions': 'Productions Cineflix',
          'Nzaaa Gallery': 'Galerie Nzaaa',
          'Let\'s Connect': 'Connectons-nous',
          'Contact': 'Contact',
          'Home': 'Accueil',
          'About': 'À Propos',
          'Journey': 'Parcours',
          'My Professional Journey': 'Mon Parcours Professionnel',
          
          // Common terms
          'Digital Innovation': 'Innovation Numérique',
          'vCISO & Consultant': 'vCISO et Consultant',
          'Visual Storyteller': 'Conteur Visuel',
          'Kin-StartupLab': 'Kin-StartupLab',
          'Learn more →': 'En savoir plus →',
          'Read More': 'Lire Plus'
        },
        de: {
          // Hero Section
          'A Decade of': 'Ein Jahrzehnt der',
          'Innovation & Adventure': 'Innovation und Abenteuer',
          'Exploring, creating, securing — always evolving.': 'Erkunden, erschaffen, sichern — immer im Wandel.',
          'Explore My Journey': 'Entdecke Meine Reise',
          'View Nzaaa Gallery': 'Nzaaa Galerie Ansehen',
          'Rooted in technology from an early age through high school studies in signal systems, automation, and binary logic, I later transitioned into film, producing award-winning documentaries after earning a Bachelor of Arts from CPUT. Today, I combine creative and analytical thinking as a cybersecurity analyst and virtual Chief Information Security Officer, while also exploring ancient wisdom through Nzaaa Painting, my expression in visual art.': 'Verwurzelt in der Technologie von früher Kindheit an durch Highschool-Studien in Signalsystemen, Automatisierung und binärer Logik, wechselte ich später zum Film und produzierte preisgekrönte Dokumentarfilme nach dem Erwerb eines Bachelor of Arts von CPUT. Heute verbinde ich kreatives und analytisches Denken als Cybersicherheitsanalyst und virtueller Chief Information Security Officer, während ich auch alte Weisheit durch Nzaaa-Malerei erforsche, mein Ausdruck in der bildenden Kunst.',
          
          // Navigation & Sections
          'About Tresor Ilunga Mukuna': 'Über Tresor Ilunga Mukuna',
          'Cybersecurity': 'Cybersicherheit',
          'Technology': 'Technologie',
          'Author': 'Autor',
          'Innovation': 'Innovation',
          'Water Project for Africa': 'Wasserprojekt für Afrika',
          'African Innovation & Adventure': 'Afrikanische Innovation und Abenteuer',
          'Cybersecurity Excellence': 'Exzellenz in der Cybersicherheit',
          'The Book of Nzaaa': 'Das Buch von Nzaaa',
          'Cineflix Productions': 'Cineflix Produktionen',
          'Nzaaa Gallery': 'Nzaaa Galerie',
          'Let\'s Connect': 'Lass uns Verbinden',
          'Contact': 'Kontakt',
          'Home': 'Startseite',
          'About': 'Über',
          'Journey': 'Reise',
          'My Professional Journey': 'Meine Berufliche Laufbahn',
          
          // Common terms
          'Digital Innovation': 'Digitale Innovation',
          'vCISO & Consultant': 'vCISO & Berater',
          'Visual Storyteller': 'Visueller Geschichtenerzähler',
          'Kin-StartupLab': 'Kin-StartupLab',
          'Learn more →': 'Mehr erfahren →',
          'Read More': 'Mehr Lesen'
        }
      };

      // Get translation from mapping or return original text
      const translated = translations[targetLanguage]?.[text] || text;

      // Update cache
      setTranslationCache(prev => ({
        ...prev,
        [cacheKey]: {
          ...prev[cacheKey],
          [targetLanguage]: translated
        }
      }));

      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    } finally {
      setIsTranslating(false);
    }
  };

  const getTranslatedText = (originalText: string): string => {
    const currentLang = i18n.language;
    if (currentLang === 'en') {
      return originalText;
    }
    
    return translationCache[originalText.trim()]?.[currentLang] || originalText;
  };

  return {
    translateText,
    getTranslatedText,
    isTranslating,
    currentLanguage: i18n.language
  };
};

export default useAITranslation;