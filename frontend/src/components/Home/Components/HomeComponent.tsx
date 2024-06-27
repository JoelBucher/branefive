import { Space } from "@mantine/core";
import { Newsletter } from "../../Newsletter/NewsletterComponent";
import { Hero } from "./Hero";
import { NewsComponent } from "../../News/NewsComponent";
import { ImageComponent } from "../../Images/ImagesComponent";
import { Tour } from "../../Tour/TourComponent";


export function Home(){
    return(
    <>
        <Hero/>
        <Space h={150} />
        <ImageComponent />
        <Space h={150} />
        <Tour />
        <Space h={150} />
        <NewsComponent />
        <Space h={150} />
        <Newsletter/>
    </>
    )
}