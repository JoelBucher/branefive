import { Space } from "@mantine/core";
import { Newsletter } from "../../Newsletter/NewsletterComponent";
import { Hero } from "./Hero";
import { NewsComponent } from "../../News/NewsComponent";
import { Tour } from "../../Tour/TourComponent";
import { BandHero } from "../../Band/BandHero";


export function Home(){
    return(
    <>
        <Hero/>
        <Space h={150} />
        <Tour />
        <Space h={150} />
        <BandHero />
        <Space h={150} />
        <NewsComponent />
        <Space h={150} />
        <Newsletter/>
    </>
    )
}