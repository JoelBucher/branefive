import type { HeaderData } from "./HeaderData";
import type { FooterData } from "./FooterData";
import { StatsElement } from "./StatsElement";

export type GlobalData = {
    header: HeaderData;
    statistics: StatsElement[];
    footer: FooterData;
}