import { FooterData } from "../types/FooterData";
import { GlobalData } from "../types/GlobalData";
import { HeaderData as HeaderData } from "../types/HeaderData";
import { StatsElement } from "../types/StatsElement";
import data from "../utils/data.json"

export class DataService {

    private static loadData() : GlobalData {
        return data as GlobalData;
    }

    public static getHeaderData() : HeaderData{
        return this.loadData().header;
    }

    public static getFooterData() : FooterData{
        return this.loadData().footer;
    }

    public static getGroupStatsData() : StatsElement[]{
        return this.loadData().statistics;
    }
}