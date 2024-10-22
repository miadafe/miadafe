import { Link } from "react-router-dom"
import { Polaroid } from "../Components/Polaroid"
import { ScrapbookPage } from "../Components/ScrapbookPage"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "../../src/index.css"
import { BookDiary } from "../Components/BookDiary";
import {Alert} from "../Components/Alert";


export function Page3(){

    return(
        <div className="page3">
            <Alert></Alert>
            {/* <BookDiary></BookDiary> */}


            <ScrapbookPage/>
            
            <ScrapbookPage/>
        </div>
    )
}