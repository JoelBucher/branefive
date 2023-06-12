import { LanguageText } from "../../../types/LanguageText"
import { MemberType } from "./MemberType";

export type BandType = {
    title: LanguageText;
    description: LanguageText;
    members: MemberType[];
}