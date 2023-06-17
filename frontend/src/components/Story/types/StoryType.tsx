import { StoryBlockType } from "./StoryBlockType";

export type StoryType = {
    storyId: string,
    blocks: StoryBlockType[],
}