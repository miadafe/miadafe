import { Button } from "@mui/material"
import "./Panel.css"
import "./Navbar.css"
import { useState } from "react"

export function Panel(props){
let views = ["list view", "photo view"]
let [view, setView] = useState(0)


function toggleView(){
    console.log(i)
    console.log(views[i])
    let i = 0;
    setView(i+1);
    if (i >= views.length()){
        i = 0;
    }
}

    return(
        <div className='panel'>
            <h3 className="title">{props.title}</h3>
            
            <div className="button-list">
                <Button onClick={toggleView}>{views[view]}</Button>/<Button>archive view</Button>
            </div>
        </div>
    )
}