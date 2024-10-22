import "./ButtonContainer.css"
import { Button } from "@mui/material";
import { Polaroid } from "./Polaroid"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import { useStoreActions, useStoreState } from "easy-peasy";


    const icons = [iconA, iconB, iconC];


export function PhotoClicker(){
    let wheelNumber = useStoreState(state => state.wheelNumber);
    const changeWheelNum = useStoreActions(action => action.setWheelNumber);
    
    
function incrementwheelNum() {
    
    if(wheelNumber === null){
        changeWheelNum(0);
    }

    changeWheelNum(wheelNumber += 1);

    if (wheelNumber > icons.length -1){
        changeWheelNum(0);
        console.log("set to 0:", wheelNumber)
    }
    console.log(wheelNumber);
}

function decrementwheelNum() {
    console.log("wheelNumber before setting", wheelNumber);

    changeWheelNum(wheelNumber -= 1);

    if (wheelNumber < 0){
        changeWheelNum(icons.length - 1);
        //console.log("set to 0:", wheelNumber)
    }
    console.log(wheelNumber);
}
    
    return(
        <div className="button-container">
            {/* eventually will have one button that we pass an onlcikc to .. */}
                <Button onClick={incrementwheelNum} className="forward-clicker">{"-->"}</Button>
                <Button onClick={decrementwheelNum} className="backward-clicker">{"<--"}</Button>


        </div>
    )
}