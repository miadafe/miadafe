import { Polaroid } from "./Polaroid"
import "./PolaroidRow.css"
// import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
// import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
// import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
// import iconD from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
// import iconE from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import { PhotoClicker } from "../Components/PhotoClicker"
import { useStoreState, useStoreActions } from "easy-peasy";

//const icons = [iconA, iconB, iconC, iconD, iconE];


export function PolaroidRow(props){

    const polaroids = useStoreState(state => state.polaroids);
    let wheelNum = useStoreState(state => state.wheelNumber);
    const changeWheelNum = useStoreActions(action => action.setWheelNumber);

    //console.log("from polaroid row", wheelNum)

    if (wheelNum === null){
        changeWheelNum(0);
    }

    return(
        <>
        <div className="polaroid-row">
            {polaroids.map((polaroid, i) => {
                    console.log(polaroids.length, "polaroids len")
                    console.log(7 - 15 + 1, "-15 ??? 7 (we want 1)")
                    console.log(7 - (15%7) + 1, "-15 mod 7 +1 (we want 1)")
                    console.log(7 - 5 + 1, "-5 ??? 7 (we want 3)")
                    console.log(7 - 2 + 1, "-2 ??? 7 (we want 6)")
                    console.log(0 % 7, "0 mod 7 (we want 0)")
                    console.log(1 % 7, "1 mod 7 (we want 1)")
                    console.log(2 % 7, "2 mod 7")
                    console.log(7 % 7, "7 mod 7")
                    console.log(8 % 7, "8 mod 7 (we want 1)")
                    console.log(15 % 7, "15 mod 7 (we want 1)")
                    let position = wheelNum;
                    console.log(i, wheelNum, position, "i, offset, position")
                    if (position < 0){
                        position = polaroids.length -1;
                    }
                    if (position >= polaroids.length){
                        position = 0;
                    }
                    return(
                    <Polaroid img={polaroids[position + i]} size={i === 2 ? "large" : "regular"} />     
                    );
            }) }
        </div>

        <PhotoClicker></PhotoClicker>
        </>
    )
}