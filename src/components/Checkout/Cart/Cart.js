import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import MenuCard from "../../Menu/MenuCard";
import Button from "../../UI/Button/Button";
import N from "../../UI/utilities/Naira/N";
import CartProduct from "./CartProduct";


const Cart = () => {

    const cart = useSelector((state) => state.cartReducer)
    const itemCounter = useSelector(state => state.cartReducer.itemCounter)
    const dispatch = useDispatch()

    const deliveryFee = 1000;

    let subTotalArr = {}
    let btnDisabled = false

    let orderedItems = {}

    const cartItems = itemCounter ? Object.keys(itemCounter).map((el) => {


        Object.values(cart.cart).forEach((mealObj) => {
            // console.log(orderedItems)
            if (mealObj.id === el) {
                orderedItems[el] = mealObj
                // console.log(orderedItems, mealObj, el)
                if (!orderedItems[el]) {
                    btnDisabled = true
                }
            }
        })

        subTotalArr[el] = itemCounter && orderedItems[el] ? (itemCounter[orderedItems[el].id] * orderedItems[el].price) : 0

        return (
            itemCounter && orderedItems[el] ?
                (<tr key={el} className="border-b-2 border-stone-300">
                    <td className="py-2 sm:pl-5 w sm:w-80">
                        <CartProduct el={orderedItems[el]} />
                    </td>
                    <td className="p-2 sm:pl-5 text-center sm:text-left">
                        {/* <input  value={itemCounter[el]} /> */}
                        <div className="text-white rounded-xl overflow-hidden bg-stone-500 my-2 flex justify-between sm:justify-around">

                            <button
                                disabled={btnDisabled}
                                onClick={() => { dispatch({ type: 'REMOVE_ITEM_FROM_CART', data: orderedItems[el] }) }}
                                className="hover:bg-red-600 disabled:bg-stone-600 disabled:text-stone-800 hover:border-red-600 disabled:border-0 px-2 py-1 font-black w-1/3"
                                id='remove from cart'>-</button>

                            <p className="bg-white text-center text-black py-1 w-1/3" id='counter'>
                                {itemCounter ? itemCounter[orderedItems[el].id] : 0}
                            </p>
                            <button
                                onClick={() => dispatch({ type: 'ADD_ITEM_TO_CART', data: orderedItems[el] })}
                                className="hover:bg-lime-600 hover:border-lime-600 px-2 py-1 font-black w-1/3"
                                id='add to cart'>+</button>
                        </div>
                    </td>
                    <td className="p-2 sm:pl-5  text-center sm:text-left">
                        <N />
                        {orderedItems[el].price}
                    </td>
                    <td className="p-2 sm:pl-5  text-center sm:text-left">
                        <N />{itemCounter[orderedItems[el].id] * orderedItems[el].price}</td>
                </tr>) : null
        )
    }) : []

    // console.log("Sub total Arr = ", subTotalArr)
    const subTotal = (Object.values(subTotalArr).length > 0) ? Object.values(subTotalArr).reduce((prevEl, currentEl) => {
        return prevEl + currentEl
    }) : 0
    // console.log(cartItems.length)
    return (
        <section className="py-20">
            <h1 className="font-festive font-black text-center text-4xl sm:text-7xl text-orange-600">Cart</h1>

            <div>
                <table className="text-sm sm:text-base my-10 mx-auto w-11/12 sm:w-10/12 md:w-3/4 rounded-xl bg-c-green overflow-hidden text-black">
                    <thead className="text-white">
                        <tr className="">
                            <th className="p-2 sm:pl-5  text-center sm:text-left w-1/2">Product</th>
                            <th className="p-2 sm:pl-5  text-center sm:text-left">Quantity</th>
                            <th className="p-2 sm:pl-5  text-center sm:text-left">Price</th>
                            <th className="p-2 sm:pl-5  text-center sm:text-left">Subtotal</th>
                        </tr>
                    </thead>

                    <tbody className="bg-stone-200 min-h-full">
                        {cartItems}
                    </tbody>
                </table>
                {cartItems.length === 0 ? <div className="text-4xl text-center my-10"><strong>Your Cart is empty</strong></div> : null}
            </div>
            <div className="mx-auto flex items-start flex-col-reverse sm:flex-row sm:justify-between w-11/12 sm:w-10/12 md:w-3/4" >
                <button
                    disabled={(itemCounter === null) ? true : (Object.keys(itemCounter).length <= 0 ? true : false)}
                    onClick={() => dispatch({ type: "EMPTY_CART" })}
                    className="bg-gradient-to-r from-red-600 to-red-300 rounded-3xl py-3 px-5 text-white hover:to-red-600 disabled:bg-gradient-to-l disabled:from-stone-600 disabled:to-stone-600 disabled:hover:to-stone-600">Empty Cart</button>
                <div className="w-full mb-3 bg-stone-200 rounded-3xl p-5 space-y-2 text-center sm:w-1/2 md:w-4/12">
                    <div className="flex justify-between p-2">
                        <p>Subtotal</p>
                        <p><N />{subTotal}</p>
                    </div>
                    <div className="flex text-sm text-stone-400 justify-between p-2">
                        <p>Delivery</p>
                        <p><N />{deliveryFee}</p>
                    </div>
                    <div className="flex justify-between p-2">
                        <strong>
                            <p>Total</p>
                        </strong>
                        <strong>
                            <p><N />{deliveryFee + subTotal}</p>
                        </strong>
                    </div>
                    <NavLink to={"contact-info"}>
                        <Button disabled={(itemCounter === null) ? true :  (Object.keys(itemCounter).length <= 0 ? true : false)} className="py-2 w-fit sm:w-3/4 hover:relative hover:text-white hover:top-1">CHECKOUT</Button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Cart;