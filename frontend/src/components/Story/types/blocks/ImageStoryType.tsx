import { StoryBlockType } from "../StoryBlockType";

export type ImageStoryType = {
    assetId: string
}

export function isImageStoryType(block : StoryBlockType) : block is ImageStoryType {
    return (block as ImageStoryType).assetId !== undefined;
}