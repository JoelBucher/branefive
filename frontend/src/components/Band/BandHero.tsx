import { Text, Space, Grid, Image, BackgroundImage, Button } from "@mantine/core";
import { useBandStyles } from "./hooks/useBandStyles";
import { DataService } from "../../services/DataService";
import { AssetsService } from "../../services/AssetsService";
import { ImageType } from "../Gallery/types/ImageType";
import { LanguageText } from "../../types/LanguageText";
import { BandType } from "./types/BandType";
import { RenderLanguageText } from "../../services/useLanguage";
import { BUTTON_BORDER_RADIUS } from "../../utils/constants";

export function BandHero(){
    const { classes } = useBandStyles(); 
    
    const band : BandType= DataService.getBand();
	const buttonText : LanguageText = band.heroButtonText;
    const heroTitle : LanguageText = band.heroTitle;
    const portrait : ImageType = band.heroPortrait;
    const landscape : ImageType = band.heroLandscape;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const bestFitImage = windowHeight > windowWidth ? portrait : landscape;

    return (
        <BackgroundImage src={AssetsService.get(bestFitImage.assetId)} style={{height: window.innerHeight}}>
            <Grid align='center' justify='center'>
                <Grid.Col sm={4} lg={4} key={0}>
                        <h1>
                            <RenderLanguageText text={heroTitle}/>
                        </h1>
                        
                </Grid.Col>
                <Grid.Col sm={4} lg={4} key={1}>
                    <Button
                            size="xl"
                            component="a"
                            variant= "filled"
                            href="#/band"
                            color="red"
                            style={{borderRadius: BUTTON_BORDER_RADIUS}}
                            >
                            <p>
                                <RenderLanguageText text={buttonText}/>
                            </p>
                        </Button>
                </Grid.Col>
            </Grid>
        </BackgroundImage>
    );
}
