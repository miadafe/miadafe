import { Navbar } from "./Components/Navbar"
import { Outlet } from "react-router-dom"
//import { Tablaeu } from "./Components/Tablaeu"
import './index.css'

export function Layout(){
    return(
        <>
            <div>
            <Navbar/>
            <main className="contentbelownav">
                <Outlet/>
            </main>
            </div>
        </>
    )
}