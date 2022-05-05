import React from 'react'
import ClickEffect from './Animates/01/ClickEffect'
import TypeWriter from './Animates/02/TypeWriter'

export default function TextAnimation() {
    return (
        <>
            <div className='container my-5 d-flex gap-2 flex-column'>

                <ClickEffect />
                <br/>
                <TypeWriter />

            </div>
        </>
    )
}
