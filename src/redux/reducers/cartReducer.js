
const initialState = {
    cart: [],
    counter: 0,
    checkout: null
}

let newCart = [];
let itemCounter = {}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            newCart = [...state.cart]
            newCart.push(action.data)

            newCart.forEach((item)=>{
                itemCounter[item] = (itemCounter[item] || 0) + 1
            })
            console.log(itemCounter)
            return {
                ...state,
                cart: newCart,
                counter: newCart.length
            }

        case 'REMOVE_ITEM_FROM_CART':
            newCart = [...state.cart]
            if (newCart.indexOf(action.data) !== -1) {
                newCart.splice(newCart.indexOf(action.data), 1)

                newCart.forEach((item)=>{
                    itemCounter[item] = (itemCounter[item] || 0) - 1
                })
                console.log(itemCounter)
            }
            console.log(itemCounter)
            return {
                ...state,
                cart: newCart,
                counter: newCart.length
            }
        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
                counter: 0
            }
        case 'CHECKOUT':
            return {
                ...state,
                checkout: true
            }
        default:
            return state
    }
}