import { Button, Group, Grid, Avatar, MediaQuery } from '@mantine/core';
import { useNewsletterStyle } from './hooks/useNewsletterStyle';
import { AssetsService } from '../../services/AssetsService';
import { NewsletterType } from './types/NewsletterType';
import { DataService } from '../../services/DataService';
import { RenderLanguageText } from '../../services/useLanguage';
import { BUTTON_BORDER_RADIUS, CONTENT_MARGIN } from '../../utils/constants';

function NewsletterText(){
  const { classes } = useNewsletterStyle();
  const newsletterData : NewsletterType = DataService.getNewsletterData();

  return(
    <>
        <h1>
          <RenderLanguageText text={newsletterData.title}/>
        </h1>

        <p>
          <RenderLanguageText text={newsletterData.subtitle}/>
        </p>

        <Group className={classes.controls}>
            <Button
              size="xl"
              component="a"
              href="https://chat.whatsapp.com/KgRlScf3rUMH1B4Ycu1VfS"
              variant= "filled"
              className={classes.control}
              style={{borderRadius: BUTTON_BORDER_RADIUS}}
            >
              <p><RenderLanguageText text={newsletterData.buttonText}/></p>
            </Button>
        </Group>
        </>
  )
}

export function Newsletter() {
  return (
    <Grid align='center' justify='center' style={{margin: CONTENT_MARGIN}}>
        <Grid.Col sm={5} lg={4}>
          <NewsletterText/>
        </Grid.Col>
        <Grid.Col sm={5} lg={4}>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Avatar.Group spacing="20%">
              <Avatar src={AssetsService.get("enjoyer2")} size="70%" radius="100%"/>
              <Avatar src={AssetsService.get("enjoyer1")} size="70%" radius="100%"/>
            </Avatar.Group>
          </MediaQuery>
        </Grid.Col>
    </Grid>
  );
}