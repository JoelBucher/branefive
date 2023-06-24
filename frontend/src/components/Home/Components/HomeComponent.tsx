import { Space } from "@mantine/core";
import { Newsletter } from "../../Newsletter/NewsletterComponent";
import { Headlines } from "./Headlines";
import { Hero } from "./Hero";
import { NewsComponent } from "../../News/NewsComponent";


export function Home(){
    return(
    <>
        <Hero/>
        <Space h={150} />
        <Headlines/>
        <Space h={150} />
        <NewsComponent />
        <Space h={150} />
        <Newsletter/>
    </>
    )
}