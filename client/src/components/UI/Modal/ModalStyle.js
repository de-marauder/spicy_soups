import styled from 'styled-components'

export const ModalStyle = styled.div`
    width: 60vw;
    min-height: 300px;
    background: #eee;
    box-shadow: 0 3px 10px #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    z-index: 30;
    position: fixed;
    top: 25vh;
    right: calc(40vw/2);

    @media (max-width: 600px) {
        width: 80%;
        top: calc((100vh - 500px)/2);
        right: calc(20%/2);
    }
`