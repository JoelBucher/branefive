import { LanguageText } from "../../../types/LanguageText";
import { SongType } from "./SongType";

export type AlbumType = {
    title: string;
    releaseDate: LanguageText;
    description: LanguageText;
    assetId: string;
    songs: SongType[]
}