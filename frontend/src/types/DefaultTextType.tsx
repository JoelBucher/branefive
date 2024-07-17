import { TextType } from "./TextType";

export type DefaultTextType = {
    default: string
}

export function isDefaultTextType(text : TextType){
	return "default" in  text;
}