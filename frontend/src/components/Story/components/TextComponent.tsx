import { RenderLanguageText } from "../../../services/useLanguage";
import { TextStoryType } from "../types/blocks/TextStoryType";

export function TextComponent(props : {data : TextStoryType}){
    return(<RenderLanguageText text={props.data.text}/>)
}