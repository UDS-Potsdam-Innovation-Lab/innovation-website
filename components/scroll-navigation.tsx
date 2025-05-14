import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useLocale } from '../contexts/LocaleContext';

const ScrollNavigation = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const { t } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 300px
      setShowScrollButton(window.scrollY > 300);

      // Find current section
      const sections = document.querySelectorAll('section[id]');
      let current: string | null = null;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          current = section.id;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToNextSection = () => {
    if (!currentSection) return;

    const sections = Array.from(document.querySelectorAll('section[id]'));
    const currentIndex = sections.findIndex(section => section.id === currentSection);
    
    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPreviousSection = () => {
    if (!currentSection) return;

    const sections = Array.from(document.querySelectorAll('section[id]'));
    const currentIndex = sections.findIndex(section => section.id === currentSection);
    
    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
          <button
            onClick={scrollToPreviousSection}
            className="bg-blue-600 text-white w-10 h-10 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-label="Scroll to previous section"
            disabled={!currentSection || currentSection === 'hero'}
          >
            <ChevronUp size={24} />
          </button>
          <button
            onClick={scrollToTop}
            className="bg-orange-500 text-white px-4 py-2 rounded-br-xl shadow-lg hover:bg-orange-600 transition-colors duration-300 flex items-center space-x-2"
            aria-label="Take me up"
          >
            <span className="text-sm font-medium">Take me up</span>
            <ChevronUp size={20} />
          </button>
          <button
            onClick={scrollToNextSection}
            className="bg-blue-600 text-white w-10 h-10 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            aria-label="Scroll to next section"
            disabled={!currentSection || currentSection === 'contact'}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollNavigation; 