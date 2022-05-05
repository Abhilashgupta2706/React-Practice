import React from 'react'
import Typical from 'react-typical'

export default function TypeWriter() {
    return (
        <>

            <h1>Hello, I'm
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        " Web dev", 1000,
                        " UI/UX Designer", 1000,
                        " FullStack Dev", 1000
                    ]}
                />
            </h1>
        </>
    )
}
