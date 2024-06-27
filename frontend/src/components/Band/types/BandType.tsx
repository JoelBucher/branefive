import { LanguageText } from "../../../types/LanguageText"
import { ImageType } from "../../Gallery/types/ImageType";
import { MemberType } from "./MemberType";

export type BandType = {
    heroButtonText: LanguageText;
    heroPortrait : ImageType;
    heroLandscape : ImageType;
    title: LanguageText;
    description: LanguageText;
    members: MemberType[];
}