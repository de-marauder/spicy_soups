import React from 'react';

import {Hero} from './StyledHero';

const hero = (props) => { 
    return (
        <Hero className={props.className + ""}>
            {props.children}
        </Hero>
    )
}
export default hero;