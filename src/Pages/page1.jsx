import { Link } from "react-router-dom"
import { Polaroid } from "../Components/Polaroid"
import { ScrapbookPage } from "../Components/ScrapbookPage"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import { Button } from "@mui/material";
import { useState } from "react";
import "../../src/index.css"

export function Page1(){
const icons = [iconA, iconB, iconC];
let [count, setCount] = useState(0)

function incrementCount() {
    setCount(count += 1);
    if (count >= icons.length){
        setCount(0);
    }
    console.log(count);
}

    return(
        <>
            <h1>polaroid wheel</h1>
            <div className="horizontal">
                <Polaroid img={icons[count]} />

                <div className="clickerContainer">
                    <Button onClick={incrementCount} className="clicker">click me</Button>
                </div>  
            </div>
            <ScrapbookPage/>
        </>
    )
}