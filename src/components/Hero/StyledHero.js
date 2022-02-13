import styled from 'styled-components';
import BgImg from '../../images/vegetables-set-left-black-slate.jpg';

export const Hero = styled.section`
    background: linear-gradient(to right, rgba(42, 73, 53, 1), 
        rgba(0, 0, 0, 0.1)), 
        url(${BgImg});
    background-position: top right;
    background-size: cover;
    width: 100vw;
    // height: 110vh;
`