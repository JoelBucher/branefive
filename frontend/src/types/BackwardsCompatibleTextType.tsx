import { TextType } from "./TextType";

export type BackwardsCompatibleTextType =  string | TextType[];

export function isSimpleText(text: BackwardsCompatibleTextType){
	return typeof text === "string"
}