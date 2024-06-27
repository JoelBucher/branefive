import { Text, Button, Group, Grid, Avatar, MediaQuery } from '@mantine/core';
import { useNewsletterStyle } from './hooks/useNewsletterStyle';
import { AssetsService } from '../../services/AssetsService';

function NewsletterText(){
  const { classes } = useNewsletterStyle();

  return(
    <>
        <h1>
          Join the Branefive{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
            Enjoyers Club
          </Text>
        </h1>

        <p>
          Get updates about new Song releases and upcoming gigs.
        </p>

        <Group className={classes.controls}>
            <Button
              size="xl"
              component="a"
              href="https://chat.whatsapp.com/KgRlScf3rUMH1B4Ycu1VfS"
              variant= "filled"
              className={classes.control}
            >
              Join now!
            </Button>
        </Group>
        </>
  )
}

export function Newsletter() {
  return (
    <Grid align='center' justify='center'>
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