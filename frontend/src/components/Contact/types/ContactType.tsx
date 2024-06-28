import { LanguageText } from "../../../types/LanguageText";

export type ContactType = {
    header: LanguageText;
    subtitle: LanguageText;
	mail: string;
	address1: string;
	address2: string;
	address3: string;
	phone: string;
}