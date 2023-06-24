import { AspectRatio, Card, Text, Image, Container, SimpleGrid, Title, Space } from "@mantine/core";
import { useNewsStyle } from "./hooks/useNewsStyle";
import { DataService } from "../../services/DataService";
import { StoryType } from "../Story/types/StoryType";
import { AssetsService } from "../../services/AssetsService";
import { RenderLanguageText } from "../../services/useLanguage";
import { useHeadlinesStyle } from "../Home/hooks/useHeadlinesStyle";


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
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {story.date}
            </Text>
            <Text className={classes.title} mt={5}>
                <RenderLanguageText text={story.title} />
            </Text>
        </Card>
    ));

  return (
    <Container>
      <TitleComponent />
      <Space h={50}/>
      <SimpleGrid cols={2}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
