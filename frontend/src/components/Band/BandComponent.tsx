import { Card, Center, Grid, Space } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { AssetsService } from "../../services/AssetsService";
import { DataService } from "../../services/DataService";
import { LanguageText } from "../../types/LanguageText";
import { MemberType } from "./types/MemberType";
import { MemberPropertyType } from "./types/MemberPropertyType";
import { RenderLanguageText } from "../../services/useLanguage";
import { BORDER_RADIUS, CONTENT_MARGIN } from "../../utils/constants";

function MemberPropertyTable(props : {properties : MemberPropertyType[]}){

    const tableRows = props.properties.map((property, index) => {
        return(
            <tr key={index}>
                <td><img alt="" src={AssetsService.get(property.iconAssetId)} width={25}/></td>
                <td><RenderLanguageText text = {property.description}/></td>
            </tr>
        )
    });

    return(
        <table>
            <tbody>
                {tableRows}
            </tbody>
        </table>
        )
}

function Slides(){
    const members : MemberType[] = DataService.getBandMembers();
    
    const slides = members.map((member, index) =>
        <Carousel.Slide key={index}>
            <Card radius={10} style={{height: "100%", borderRadius: BORDER_RADIUS}}>
                <Grid>
                    <Grid.Col md={8} lg={5}>
                        <Center>
                            <img alt={member.name} src={AssetsService.get(member.assetId)} style={{width: "100%", maxWidth: "300px", borderRadius: BORDER_RADIUS}}/>
                        </Center>
                    </Grid.Col>
                    <Grid.Col md={6} lg={7}>
                        <h2>{member.name}</h2>
                        <MemberPropertyTable properties = {member.properties}/>
                        <p><RenderLanguageText text = {member.description}/></p>
                    </Grid.Col>
                </Grid>
            </Card>
        </Carousel.Slide>
    )

    return <>{slides}</>
}

export function BandHeader(){
    const description : LanguageText = DataService.getBandDescription();
    const title : LanguageText = DataService.getBandTitle();
    return(
        <Grid justify="center">
            <Grid.Col span={12}>
                <h1>
                    <RenderLanguageText text = {title}/>
                </h1>
                <p style={{textAlign: "justify"}}><RenderLanguageText text = {description}/></p>
            </Grid.Col>
        </Grid>
    )
}

export function Band(){
    return(
        <div style={{margin: CONTENT_MARGIN + 10}}>
            <Space h={40}/>
            <BandHeader/>
            <Grid justify="center" mt={30}>
                <Grid.Col md={10} sm={12}>
                    <Carousel slideSize={"60%"} slideGap="md" withControls={false} withIndicators>
                        <Slides/>
                    </Carousel>
                </Grid.Col>
            </Grid>
        </div>
    )
}