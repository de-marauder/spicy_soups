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

export const submitContactInfo = (payload) => {
    return {
        type: actionType.SUBMIT_CONTACT_INFO,
        data: payload
    }
}
export const deleteContactInfo = () => {
    return {
        type: actionType.DELETE_CONTACT_INFO,
    }
}
export const checkOut = () => {
    return {
        type: actionType.CHECKOUT,
    }
}
export const login = () => {
    return {
        type: actionType.LOGIN,
    }
}
export const logout = () => {
    return {
        type: actionType.LOGOUT,
    }
}
