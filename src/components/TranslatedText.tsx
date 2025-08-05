import React, { useEffect, useState } from 'react';
import useAITranslation from '@/hooks/useAITranslation';

interface TranslatedTextProps {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  children, 
  className = '', 
  as: Component = 'span' 
}) => {
  const { translateText, getTranslatedText, currentLanguage } = useAITranslation();
  const [translatedText, setTranslatedText] = useState(children);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const performTranslation = async () => {
      if (currentLanguage === 'en') {
        setTranslatedText(children);
        return;
      }

      // Check if we already have a cached translation
      const cachedTranslation = getTranslatedText(children);
      if (cachedTranslation !== children) {
        setTranslatedText(cachedTranslation);
        return;
      }

      // Perform new translation
      setIsLoading(true);
      try {
        const translated = await translateText(children, currentLanguage);
        setTranslatedText(translated);
      } catch (error) {
        console.error('Translation failed:', error);
        setTranslatedText(children);
      } finally {
        setIsLoading(false);
      }
    };

    performTranslation();
  }, [children, currentLanguage, translateText, getTranslatedText]);

  return (
    <Component className={`${className} ${isLoading ? 'opacity-75' : ''}`}>
      {translatedText}
    </Component>
  );
};

export default TranslatedText;