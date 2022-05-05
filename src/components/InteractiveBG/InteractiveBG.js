import React, { useState, useEffect, useRef } from 'react'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document(index.html)head using a <script> tag
import WAVES from '../../../node_modules/vanta/dist/vanta.waves.min'
import "./InteractiveBG.css"

export default function InteractiveBG() {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)


    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: myRef.current,
                color: 0x000000,
                shininess: 60,
                waveHeight: 15,
                waveSpeed: 1.2,
                zoom: 1
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])



    return (
        <>
            <div id='background' ref={myRef}>

                <div id='content'>
                    <div className=' p-5 text-light'>
                        <h1>Interactive 3D Background</h1>
                        <h3>From <a href="https://www.vantajs.com/">Vanta JS</a></h3>
                    </div>
                </div>

            </div>
        </>
    )
}
