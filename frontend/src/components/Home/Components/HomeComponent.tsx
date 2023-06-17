import { Grid, Space } from "@mantine/core";
import { News } from "../../News/NewsComponent";
import { Newsletter } from "../../Newsletter/NewsletterComponent";
import { Headlines } from "./Headlines";
import { Hero } from "./Hero";


export function Home(){
    return(
    <>
        <Hero/>
        <Space h={200} />
        <Headlines/>
        <Space h={200} />
        <Grid>
            <Grid.Col span={3}><News/></Grid.Col>
            <Grid.Col span={3}><News/></Grid.Col>
            <Grid.Col span={3}><News/></Grid.Col>
            <Grid.Col span={3}><News/></Grid.Col>
        </Grid>
        <Space h={200} />
        <Newsletter/>
    </>
    )
}