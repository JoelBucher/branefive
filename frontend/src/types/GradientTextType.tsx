import { TextType } from "./TextType"

export type GradientTextType = {
    gradient: string
}

export function isGradientTextType(text : TextType){
	return "gradient" in  text;
}