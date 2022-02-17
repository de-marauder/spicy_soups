
const initialState = {
    cart: [],
    counter: 0,
    itemCounter: {},
    checkout: null
}

let newCart = [];


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            newCart = [...state.cart]
            newCart.push(action.data)
            let newItemCounter = {};
            // newItemCounter = { ...state.itemCounter }
            newCart.forEach((item) => {
                // console.log(newItemCounter)
                // console.log("ADD TO CART", newItemCounter[item.id], item.id)

                newItemCounter[item.id] = (newItemCounter[item.id] || 0) + 1
                
                // console.log("ADD ", newItemCounter[item.id])
            })
            console.log(newItemCounter)
            return {
                ...state,
                cart: newCart,
                itemCounter: {
                    ...state.itemCounter,
                    ...newItemCounter
                },
                counter: newCart.length
            }

        case 'REMOVE_ITEM_FROM_CART':
            newCart = [...state.cart]

            let ItemCounter = { ...state.itemCounter }
            if (newCart.indexOf(action.data) !== -1) {
                newCart.splice(newCart.indexOf(action.data), 1)
            }
            if (ItemCounter[action.data.id]) {
                // console.log(ItemCounter)
                ItemCounter[action.data.id] = ItemCounter[action.data.id] - 1
                // console.log(ItemCounter)
            }
            // console.log(ItemCounter)
            return {
                ...state,
                cart: newCart,
                itemCounter: {
                    ...state.itemCounter,
                    ...ItemCounter
                },
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