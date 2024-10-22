import { Button } from "@mui/material"
import "./Panel.css"
import "./Navbar.css"
import { useStoreActions, useStoreState } from "easy-peasy";


export function Panel(){
//let views = ["list view", "photo view", "archive view"];
let views = useStoreState(state => state.views);
const setArchiveView  = useStoreActions(state => state.setArchiveView);


// function toggleView(payload){

//     setArchiveView(payload);
//     if (view >= views.length){
//         view = 0;
//     }
// }
// what i actually want is a list of 3 and those are clickable and that sets  the state no. which is the view

    return(
        <div className='panel'>
            
            <div className="button-list">
                {/* <span><Button onClick={toggleView}>{views[view]}</Button>/</span> */}
            
            
            {/* {views.map(({i, view}) => (<Button key={i} onClick={toggleView(i)}>{views[view]}</Button>))} */}

            {views.map(view => (
                <p>{view}</p>
            ))}
            
            </div>

    
        </div>
    )
}