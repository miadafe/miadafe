import { Link } from "react-router-dom"
import { Polaroid } from "../Components/Polaroid"
import { ScrapbookPage } from "../Components/ScrapbookPage"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import { Button } from "@mui/material";
import { useState } from "react";
import "../../src/index.css"
import { useStoreActions, useStoreState } from "easy-peasy";
import { PhotoClicker } from "../Components/PhotoClicker"

const icons = [iconA, iconB, iconC];


export function Page1(){
    let wheelNumber = useStoreState(state => state.wheelNumber);

    
    return(
        <>
            <h1>polaroid..imagine if this was clickable and you could scroll through all my polaroids</h1>
            <div className="polaroid-w-buttons">
                <Polaroid img={icons[wheelNumber]} />
                {/* <PhotoClicker></PhotoClicker> */}
            </div>
        </>
    )
    }