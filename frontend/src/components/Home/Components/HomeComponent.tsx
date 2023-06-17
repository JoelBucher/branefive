import { Space } from "@mantine/core";
import { Newsletter } from "../../Newsletter/NewsletterComponent";
import { Headlines } from "./Headlines";
import { Hero } from "./Hero";


export function Home(){
    return(
    <>
        <Hero/>
        <Space h={200} />
        <Headlines/>
        <Space h={200} />
        <Newsletter/>
    </>
    )
}