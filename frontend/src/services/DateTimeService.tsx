import dateFormat from "dateformat";
import { DurationType } from "../types/DurationType";
import { ZERO_DURATION } from "../utils/constants";

export class DateTimeService{

    public static formatDate (dateString : string) {
        return dateFormat(new Date(dateString), "dddd, d. mmmm, HH:MM");
    }
}