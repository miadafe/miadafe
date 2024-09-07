import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">home</Link><span>/</span>
            <Link to="/page1">polaroid wheel</Link><span>/</span>
            <Link to="/page2">projects</Link><span>/</span>
            <Link to="/page3">book diary</Link>
        </div>
    )
}