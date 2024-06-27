import { Text, Space, Grid } from "@mantine/core";
import { useImagesStyle } from "./hooks/useImagesStyles";
import { DataService } from "../../services/DataService";
import { ImageType } from "./types/ImageType";

export function ImageComponent(){
    const { classes } = useImagesStyle(); 
        
    const images : ImageType[] = DataService.getImages();
    
    return (
        <Grid align='center' justify='center'>
            <Grid.Col sm={10} lg={8}>
                <h1 className={classes.title}>
                Meet{' '}
                <Text component="span" variant="gradient" gradient={{ from: 'red', to: 'magenta' }} inherit>
                    Branefive
                </Text>
            </h1>
            </Grid.Col>
            <Space h={50}/>
        </Grid>
    );
}
