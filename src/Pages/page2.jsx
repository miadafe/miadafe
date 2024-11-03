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


export function Page2(){
    const projects = ["star bikini", "granny square blanket", "swirly bag", "granny square bag", "heart jumper", "checker scarf"];
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
                            <p className="list">{project}</p>        
                        )) }
                        </div>
                            
                            {/* make photo view work like panel up there !! */}
                            {/* <PhotoView></PhotoView> */}   
                </div>

                <p className="pics-list">pics coming soon</p>

            </div>
        </div>
    )
}