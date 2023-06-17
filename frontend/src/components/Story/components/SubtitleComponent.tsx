import { RenderLanguageText } from "../../../services/useLanguage";
import { SubTitleStoryType } from "../types/blocks/SubtitleStoryType";

export function SubtitleComponent(props : {data : SubTitleStoryType}){
    return <h3><RenderLanguageText text={props.data.subtitle}/></h3>
}