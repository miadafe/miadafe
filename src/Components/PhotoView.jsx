import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./BookDiary.css"
import { Polaroid } from './Polaroid';
import { Note} from './Note';
import {PhotoProject} from './PhotoProject'
import { useStoreActions, useStoreState } from "easy-peasy";


export function PhotoView(){

    const projectViewModel = useStoreState(state => state.photoProjectModel);

// const projectViewModel = [
//     {
//     title:"Star Bikini",
//     photos:["bikini 1 filler", "bikini 2 filler"],
//     photoCaption:"croatia 2022",
//     content: "i loled",
//     dateFinished: "11:04:24"
//     },
//     {
//     title:"Grany Square Blanket",
//     photos:["mr man","a second", "a third"],
//     photoCaption:"croatia 2022",
//     content: "i loled",
//     dateFinished: "sometime etween august and now"
//     } 
// ]   

    return(
        <div>
            {/* {bookDiaryEntries.map((entry) => {
                //make a component for book diary entry
                <BookDiaryEntry title={entry.title} author={entry.author} oneliner={entry.oneliner} img={entry.img} starRating={entry.starRating} content={entry.content} dateFinished={entry.dateFinished}/>
            })} */}
             {projectViewModel.map((project) => {
                //make a component for book diary entry
                <PhotoProject title={project.title} photos={project.photos} photoCaption={project.photoCaption} content={project.content} dateFinished={project.dateFinished}/>
            })}

        </div>
    )
}