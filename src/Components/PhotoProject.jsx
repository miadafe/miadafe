import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
// import "./PhotoProject.css"
import { Polaroid } from './Polaroid';
import { Note} from './Note';
import { useStoreActions, useStoreState } from "easy-peasy";


export function PhotoProject(props){
 
    // title:"Star Bikini",
    // photos:["bikini 1 filler", "bikini 2 filler"],
    // photoCaption:"croatia 2022",
    // content: "i loled",
    // dateFinished: "11:04:24"

    // const projectViewModel = useStoreState(state => state.photoProjectModel);


    return(
        <div>
            <h1 className='project-title'>{props.title}</h1>
            {/* <h2 className='project-content'>{props.content}</h2> */}
            
            <p className='project-photoCaption'>{props.photoCaption}</p>

{/* 
            pics.map((pic) => (
                <img className='project-pic'></img>
            )) */}

            {/* <img className='project-img'src={props.img}></img> */}
            {/* allow for more than one image? */}

            <p className='project-dateFinished'>{props.dateFinished}</p>
        </div>
    )
}