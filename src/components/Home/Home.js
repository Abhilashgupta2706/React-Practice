import React from 'react'
import LinkRoute from './LinkRoute'

export default function Home() {

    // const btnColos = ["primary", "secondary", "success", "info", "warning", "danger",]



    return (
        <>
            <div className='container-fluid py-5 '>
                <h1 className='display-5 fst-italic fw-bold text-white mb-5'>Home Page</h1>

                <div className='d-flex align-item-center justify-content-center flex-wrap gap-5'>

                    <LinkRoute text='Particle JS' link="/particles-js" />

                </div>
            </div>
        </>
    )
}
