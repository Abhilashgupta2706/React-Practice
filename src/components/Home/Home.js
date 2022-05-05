import React from 'react'
import LinkRoute from './LinkRoute'

export default function Home() {
    return (
        <>
            <div className='container-fluid py-5 '>
                <h1 className='display-5 fst-italic fw-bold text-white mb-5'>Home Page</h1>

                <div className='d-flex align-item-center justify-content-center flex-wrap gap-5'>

                    <LinkRoute text='Particle JS' link="/particles-js" />
                    <LinkRoute text='Text Animation' link="/text-animation" />
                    <LinkRoute text='Interactive 3D BG' link="/interactive-3d-background" />

                </div>
            </div>
        </>
    )
}
