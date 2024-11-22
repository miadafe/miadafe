import { Navbar } from "./Components/Navbar"
import { Outlet } from "react-router-dom"
//import { Tablaeu } from "./Components/Tablaeu"
import './index.css'
import './Components/Navbar.css'

export function Layout(){
    return(
        <>
            <div>
                <div className="navbar-container">
                    <Navbar/>
                </div>
            <main className="contentbelownav">
                <Outlet/>
            </main>
            </div>
        </>
    )
}