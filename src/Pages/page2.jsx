import { Link } from "react-router-dom"
import { ScrapbookPage } from "../Components/ScrapbookPage"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "../../src/index.css"
import { Panel } from "../Components/Panel";
import { useState, useEffect, useStore} from "react";
import { getStaticContextFromError } from "@remix-run/router";
import { PhotoView } from "../Components/PhotoView";
import { PhotoProject } from "../Components/PhotoProject";
import { useStoreState } from "easy-peasy";
import React from "react";


export function Page2(){
    //import project titles from state title

    const projects = useStoreState(state => state.photoProjectModels);

    //const projects = ["star bikini", "granny square blanket", "swirly bag", "granny square bag", "heart jumper", "checker scarf"];

    let [view, setView] = useState(0);

    const ScrollToView = (id) => {

        const display = document.getElementById(id);
        if (display){
            display.scrollIntoView();
        }
    
    }


    return(
        <div>
            <div className="horizontal">

                <div className="scrolling">
                        
                        <div className="left-third">
                            {projects.map((project) => (
                                <>
                                {/* new way of doing this that actually works you need to use useRef -> instructions in GPT cba now lol */}
                                    {/* <a href={`/page2/#${project.id}`} className="list">{project.title}</a> */}
                                    <button key={project.id} onClick={() => ScrollToView(project.id)} className="list">{project.title}</button>
                                    {/* <Link to={`/page2/#${project.id}`} className="list">{project.title}</Link> */}
                                    {/* <p className="list">{project.title}</p>   */}
                                </>
                            ))}
                        </div>

                       
                </div>
                        <div className="right-2-thirds">
                            {/* <PhotoProject></PhotoProject> */}
                            <div>
                            {projects.map((project, index) => (
                            <div key={index} id={project.id}>
                                
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
            </div>
        </div>
    )
}