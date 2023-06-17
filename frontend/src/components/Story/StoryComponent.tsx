import { useParams } from "react-router-dom";
import { DataService } from "../../services/DataService";
import { NotFoundComponent } from "../NotFound/NotFoundComponent";
import { StoryBlockType } from "./types/StoryBlockType";
import { TitleComponent } from "./components/TitleComponent";
import { TitleStoryType, isTitleStoryType } from "./types/blocks/TitleStoryType";
import { YoutubeStoryType, isYoutubeStoryType } from "./types/blocks/YoutubeStoryType";
import { SubTitleStoryType, isSubTitleStoryType as isSubtitleStoryType } from "./types/blocks/SubtitleStoryType";
import { TextStoryType, isTextStoryType } from "./types/blocks/TextStoryType";
import { ImageStoryType, isImageStoryType } from "./types/blocks/ImageStoryType";
import { SubtitleComponent } from "./components/SubtitleComponent";
import { TextComponent } from "./components/TextComponent";
import { ImageComponent } from "./components/ImageComponent";
import { YoutubeComponent } from "./components/YoutubeComponent";
import { Grid, SpaceProps } from "@mantine/core";
import { SpaceStoryType, isSpaceStoryType } from "./types/blocks/SpaceStoryType";
import { SpaceComponent } from "./components/SpaceComponent";

export function StoryComponent(){
    let { storyId } = useParams();
    const story = DataService.getStory(storyId);

    if(story === undefined){
        return <NotFoundComponent/>
    }else{
        return <Grid justify="center">
                    <Grid.Col sm={11} md={8} mt={40}>
                        <RenderBlocks blocks={story.blocks}/>
                    </Grid.Col>
                </Grid>
    }
}

function RenderBlocks(props : { blocks : StoryBlockType[]}){
    const blocks = props.blocks.map((block, index) => {

        switch(true){
            case isTitleStoryType(block):
                return <TitleComponent data = {block as TitleStoryType} key={index}/>
            case isSubtitleStoryType(block):
                return <SubtitleComponent data = {block as SubTitleStoryType} key={index}/>
            case isTextStoryType(block):
                return <TextComponent data = {block as TextStoryType} key={index}/>
            case isImageStoryType(block):
                return <ImageComponent data = {block as ImageStoryType} key={index}/>
            case isYoutubeStoryType(block):
                return <YoutubeComponent data = {block as YoutubeStoryType} key={index}/>
            case isSpaceStoryType(block):
                return <SpaceComponent data = {block as SpaceStoryType} key={index}/>
            default:
                return <></>
        }
    });

    return <>{blocks}</>
}