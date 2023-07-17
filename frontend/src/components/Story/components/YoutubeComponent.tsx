import { Grid } from "@mantine/core";
import { YoutubeStoryType } from "../types/blocks/YoutubeStoryType";

export function YoutubeComponent(props : { data : YoutubeStoryType}){
    return(<Grid justify="center">
            <Grid.Col span={10}>
                <iframe title={"Youtube Video"} style={{border: 0, borderRadius: 10, width: "100%", aspectRatio: "calc(16/9)"}} src={props.data.url}/>
            </Grid.Col>
        </Grid>)
}