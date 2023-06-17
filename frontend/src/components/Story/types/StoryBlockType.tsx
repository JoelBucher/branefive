import { ImageStoryType } from "./blocks/ImageStoryType";
import { SpaceStoryType } from "./blocks/SpaceStoryType";
import { SubTitleStoryType } from "./blocks/SubtitleStoryType";
import { TextStoryType } from "./blocks/TextStoryType";
import { TitleStoryType } from "./blocks/TitleStoryType";
import { YoutubeStoryType } from "./blocks/YoutubeStoryType";

export type StoryBlockType = TitleStoryType
                            | SubTitleStoryType
                            | TextStoryType
                            | YoutubeStoryType
                            | ImageStoryType
                            | SpaceStoryType