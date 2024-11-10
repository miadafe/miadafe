import "./ButtonContainer.css"
import { Button } from "@mui/material";
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import iconD from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconE from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';

import { useStoreActions, useStoreState } from "easy-peasy";
import "../../src/index.css"

    //const icons = [iconA, iconB, iconC, iconD, iconC];


export function PhotoClicker(){
    const polaroids = useStoreState(state => state.polaroids);

    let wheelNumber = useStoreState(state => state.wheelNumber);

    const changeWheelNum = useStoreActions(action => action.setWheelNumber);
    
    
function incrementwheelNum() {
    
    if(wheelNumber === null){
        changeWheelNum(0);
    }

    changeWheelNum(wheelNumber += 1);

    if (wheelNumber > polaroids.length -1){
        changeWheelNum(0);
        console.log("set to 0:", wheelNumber)
    }
    console.log(wheelNumber);
}

function decrementwheelNum() {
    console.log("wheelNumber before setting", wheelNumber);

    changeWheelNum(wheelNumber -= 1);

    if (wheelNumber < 0){
        changeWheelNum(polaroids.length - 1);
        //console.log("set to 0:", wheelNumber)
    }
    console.log(wheelNumber);
}
    
    return(
        <div className="clicker-container">
            <Button onClick={decrementwheelNum} className="backward-clicker">{"<--"}</Button>

            <Button onClick={incrementwheelNum} className="forward-clicker">{"-->"}</Button>
        </div>
    )
}