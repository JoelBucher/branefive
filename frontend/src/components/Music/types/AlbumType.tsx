import { LanguageText } from "../../../types/LanguageText";
import { SongType } from "./SongType";

export type AlbumType = {
    title: string;
    description: LanguageText;
    assetId: string;
    spotifyLink: string;
}