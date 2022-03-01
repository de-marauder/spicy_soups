import React from 'react';

import {Hero} from './StyledHero';
// style={props.style}
const hero = (props) => { 
    return (
        <Hero className={props.className + " p-40 relative cursor-default flex justify-center items-center overflow-hidden text-white"}>
            {props.children}
        </Hero>
    )
}
export default hero;