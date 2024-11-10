import "../../src/index.css"
import { useStoreActions, useStoreState } from "easy-peasy";
import { PhotoClicker } from "../Components/PhotoClicker"
import { PolaroidRow } from "../Components/PolaroidRow";


export function Page1(){
    
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