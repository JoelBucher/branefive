import { LanguageText } from "../../../../types/LanguageText"
import { StoryBlockType } from "../StoryBlockType";

export type TitleStoryType = {
    title: LanguageText;
}

export function isTitleStoryType(block : StoryBlockType) : block is TitleStoryType {
    return (block as TitleStoryType).title !== undefined;
}