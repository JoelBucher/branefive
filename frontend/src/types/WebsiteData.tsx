import type { HeaderData } from "../components/Header/types/HeaderData";
import type { FooterData } from "../components/Footer/types/FooterData";
import { MusicType } from "../components/Music/types/MusicType";
import { TourType } from "../components/Tour/types/TourType";
import { BandType } from "../components/Band/types/BandType";
import { NewsType } from "../components/Story/types/NewsType";
import { ShopType } from "../components/Shop/types/ShopType";
import { GalleryType } from "../components/Gallery/types/GalleryType";
import { ContactType } from "../components/Contact/types/ContactType";

export type WebsiteData = {
    header: HeaderData;
    footer: FooterData;
    music: MusicType;
    tour: TourType;
    band: BandType;
    news: NewsType;
    shop: ShopType;
    gallery: GalleryType;
    contact: ContactType;
}