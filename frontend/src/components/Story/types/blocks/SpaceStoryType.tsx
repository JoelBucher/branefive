import { StoryBlockType } from "../StoryBlockType";

export type SpaceStoryType = {
    space: number;
}

export function isSpaceStoryType(block : StoryBlockType) : block is SpaceStoryType {
    return (block as SpaceStoryType).space !== undefined;
}