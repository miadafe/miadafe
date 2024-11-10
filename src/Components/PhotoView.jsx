import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./BookDiary.css"
import { Note} from './Note';
import {PhotoProject} from './PhotoProject'
import { useStoreActions, useStoreState } from "easy-peasy";


export function PhotoView(){

    const projectViewModels = useStoreState(state => state.photoProjectModels);


    return(
        <div>
            {/* {bookDiaryEntries.map((entry) => {
                //make a component for book diary entry
                <BookDiaryEntry title={entry.title} author={entry.author} oneliner={entry.oneliner} img={entry.img} starRating={entry.starRating} content={entry.content} dateFinished={entry.dateFinished}/>
            })} */}
             {projectViewModels.map((project) => {
                //make a component for book diary entry
                <PhotoProject title={project.title} photos={project.photos} photoCaption={project.photoCaption} dateFinished={project.dateFinished}/>
            })}

        </div>
    )
}