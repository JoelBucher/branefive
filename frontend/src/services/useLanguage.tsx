import { create } from 'zustand'
import { Language } from '../types/Language';
import { BackwardsCompatibleTextType, LanguageText } from '../types/LanguageText';
import { isSimpleText } from '../types/BackwardsCompatibleTextType';
import { DefaultTextType, isDefaultTextType } from '../types/DefaultTextType';
import { GradientTextType, isGradientTextType } from '../types/GradientTextType';
import { ReactComponentElement, ReactNode } from 'react';
import { TextType } from '../types/TextType';
import { Text } from "@mantine/core";
import React from 'react';


interface LanguageState {
    language: Language;
    setLanguage: (language: Language) => void;
  }

export const useLanguageStore = create<LanguageState>((set) => ({
    language: Language.DE,
    setLanguage: (language : Language) => set({language: language})
    })
);

function render(text: BackwardsCompatibleTextType) : ReactNode {
    if(isSimpleText(text)){
        return <>{text}</>
    }

    // handle text if TextType
    const tt : TextType[] = text as TextType[]
    const reactNodes : ReactNode[] = tt.map((t : TextType) => {
        if(isDefaultTextType(t)){
            return <>{(t as DefaultTextType).default}</>;
        }
    
        if(isGradientTextType(t)){
            return(
                <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
                    {(t as GradientTextType).gradient}
                </Text>
            );
        }
    });

    return <React.Fragment>{reactNodes}</React.Fragment>;
}

function translate(text : LanguageText, language : Language) : ReactNode {
    switch (language){
        case Language.EN:
            return render(text.en);
        case Language.DE:
            // fall through
        default:
            return render(text.de);
    }
}

export function RenderLanguageText(props : {text : LanguageText}){
    const language = useLanguageStore((state) => state.language);
    return <>{translate(props.text, language)}</>;
}