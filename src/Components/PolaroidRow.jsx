import { Polaroid } from "./Polaroid"
import "./PolaroidRow.css"
// import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
// import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
// import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
// import iconD from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
// import iconE from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import { PhotoClicker } from "../Components/PhotoClicker"
import { useStoreState } from "easy-peasy";

//const icons = [iconA, iconB, iconC, iconD, iconE];


export function PolaroidRow(props){

    const polaroids = useStoreState(state => state.polaroids);
    let wheelNum = useStoreState(state => state.wheelNumber);
    console.log("from polaroid row", wheelNum)

    return(
        <>
        <div className="polaroid-row">
            {polaroids.map((polaroid, i) => {
                    let position = i-wheelNum;
                    if (position < 0){
                        position = polaroids.length -1 - wheelNum;
                    }
                    return(
                    <Polaroid img={polaroids[position]} size={i == 2 ? "large" : "regular"} />     
                    );
            }) }
        </div>

        <PhotoClicker></PhotoClicker>
        </>
    )
}