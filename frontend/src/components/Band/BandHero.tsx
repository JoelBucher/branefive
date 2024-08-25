import { Grid, BackgroundImage, Button } from "@mantine/core";
import { DataService } from "../../services/DataService";
import { AssetsService } from "../../services/AssetsService";
import { ImageType } from "../Gallery/types/ImageType";
import { LanguageText } from "../../types/LanguageText";
import { BandType } from "./types/BandType";
import { RenderLanguageText } from "../../services/useLanguage";
import { BUTTON_BORDER_RADIUS, CONTENT_MARGIN, THEME_COLOR } from "../../utils/constants";

export function BandHero(){
    
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
            <Grid align='center' justify='center' style={{margin: CONTENT_MARGIN}}>
                <Grid.Col sm={4} lg={4} key={"col0"}>
                        <h1>
                            <RenderLanguageText text={heroTitle}/>
                        </h1>
                        
                </Grid.Col>
                <Grid.Col sm={4} lg={4} key={"col1"}>
                    <Button
                            size="xl"
                            component="a"
                            variant= "filled"
                            href="#/band"
                            onClick={() => {window.scrollTo(0, 0)}}
                            sx={{
                                backgroundColor: THEME_COLOR,
                                '&:hover': {
                                    backgroundColor: THEME_COLOR,
                                },
                            }}
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
