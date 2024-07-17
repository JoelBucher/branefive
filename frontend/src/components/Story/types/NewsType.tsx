import { LanguageText } from "../../../types/LanguageText";
import { StoryType } from "./StoryType"

export type NewsType = {
    heroTitle: LanguageText;
    stories: StoryType[];
}