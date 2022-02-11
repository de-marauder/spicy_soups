const Button = props => {
    return (
        <button className='mx-auto p-4 rounded-3xl border-2 border-orange-600 hover:relative hover:top-1 hover:bg-orange-600'>
            {props.children}
        </button>
    )
}

export default Button;