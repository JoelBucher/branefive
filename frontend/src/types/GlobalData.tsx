import type { HeaderData } from "./HeaderData";
import type { FooterData } from "./FooterData";
import { StatsElement } from "./StatsElement";
import { MusicType } from "../components/Music/types/MusicType";
import { TourType } from "../components/Tour/types/TourType";

export type GlobalData = {
    header: HeaderData;
    statistics: StatsElement[];
    footer: FooterData;
    music: MusicType;
    tour: TourType;
}