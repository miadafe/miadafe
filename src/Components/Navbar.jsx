import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar(){
    return(
        <div className="navbar">
            
            <Link to="/">Home</Link><span>/</span>
            <Link to="/page1">Page1</Link><span>/</span>
            <Link to="/page2">Page2</Link><span>/</span>
            <Link to="/page3">Page3</Link>
        </div>
    )
}