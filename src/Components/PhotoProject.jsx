import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./PhotoProject.css"
import { Polaroid } from './Polaroid';
import { Note} from './Note';


export function PhotoProject(props){
 
//function to display date like 17 Mar '24 ?
//display props.starRating ?

    return(
        <div>
            <h1 className='bookdiary-title'>{props.title}</h1>
            <h2 className='bookdiary-subtitle'>written by {props.author}</h2>
            
            <p className='bookdiary-oneliner'>{props.oneliner}</p>
            <p className='bookdiary-date'>read: {props.dateFinished}</p>
            <img className='bookdiary-img'src={props.img}></img>
            {/* allow for more than one image? */}

            <p className='bookdiary-content'>{props.content}</p>
        </div>
    )
}