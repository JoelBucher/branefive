import { LanguageText } from "../../../../types/LanguageText"
import { StoryBlockType } from "../StoryBlockType";

export type SubTitleStoryType = {
    subtitle: LanguageText;
}


export function isSubTitleStoryType(block : StoryBlockType) : block is SubTitleStoryType {
    return (block as SubTitleStoryType).subtitle !== undefined;
}