import { MemberType } from "../components/Band/types/MemberType";
import { HeadlineType } from "../components/Home/types/HeadlineType";
import { AlbumType } from "../components/Music/types/AlbumType";
import { TourType } from "../components/Tour/types/TourType";
import { FooterData } from "../components/Footer/types/FooterData";
import { WebsiteData } from "../types/WebsiteData";
import { HeaderData } from "../components/Header/types/HeaderData";
import { LanguageText } from "../types/LanguageText";
import data from "../utils/data.json"
import { StoryType } from "../components/Story/types/StoryType";
import { ImageType } from "../components/Images/types/ImageType";
import { ShopType } from "../components/Shop/types/ShopType";
import { ProductType } from "../components/Shop/types/ProductType";

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

    public static getStory(storyId : string | undefined) : StoryType | undefined {
        return data.news.stories.find(story => story.storyId === storyId);
    }

    public static getNewsCards() : StoryType[] {
        return data.news.stories;
    }

    public static getImages() : ImageType[] {
        return data.gallery.images;
    }

    public static getShopProducts() : ProductType[] {
        return data.shop.products;
    }
}