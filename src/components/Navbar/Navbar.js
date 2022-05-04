import React from 'react'
import icon from "./icon.png"
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <>

            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand mx-auto">
                    <Link to='/'><img src={icon} alt="" width="25" height="25" className="d-inline-block align-text-top text-center mx-2" /></Link>
                    React Practice
                </div>
            </nav>

        </>
    )
}
