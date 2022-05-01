import { useSelector } from "react-redux"

const CartItems = () => {

    const cart = useSelector(state=>state.cartReducer)
    const itemCounter = useSelector(state=>state.cartReducer.itemCounter)

    const cartItems = Object.keys(itemCounter).map((el) => {


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

        subTotalArr[el] = itemCounter && orderedItems[el] ? (itemCounter[orderedItems[el].id] * orderedItems[el].price.slice(2)) : 0
       
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
                        {orderedItems[el].price.slice(2)}
                    </td>
                    <td className="p-2 sm:pl-5  text-center sm:text-left">
                        <N />{itemCounter[orderedItems[el].id] * orderedItems[el].price.slice(2)}</td>
                </tr>) : null
        )
    })

    return cartItems
}

export default CartItems