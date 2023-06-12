import type { HeaderData } from "./HeaderData";
import type { FooterData } from "../components/Footer/types/FooterData";
import { MusicType } from "../components/Music/types/MusicType";
import { TourType } from "../components/Tour/types/TourType";
import { HeadlineType } from "../components/Home/types/HeadlineType";
import { BandType } from "../components/Band/types/BandType";

export type GlobalData = {
    header: HeaderData;
    headline: HeadlineType;
    footer: FooterData;
    music: MusicType;
    tour: TourType;
    band: BandType;
}