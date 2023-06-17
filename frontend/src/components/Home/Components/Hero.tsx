import { AssetsService } from "../../../services/AssetsService";
import logo from '../../../assets/branefive_logo.svg';
import { HEADER_HEIGHT } from "../../../utils/constants";
import { ActionIcon, Grid, MediaQuery } from "@mantine/core";
import { useViewportSize, useWindowScroll } from '@mantine/hooks';
import { IconChevronDown } from "@tabler/icons-react";

function DynamicLogo(){
    return(
        <>
        <MediaQuery query="(max-width: 60em)" styles={{display: "none"}}>
            <img src={logo} style={{position: "absolute", zIndex: 0, width: "30%", top: "10%", left: "10%"}} alt="logo"/>
        </MediaQuery>
        <MediaQuery query="(min-width: 60em)" styles={{display: "none"}}>
            <img src={logo} style={{position: "absolute", zIndex: 0, width: "60%", top: "10%", left: "20%"}} alt="logo"/>
        </MediaQuery>
        </>
    )
}

function ScrollDownButton(){
    const scrollTo = useWindowScroll()[1];
    const height = useViewportSize().height;
    return(
        <Grid justify="center" style={{marginTop: height - 140}}>
            <ActionIcon onClick={() => scrollTo({ y:  height})} size={70}>
                <IconChevronDown size={70} color="white"/>
            </ActionIcon>
        </Grid>
    )
}

function BackgroundVideo(){
    return(
        <video autoPlay muted loop style={{minHeight: '100%', minWidth: "100%", position: "absolute"}}>
            <source src={AssetsService.get('video')} type="video/mp4"/>
        </video>
    )
}

export function Hero(){
    return (
        <div style={{position: "relative", width: "100%", minHeight:`calc(100vh - ${HEADER_HEIGHT})`, overflow: "hidden"}}>
            <BackgroundVideo/>
            <DynamicLogo/>
            <ScrollDownButton/>
        </div>
    );
}

/*
<h1 style={{position: "absolute", zIndex: 1, color: "white", top: "60%", left: "10%"}}>Rock made in Seetal</h1>
*/