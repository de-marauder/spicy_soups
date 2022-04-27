
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    counter: JSON.parse(localStorage.getItem('counter')) || 0,
    itemCounter: JSON.parse(localStorage.getItem('itemCounter')) || {},
    checkout: null
}

let newCart = [];


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            newCart = [...state.cart]
            newCart.push(action.data)
            let newItemCounter = {};
            newCart.forEach((item) => {

                newItemCounter[item.id] = (newItemCounter[item.id] || 0) + 1

            })

            localStorage.setItem('itemCounter', JSON.stringify({ ...newItemCounter }))
            localStorage.setItem('cart', JSON.stringify(newCart))
            localStorage.setItem('counter', JSON.stringify(newCart.length))
            
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
                ItemCounter[action.data.id] = ItemCounter[action.data.id] - 1

                if (ItemCounter[action.data.id] === 0) {
                    delete ItemCounter[action.data.id]
                }
            }

            localStorage.setItem('itemCounter', JSON.stringify({ ...ItemCounter }))
            localStorage.setItem('cart', JSON.stringify(newCart))
            localStorage.setItem('counter', JSON.stringify(newCart.length))

            return {
                ...state,
                cart: newCart,
                itemCounter: {
                    ...ItemCounter
                },
                counter: newCart.length
            }
        case 'EMPTY_CART':
            localStorage.clear()
            return {
                ...state,
                cart: [],
                counter: 0,
                itemCounter: null,
                payCash: false
            }
        case 'SUBMIT_CONTACT_INFO':
            return {
                ...state,
                contactInfo: { ...action.data }
            }
        case 'DELETE_CONTACT_INFO':
            return {
                ...state,
                contactInfo: null,
            }
        case 'CHECKOUT':
            return {
                ...state,
                checkout: true
            }
        case 'PAY_CASH':
            return {
                ...state,
                payCash: true
            }

        default:
            return state
    }
}