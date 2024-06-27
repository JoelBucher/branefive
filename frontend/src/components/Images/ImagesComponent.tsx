import { Text, Space, Grid, Image, BackgroundImage, Button } from "@mantine/core";
import { useImagesStyle } from "./hooks/useImagesStyles";
import { DataService } from "../../services/DataService";
import { ImageType } from "./types/ImageType";
import { AssetsService } from "../../services/AssetsService";

export function ImageComponent(){
    const { classes } = useImagesStyle(); 
    
    const gallery = DataService.getGallery();

    const portrait : ImageType = gallery.portrait;
    const landscape : ImageType = gallery.landscape;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const bestFitImage = windowHeight > windowWidth ? portrait : landscape;

    return (
        <BackgroundImage src={AssetsService.get(bestFitImage.assetId)} style={{height: window.innerHeight}}>
            <Grid align='center' justify='center'>
                <Grid.Col sm={10} lg={8}>
                        <h1 className={classes.title}>
                        Meet{' '}
                            <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
                                Branefive
                            </Text>
                        </h1>
                        <Space h={10}/>
                        <Button
                            className={classes.button}
                            component="a"
                            href="#/band"
                        >
                            Explore the Band
                        </Button>
                </Grid.Col>
            </Grid>
        </BackgroundImage>
    );
}
