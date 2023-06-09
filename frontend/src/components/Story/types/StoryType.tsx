import { LanguageText } from "../../../types/LanguageText";
import { StoryBlockType } from "./StoryBlockType";

export type StoryType = {
    storyId: string,
    title: LanguageText,
    storyCardImage: string,
    date: string,
    blocks: StoryBlockType[],
}