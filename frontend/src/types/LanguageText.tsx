import { TextType } from "./TextType";

export type BackwardsCompatibleTextType = string | TextType[];

export type LanguageText = {
    en: BackwardsCompatibleTextType
    de: BackwardsCompatibleTextType
}

export const EmptyLanguageText : LanguageText= {
    en: "",
    de: ""
}