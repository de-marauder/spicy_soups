import React from 'react';

import {Hero} from './StyledHero';
// style={props.style}
const hero = (props) => { 
    return (
        <Hero className={props.className + ""}>
            {props.children}
        </Hero>
    )
}
export default hero;