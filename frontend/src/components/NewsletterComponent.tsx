import { Container, Text, Button, Group, Image, Grid, Avatar, MediaQuery } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { useNewsletterStyle } from '../hooks/useNewsletterStyle';
import enjoyerOneSrc from '../assets/enjoyer1.jpg';
import enjoyerTwoSrc from '../assets/enjoyer2.png';

function NewsLetterImage(){
  return(
    <>
      <Avatar.Group spacing="20%">
        <Avatar src={enjoyerTwoSrc} size="70%" radius="100%"/>
        <Avatar src={enjoyerOneSrc} size="70%" radius="100%"/>
      </Avatar.Group>
    </>
  )
}


function NewsletterText(){
  const { classes } = useNewsletterStyle();

  return(
    <>
        <h1 className={classes.title}>
          Join the Branefive{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
            Enjoyers Club
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Get updates about new Song releases and upcoming gigs.
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'red', to: 'red' }}
          >
            Join now!
          </Button>
        </Group>
        </>
  )
}

export function Newsletter() {
  const { classes } = useNewsletterStyle();
  return (
    <Grid align='center' justify='center'>
      <Grid.Col sm={5} lg={4}>
        <NewsletterText/>
      </Grid.Col>
      <Grid.Col sm={5} lg={4}>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Avatar.Group spacing="20%">
            <Avatar src={enjoyerTwoSrc} size="70%" radius="100%"/>
            <Avatar src={enjoyerOneSrc} size="70%" radius="100%"/>
          </Avatar.Group>
        </MediaQuery>
      </Grid.Col>
      
    </Grid>
  );
}