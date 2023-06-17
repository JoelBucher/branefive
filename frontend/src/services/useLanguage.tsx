import { create } from 'zustand'
import { Language } from '../types/Language';
import { LanguageText } from '../types/LanguageText';

interface LanguageState {
    language: Language;
    setLanguage: (language: Language) => void;
  }

export const useLanguageStore = create<LanguageState>((set) => ({
    language: Language.DE,
    setLanguage: (language : Language) => set({language: language})
    })
);

function translate(text : LanguageText, language : Language){
    switch (language){
        case Language.EN:
            return text.en;
        case Language.DE:
            // fall through
        default:
            return text.de;
    }
}

export function RenderLanguageText(props : {text : LanguageText}){
    const language = useLanguageStore((state) => state.language);
    return(<>{translate(props.text, language)}</>)
}