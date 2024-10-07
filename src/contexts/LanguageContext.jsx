import { createContext, useState } from "react";
import { language } from "../Language"


export const LanguageContext = createContext()


// eslint-disable-next-line react/prop-types
export default function LanguageContextProvider({ children }) {
    const [pageLanguage, setPageLanguage] = useState("en")

    function languageClickHandler() {
        setPageLanguage(pageLanguage === "en" ? "tr": "en")
    }

    const translation = language[pageLanguage]

    return(
    <LanguageContext.Provider value = {{pageLanguage, languageClickHandler, translation}}>
        {children}
    </LanguageContext.Provider>
    )
}