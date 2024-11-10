import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "./PhotoProject.css"
import "../../src/index.css"
import { Polaroid } from './Polaroid';
import { Note} from './Note';
import { useStoreActions, useStoreState } from "easy-peasy";


export function PhotoProject(){

    //const projectViewModel = useStoreState(state => state.photoProjectModel);
    //const pics = props.photos;
 
    // title:"Star Bikini",
    // photos:["bikini 1 filler.jpg", "bikini 2 filler.jpg"],
    // photoCaption:"croatia 2022",
    // dateFinished: "11:04:24"

    const projectViewModels = useStoreState(state => state.photoProjectModels);


    return(
        <div>

            <div>
            {projectViewModels.map((project, index) => (
              <div key={index}>
                <h2 className='project-title'>{project.title}</h2>
                <p className='project-caption'>{project.photoCaption}</p>
                <p className='project-dateFinished'>{project.dateFinished}</p>
                <div>
                  {project.photos.map((photo, i) => (
                    <img className='project-img' key={i} src={photo} alt={`${project.title} ${i}`} />
                  ))}
                </div>
              </div>
            ))}
            </div>

        </div>
    )
}