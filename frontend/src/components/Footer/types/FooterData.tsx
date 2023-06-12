import { FooterLinkGroup } from "./FooterLinkGroup";
import { LanguageText } from "../../../types/LanguageText";
import { SocialLinkType } from "./SocialLinkType";

export type FooterData = {
    linkGroups: FooterLinkGroup[];
    slogan: LanguageText;
    copyright: LanguageText;
    socials: SocialLinkType[];
}