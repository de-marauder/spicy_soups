const Button = props => {
    const style = props.className ? props.className : ""

    return (
        <button onClick={props.doStuff} disabled={props.disabled} className={style + ' disabled:hidden p-4 rounded-2xl border-2 border-orange-600 hover:bg-orange-600'}>
            {props.children}
        </button>
    )
}

export default Button;