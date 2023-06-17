import { StoryBlockType } from "../StoryBlockType"

export type YoutubeStoryType = {
    url: string
}

export function isYoutubeStoryType(block : StoryBlockType) : block is YoutubeStoryType {
    return (block as YoutubeStoryType).url !== undefined;
}