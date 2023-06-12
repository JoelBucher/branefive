import { Newsletter } from "../../NewsletterComponent";
import { Headlines } from "./Headlines";
import { Hero } from "./Hero";


export function Home(){
    return(
    <>
        <Hero/>
        <Headlines/>
        <Newsletter/>
    </>
    )
}