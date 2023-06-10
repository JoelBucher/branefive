import { AssetsService } from "../../../services/AssetsService";
import { useHeroStyle } from "../hooks/useHeroStyle";
import { Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

export function Hero(){
    const { classes } = useHeroStyle();

    return (
        <video muted loop src={AssetsService.get("video")} width={"100%"} className={classes.hero}>
            
        <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
        />
        <Container className={classes.container}>
            <Title className={classes.title}>TODO: Logo</Title>
            <Text className={classes.description} size="xl" mt="xl">
            Rock made in Lucerne.
            </Text>

            <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Get started
            </Button>
        </Container>
        </video>
    );
}