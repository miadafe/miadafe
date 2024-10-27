import { Link } from "react-router-dom"
import { Desktop } from "../Components/Desktop"
import "../../src/index.css"

export function Home(){
    return(
        <>
        <div className="centered-columns">
            <Desktop/>
        </div>
        </>
    )
}