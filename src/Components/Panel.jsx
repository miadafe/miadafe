import { Button } from "@mui/material"
import "./Panel.css"
import "./Navbar.css"
import { useState } from "react"

export function Panel(props){
let views = ["list view", "photo view"]
let [view, setView] = useState(0)


function toggleView(){

    setView(view+=1);
    if (view >= views.length){
        view = 0;
    }
}

    return(
        <div className='panel'>
            <h3 className="title">{props.title}</h3>
            
            <div className="button-list">
                <span><Button onClick={toggleView}>{views[view]}</Button>/<Button>archive view</Button></span>
            </div>
        </div>
    )
}