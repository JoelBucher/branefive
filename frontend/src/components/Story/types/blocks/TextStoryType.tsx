import { LanguageText } from "../../../../types/LanguageText"
import { StoryBlockType } from "../StoryBlockType";

export type TextStoryType = {
    text: LanguageText
}

export function isTextStoryType(block : StoryBlockType) : block is TextStoryType {
    return (block as TextStoryType).text !== undefined;
}