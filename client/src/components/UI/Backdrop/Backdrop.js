
const Backdrop = (props) => {
    
    return (
        <div onClick={props.doStuff} className={`bg-black/80 fixed w-screen h-screen ${props.backdropClass}`}>{props.children}</div>
    )
}

export default Backdrop;