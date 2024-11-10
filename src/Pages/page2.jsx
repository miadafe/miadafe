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


export function Page2(){
    //import project titles from state title

    const projects = useStoreState(state => state.photoProjectModels);

    //const projects = ["star bikini", "granny square blanket", "swirly bag", "granny square bag", "heart jumper", "checker scarf"];

    let [view, setView] = useState(0);


    return(
        <div>
            <div className="horizontal">
                {/* works at bringing in from state but not to plan anymore !!
                <Panel></Panel> */}

                <div className="scrolling">
                        
                        {/* so eventally i am conditionally rendering this or pics */}
                        <div className="left-third">
                        {projects.map((project) => (
                                <p className="list">{project.title}</p>  
                        ))}
                        </div>

                       
                </div>


                        <div className="right-2-thirds">
                            {/* make photo view work like panel up there !! */}
                            {/* <PhotoView></PhotoView>    */}
                            <PhotoProject></PhotoProject>
                        </div>
            </div>
        </div>
    )
}