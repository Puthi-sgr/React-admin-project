import { createContext, useState, useMemo } from "react";
import { khmerLabel, englishLabel } from "./language";

//context for language mode
export const LanguageModeContext = createContext({
  toggleLanguageMode: () => {}, //just a place holder
});

export const useLanguageMode = () => {
  const [language, setLanguage] = useState("en");
  const languageTokens = (language) => {
    return language === "en" ? englishLabel : khmerLabel;
  };
  const languageMode = useMemo(
    () => ({
      toggleLanguageMode: () => {
        console.log(language);
        setLanguage((prev) => (prev === "en" ? "kh" : "en"));
      },
    }),
    [language]
  );

  const languageTheme = useMemo(() => languageTokens(language), [language]);

  return [languageMode, languageTheme];
};

export const useLanguageStyle = (language) => {
  const style = useMemo(() => {
    return {
      fontFamily: language === "kh" ? "Noto Sans Khmer" : "inherit",
      marginBottom: language === "kh" ? "0.25rem" : undefined,
    };
  }, [language]);

  return style;
};
// export const useLanguageStyle = () => {
//   const language = useLanguageMode();

//   const style = useMemo(() => {
//     console.log(language);
//     return {
//       fontFamily: language === "kh" ? "Preahvihear, sans-serif" : "inherit",
//     };
//   }, [language]);

//   return style;
// };
