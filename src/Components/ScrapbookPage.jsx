import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./ScrapbookPage.css"
import { Polaroid } from './Polaroid';
import { Note} from './Note';


export function ScrapbookPage(){
const scrapbookPage ={
    text:"heyy uhhhh .. is this thing on?",
    img:iconA,
    polaroidScribble:"coffee"
}

    return(
        <div className='page'>
            <Note text={scrapbookPage.text}/>
            <Polaroid img={iconA} scribble={scrapbookPage.polaroidScribble}/>
        </div>
    )
}