import { useSelector } from "react-redux"

import N from "../../UI/utilities/Naira/N";


const OrderSummary = (props) => {

    const cart = useSelector(state => state.cartReducer)
    const itemCounter = useSelector(state => state.cartReducer.itemCounter)

    let subTotalArr = {}
    let orderedItems = {}

    const deliveryFee = 1000

    const cartItems = itemCounter ? Object.keys(itemCounter).map((el) => {


        Object.values(cart.cart).forEach((mealObj) => {
            if (mealObj.id === el) {
                orderedItems[el] = mealObj
            }
        })

        subTotalArr[el] = itemCounter && orderedItems[el] ? (itemCounter[orderedItems[el].id] * orderedItems[el].price) : 0

        return (
            itemCounter && orderedItems[el] ?
                (<div key={el} className="border-b-2 mb-2 border-stone-300">
                    <p className="text-xs text-left text-stone-400">
                        {orderedItems[el].name}
                    </p>

                    <div className="sm:pl-5 flex justify-between">
                        <p>x{itemCounter[orderedItems[el].id]}</p>
                        <p><N />{itemCounter[orderedItems[el].id] * orderedItems[el].price}</p>
                    </div>
                </div>) : null
        )
    }): null

    const subTotal = (Object.values(subTotalArr).length > 0) ? Object.values(subTotalArr).reduce((prevEl, currentEl) => {
        return prevEl + currentEl
    }) : 0

    return (
        <div className={props.className + " h-fit py-5 px-3 text-sm rounded-3xl bg-stone-200"}>
            <p className="mb-3 lg:text-lg"><strong>Your Order</strong></p>
            {cartItems}
            <div className="w-full">
                <div className="flex justify-between py-2">
                    <p>Subtotal</p>
                    <p><N />{subTotal}</p>
                </div>
                <div className="flex text-xs text-stone-400 justify-between py-2">
                    <p>Delivery</p>
                    <p><N />{deliveryFee}</p>
                </div>
                <div className="flex justify-between py-2">
                    <strong>
                        <p>Total</p>
                    </strong>
                    <strong>
                        <p><N />{deliveryFee + subTotal}</p>
                    </strong>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;