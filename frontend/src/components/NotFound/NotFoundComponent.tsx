import { Grid } from "@mantine/core";
import notFoundImage from '../../assets/404.svg';

export function NotFoundComponent(){
    return(
        <Grid justify="center">
            <Grid.Col sm={8} md={6} mt={40}>
                <img src={notFoundImage} alt="404 - not found" max-width="100%"/>
            </Grid.Col>
        </Grid>
    )
}