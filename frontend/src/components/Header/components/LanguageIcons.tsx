import { ActionIcon } from "@mantine/core";
import { useLanguageStore } from "../../../services/useLanguage";
import { Language } from "../../../types/Language";

export function LanguageIcons(){
    const setLanguage = useLanguageStore((state : any) => state.setLanguage);
    const language = useLanguageStore((state : any) => state.language);
    
    if(language === Language.EN){
        return(
            <ActionIcon>
                <img src="https://hatscripts.github.io/circle-flags/flags/uk.svg"
                width="30"
                style={{marginRight: 10}}
                onClick={() => {setLanguage(Language.DE)}}
                alt="iconDE"/>
            </ActionIcon>
        )
    }else{
        return(
            <ActionIcon>
                <img src="https://hatscripts.github.io/circle-flags/flags/ch.svg"
                width="30"
                style={{marginRight: 10}}
                onClick={() => {setLanguage(Language.EN)}}
                alt="iconEN"/>
            </ActionIcon>
        )
    }
    
}
