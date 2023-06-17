import dateFormat from "dateformat";

export class DateTimeService{

    public static formatDate (dateString : string) {
        return dateFormat(new Date(dateString), "dddd, d. mmmm, HH:MM");
    }
}