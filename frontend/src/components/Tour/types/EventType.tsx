import { EmptyLanguageText, LanguageText } from "../../../types/LanguageText";
import { EmptyPlace, PlaceType } from "./PlaceType";

export type EventType = {
    name : string;
    description: LanguageText;
    date: string;
    place: PlaceType;
    ticketLink: string
    showTicketLink: boolean
}

export const EmptyEvent : EventType = {
    name: "",
    description: EmptyLanguageText,
    date: "",
    place: EmptyPlace,
    ticketLink: "",
    showTicketLink: false
}