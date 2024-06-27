import { LanguageText } from "../../../types/LanguageText";
import { ProductType } from "./ProductType";

export type ShopType = {
    header: LanguageText,
    subtitle: LanguageText,
    products: ProductType[],
    buyButtonText: LanguageText
}