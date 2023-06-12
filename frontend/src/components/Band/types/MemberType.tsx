import { LanguageText } from "../../../types/LanguageText";
import { MemberPropertyType } from "./MemberPropertyType";


export type MemberType = {
    name: string;
    description: LanguageText;
    assetId: string;
    properties: MemberPropertyType[];
}