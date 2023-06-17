import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
  } from '@mantine/core';
  import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import { useNewsStyle } from './hooks/useNewsStyle';
import { AssetsService } from '../../services/AssetsService';


export function News() {
    const { classes, theme } = useNewsStyle();
  
    return (
      <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
          <Image src={AssetsService.get("elija")} alt="TODO: title" height={180} />
        </Card.Section>
  
        <Badge>TODO Badge</Badge>
  
        <Text fw={700} className={classes.title} mt="xs">
          TODO Title
        </Text>
  
        <Group mt="lg">
          <Avatar src={AssetsService.get("noah")}radius="sm" />
          <div>
            <Text fw={500}>TODO: Author name</Text>
            <Text fz="xs" c="dimmed">
              TODO: Author description
            </Text>
          </div>
        </Group>
  
        <Card.Section className={classes.footer}>
          <Group position="apart">
            <Text fz="xs" c="dimmed">
              TODO: Footer
            </Text>
            <Group spacing={0}>
              <ActionIcon>
                <IconHeart size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
              </ActionIcon>
              <ActionIcon>
                <IconBookmark size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
              </ActionIcon>
              <ActionIcon>
                <IconShare size="1.2rem" color={theme.colors.blue[6]} stroke={1.5} />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    );
  }