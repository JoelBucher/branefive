import type { HeaderData } from "../components/Header/types/HeaderData";
import type { FooterData } from "../components/Footer/types/FooterData";
import { MusicType } from "../components/Music/types/MusicType";
import { TourType } from "../components/Tour/types/TourType";
import { HeadlineType } from "../components/Home/types/HeadlineType";
import { BandType } from "../components/Band/types/BandType";
import { NewsType } from "../components/Story/types/NewsType";
import { NewsCardType } from "../components/News/types/NewsCardType";

export type WebsiteData = {
    header: HeaderData;
    headline: HeadlineType;
    footer: FooterData;
    music: MusicType;
    tour: TourType;
    band: BandType;
    news: NewsType & NewsCardType;
}