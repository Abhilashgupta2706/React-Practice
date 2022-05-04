import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

import particlesConfig from './ParticlesConfig';

export default function ParticlesJS() {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <>
            <Particles style={{ zIndex: "-1000" }} init={particlesInit} options={particlesConfig}></Particles>

        </>
    );
}
