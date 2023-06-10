import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon
} from '@mantine/core';
import { useTourcardStyle } from '../hooks/useTourCardStyle';
import { AssetsService } from '../../../services/AssetsService';

export function TourCard(){
    const image = AssetsService.get("richensee");
    const title = "title";
    const description = "description";
    const badges = [{label: "label", emoji: "emoji"}];
    const country = "country";

    const { classes, theme } = useTourcardStyle();
    
    const features = badges.map((badge) => (
        <Badge
        color={'blue'}
        key={badge.label}
        leftSection={badge.emoji}
        >
        {badge.label}
        </Badge>
    ));
    
    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
        <Card.Section>
            <Image src={image} alt={title} height={180} />
        </Card.Section>
    
        <Card.Section className={classes.section} mt="md">
            <Group position="apart">
            <Text fz="lg" fw={500}>
                {title}
            </Text>
            <Badge size="sm">{country}</Badge>
            </Group>
            <Text fz="sm" mt="xs">
            {description}
            </Text>
        </Card.Section>
    
        <Card.Section className={classes.section}>
            <Text mt="md" className={classes.label} c="dimmed">
            </Text>
            <Group spacing={7} mt={5}>
            {features}
            </Group>
        </Card.Section>
    
        <Group mt="xs">
            <Button radius="md" style={{ flex: 1 }}>
                Show details
            </Button>
        </Group>
        </Card>
    );
}