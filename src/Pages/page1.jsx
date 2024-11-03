import { Polaroid } from "../Components/Polaroid"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import iconD from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import iconE from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import { useState } from "react";
import "../../src/index.css"
import { useStoreActions, useStoreState } from "easy-peasy";
import { PhotoClicker } from "../Components/PhotoClicker"
import { PolaroidRow } from "../Components/PolaroidRow";

const icons = [iconA, iconB, iconC, iconD, iconE];


export function Page1(){
    let wheelNumber = useStoreState(state => state.wheelNumber);

    
    return(
        <>
        <div className="centered-columns">

                {/* <Polaroid img={icons[wheelNumber]} size={"regular"} />
                <PhotoClicker ></PhotoClicker> */}

                <PolaroidRow ></PolaroidRow>
            </div>
        </>
    )
    }