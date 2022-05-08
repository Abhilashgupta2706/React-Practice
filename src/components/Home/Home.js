import React, { useState, useEffect, useRef } from 'react'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document(index.html)head using a <script> tag
import BIRDS from '../../../node_modules/vanta/dist/vanta.birds.min'
import "./Home.css"

import LinkRoute from './LinkRoute'


export default function Home() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)


    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                colorMode: "lerpGradient",
                birdSize: 1.10,
                wingSpan: 22.00,
                speedLimit: 3.00,
                separation: 29.00,
                alignment: 24.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <>
            <div id='background' ref={myRef}>
                <div className='container-fluid py-5 '>
                    <h1 className='display-5 fst-italic fw-bold text-white mb-5'>Home Page</h1>

                    <div className='d-flex align-item-center justify-content-center flex-wrap gap-5'>

                        <LinkRoute text='Particle JS' link="/particles-js" />
                        <LinkRoute text='Text Animation' link="/text-animation" />
                        <LinkRoute text='Interactive 3D BG' link="/interactive-3d-background" />
                        <LinkRoute text='Circular Menu' link="/circular-menu" />

                    </div>
                </div>
            </div>
        </>
    )
}
