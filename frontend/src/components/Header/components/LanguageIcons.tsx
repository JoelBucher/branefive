import { useLanguageStore } from "../../../services/useLanguage";
import { Language } from "../../../types/Language";

export function LanguageIcons(){
    const setLanguage = useLanguageStore((state : any) => state.setLanguage);
    
    return(
        <div>
            <img src="https://hatscripts.github.io/circle-flags/flags/ch.svg" width="30" style={{marginRight: 10}} onClick={() => {setLanguage(Language.DE)}} alt="iconDE"></img>
            
            <img src="https://hatscripts.github.io/circle-flags/flags/uk.svg" width="30" onClick={() => {setLanguage(Language.EN)}} alt="iconEN"></img>
        </div>
    )
}
