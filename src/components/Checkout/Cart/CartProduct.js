const CartProduct = (props) => {
    return (
        <div className=" shadow-2xl rounded-3xl w-full sm:mr-5 text-center flex items-center flex-col sm:flex-row" id='card'>
            <img className="w-1/2 sm:w-1/4 h-20 rounded-3xl" id='card img' src={props.el.Img} alt="meal" />
            <div className="w-full px-1 sm:px-4 py-1 " id='card desc' >
                <p className="text-sm sm:text-xl" id='name'><strong>{props.el.meal}</strong></p>
            </div>
        </div>
    )
}

export default CartProduct;