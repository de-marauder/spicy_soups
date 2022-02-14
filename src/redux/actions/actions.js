import { actionType } from "./actionTypes";

export const AddToCart = (meal) => {
    return {
        type: actionType.ADD_ITEM_TO_CART,
        data: meal
    }
}

export const removeFromCart = (meal) => {
    return {
        type: actionType.REMOVE_ITEM_FROM_CART,
        data: meal
    }
}
export const emptyCart = () => {
    return {
        type: actionType.EMPTY_CART,
    }
}

export const checkOut = () => {
    return {
        type: actionType.CHECKOUT,
    }
}