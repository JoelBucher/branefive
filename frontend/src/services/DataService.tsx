import { BandType } from "../components/Band/types/BandType";
import { MemberType } from "../components/Band/types/MemberType";
import { HeadlineType } from "../components/Home/types/HeadlineType";
import { AlbumType } from "../components/Music/types/AlbumType";
import { TourType } from "../components/Tour/types/TourType";
import { FooterData } from "../components/Footer/types/FooterData";
import { GlobalData } from "../types/GlobalData";
import { HeaderData } from "../types/HeaderData";
import { LanguageText } from "../types/LanguageText";
import data from "../utils/data.json"
import { FooterLinkGroup } from "../components/Footer/types/FooterLinkGroup";

export class DataService {
    data : GlobalData= DataService.loadData();

    private static loadData() : GlobalData {
        return data as GlobalData;
    }

    public static getHeaderData() : HeaderData{
        return data.header;
    }

    public static getFooterData() : FooterData{
        return data.footer;
    }

    public static getAlbums() : AlbumType[]{
        return data.music.albums;
    }

    public static getTourData() : TourType {
        return this.loadData().tour;
    }

    public static getHeadlinesData() : HeadlineType{
        return data.headline;
    }

    public static getBandMembers() : MemberType[] {
        return data.band.members;
    }

    public static getBandDescription() : LanguageText {
        return data.band.description;
    }

    public static getBandTitle() : LanguageText {
        return data.band.title;
    }
}