import { RenderLanguageText } from "../../../services/useLanguage";
import { TitleStoryType } from "../types/blocks/TitleStoryType";

export function TitleComponent(props : {data : TitleStoryType}){
    return <h1><RenderLanguageText text={props.data.title}/></h1>
}