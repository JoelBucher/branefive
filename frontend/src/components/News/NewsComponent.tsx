import { AspectRatio, Card, Text, Image, Container, SimpleGrid, Title, Space, Grid } from "@mantine/core";
import { useNewsStyle } from "./hooks/useNewsStyle";
import { DataService } from "../../services/DataService";
import { StoryType } from "../Story/types/StoryType";
import { AssetsService } from "../../services/AssetsService";
import { RenderLanguageText } from "../../services/useLanguage";
import { useHeadlinesStyle } from "../Home/hooks/useHeadlinesStyle";
import { Carousel } from "@mantine/carousel";


function TitleComponent(){
    const { classes } = useHeadlinesStyle();
    return(
        <>
            <Title order={2} className={classes.title} ta="center">
                Stay up to date
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Subtitle
            </Text>
        </>
    )
}


export function NewsComponent(){
    const { classes } = useNewsStyle(); 
        
    const stories : StoryType[] = DataService.getNewsCards();

    const cards = stories.slice(0,4).map((story, index) => (
        <Carousel.Slide>
            <Card
                key={index}
                p="md"
                radius="md"
                component="a"
                href={"#/news/" + story.storyId}
                className={classes.card}>
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
            <h1 className={classes.title}>
                Stay{' '}
                <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
                    Up to date
                </Text>
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
