import classes from './Backdrop.module.css'

const backdrop = (props) => {
    
    return (
        <div onClick={props.doStuff} style={props.style} className={classes.Backdrop}>{props.children}</div>
    )
}

export default backdrop;