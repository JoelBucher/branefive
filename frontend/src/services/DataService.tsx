import { MemberType } from "../components/Band/types/MemberType";
import { AlbumType } from "../components/Music/types/AlbumType";
import { TourType } from "../components/Tour/types/TourType";
import { FooterData } from "../components/Footer/types/FooterData";
import { WebsiteData } from "../types/WebsiteData";
import { HeaderData } from "../components/Header/types/HeaderData";
import { LanguageText } from "../types/LanguageText";
import { StoryType } from "../components/Story/types/StoryType";
import { GalleryType } from "../components/Gallery/types/GalleryType";
import data from "../utils/data.json"
import { BandType } from "../components/Band/types/BandType";
import { ShopType } from "../components/Shop/types/ShopType";
import { ContactType } from "../components/Contact/types/ContactType";
import { NewsType } from "../components/Story/types/NewsType";
import { NewsletterType } from "../components/Newsletter/types/NewsletterType";

export class DataService {
    data : WebsiteData= DataService.loadData();

    private static loadData() : WebsiteData {
        return data as WebsiteData;
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

    public static getBandMembers() : MemberType[] {
        return data.band.members;
    }

    public static getBandDescription() : LanguageText {
        return data.band.description;
    }

    public static getBand() : BandType {
        return data.band;
    }

    public static getBandTitle() : LanguageText {
        return data.band.title;
    }

    public static getStory(storyId : string | undefined) : StoryType | undefined {
        return data.news.stories.find(story => story.storyId === storyId);
    }

    public static getNewsData() : NewsType {
        return data.news;
    }

    public static getGallery() : GalleryType {
        return data.gallery;
    }

    public static getShopData() : ShopType {
        return data.shop;
    }

    public static getContactData() : ContactType {
        return data.contact;
    }

    public static getNewsletterData() : NewsletterType {
        return data.newsletter;
    }
}