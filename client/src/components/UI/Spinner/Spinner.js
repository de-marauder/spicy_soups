import classes from './Spinner.module.css'
import Backdrop from '../Backdrop/Backdrop';

const Spinner = () => {
    return (
        <div className={classes.SpinnerWrapper}>
        <Backdrop backdropClass={classes.Backdrop} />
        <div className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;