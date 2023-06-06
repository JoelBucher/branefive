import { useState } from "react";
import { LanguageText } from "../types/LanguageText";
import { Language } from "../types/Language";

export function translate(text : LanguageText){
    return LanguageService().translate(text);
}

export function setWebpageLanguage(language : Language){
    return LanguageService().setLanguage(language);
}

function LanguageService (){
    const [language, setLanguage] = useState(Language.DE);

    const translate = (text : LanguageText) : string => {
        switch (language){
            case Language.EN:
                return text.en;
            case Language.DE:
                // fall through
            default:
                return text.de;
                
        }
    }

    return {
        translate: translate,
        setLanguage: setLanguage,
    }
}