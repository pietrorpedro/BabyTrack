import i18n from 'i18next';
import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();
export const useLanguageContext = () => {
    return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

    useEffect(() => {
        if (i18n.isInitialized) {
            i18n.changeLanguage(language);
        } else {
            i18n.on('initialized', () => {
                i18n.changeLanguage(language);
            });
        }
        localStorage.setItem('language', language);
    }, [language]);

    const changeLanguage = (lng) => {
        setLanguage(lng);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
