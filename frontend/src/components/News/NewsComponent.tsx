import { AspectRatio, Card, Text, Image, Container, SimpleGrid, Title, Space, Grid } from "@mantine/core";
import { useNewsStyle } from "./hooks/useNewsStyle";
import { DataService } from "../../services/DataService";
import { StoryType } from "../Story/types/StoryType";
import { AssetsService } from "../../services/AssetsService";
import { RenderLanguageText } from "../../services/useLanguage";
import { Carousel } from "@mantine/carousel";
import { NewsType } from "../Story/types/NewsType";
import { useMediaQuery } from "@mantine/hooks";
import { BORDER_RADIUS } from "../../utils/constants";

export function NewsComponent(){
    const { classes } = useNewsStyle(); 
    
    const newsData : NewsType = DataService.getNewsData();
    const stories : StoryType[] = newsData.stories;
    const isMdOrSmaller = useMediaQuery('(max-width: 768px)');

    const cards = stories.slice(0,4).map((story, index) => (
        <Carousel.Slide 
            key={"news-slide" + index}>
            <Card
                key={"news-card" + index}
                p="md"
                radius="md"
                component="a"
                href={"#/news/" + story.storyId}
                className={classes.card}
                style={{borderRadius: BORDER_RADIUS}}
                >
                <AspectRatio ratio={1920 / 1080}>
                    <Image src={AssetsService.get(story.storyCardImage)} />
                </AspectRatio>
                <h3>
                    {story.date}
                </h3>
                <Text color="white"><RenderLanguageText text={story.title}/></Text>
            </Card>
        </Carousel.Slide>
    ));

  return (
    <Grid align='center' justify='center'>
        <Grid.Col sm={10} lg={8}>
            <h1>
                <RenderLanguageText text={newsData.heroTitle}/>
            </h1>
        </Grid.Col>
        <Space h={50}/>
        <Grid.Col sm={10} lg={8}>
        <Carousel
            align="start"
            withIndicators
            height={300}
            slideSize="33.333333%"
            slideGap="md"
            >
            {cards}
          </Carousel>
        </Grid.Col>
    </Grid>
  );
}
