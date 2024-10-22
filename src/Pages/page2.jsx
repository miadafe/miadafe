import { Link } from "react-router-dom"
import { Polaroid } from "../Components/Polaroid"
import { ScrapbookPage } from "../Components/ScrapbookPage"
import iconA from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/damn.jpeg';
import iconB from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/coffee-run.jpeg';
import iconC from '/Users/miadafe/Documents/web_dev/mckd_web/src/assets/lain.png';
import "../../src/index.css"
import { Panel } from "../Components/Panel";
import { useState, useEffect, useStore} from "react";
import { getStaticContextFromError } from "@remix-run/router";


export function Page2(){
    const projects = ["star bikini", "granny square blanket", "swirly bag", "granny square bag", "heart jumper", "checker scarf"];
    let [view, setView] = useState(0);





    return(
        <div>
            <div className="horizontal">
                <Panel></Panel>

                <div className="scrolling">

                        {projects.map((project) => (
                            <p className="list">{project}</p>        
                        )) }

                         {/* { state.view == 0 ? 
                        projects.map((project) => (
                            <p className="list">{project}</p>        
                        )) 
                        : 
                        <p className="pics-list">pics coming soon</p> } */}
                </div>
            </div>
        </div>
    )
}