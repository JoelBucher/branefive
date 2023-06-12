import { LanguageText } from "../../../types/LanguageText"

export type FeatureType = {
    iconAssetId: string;
    title: LanguageText;
    subtitle: LanguageText;
    buttonText: LanguageText;
    link: string;
}

export interface FeaturesParameter {
    features: FeatureType[]
}