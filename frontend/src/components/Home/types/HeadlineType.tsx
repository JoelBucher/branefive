import { LanguageText } from "../../../types/LanguageText"
import { FeatureType } from "./FeatureType";

export type HeadlineType = {
    title: LanguageText;
    subtitle: LanguageText;
    features: FeatureType[];
}