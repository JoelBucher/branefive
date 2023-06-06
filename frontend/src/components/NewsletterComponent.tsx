import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import { useNewsletterStyle } from '../hooks/useNewsletterStyle';

export function Newsletter() {
  const { classes } = useNewsletterStyle();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Join the Branefive{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
            Enjoyers Club
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Get updates about new Song releases and upcoming tours.
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
      </Container>
    </div>
  );
}