import React from 'react';

import { Hero } from './StyledHero';

const hero = (props) => { 
    return (
        <Hero style={props.style} className={props.styles + " relative cursor-default flex justify-center items-center overflow-hidden text-white"}>
            {props.children}
        </Hero>
    )
}
export default hero;