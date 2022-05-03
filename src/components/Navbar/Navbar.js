import React from 'react'
import icon from "./icon.png"
import { Link } from 'react-router-dom'



export default function Navbar() {
    return (
        <>

            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid ">
                    <div class="navbar-brand mx-auto">
                        <Link to='React-Practice/'><img src={icon} alt="" width="25" height="25" class="d-inline-block align-text-top text-center mx-2" /></Link>
                        React Practice
                    </div>
                </div>
            </nav>

        </>
    )
}
