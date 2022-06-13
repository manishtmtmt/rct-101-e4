// Cart Actions here
import * as types from './cart.types'
import axios from 'axios'

const getCartItemsLoading = (payload) => {
    return {
        type: types.GET_CART_ITEMS_LOADING,
        payload
    }
}

const getCartItemsSuccess = (payload) => {
    return {
        type: types.GET_CART_ITEMS_SUCCESS,
        payload
    }
}

const getCartItemsError = (payload) => {
    return {
        type: types.GET_CART_ITEMS_ERROR,
        payload
    }
}

const getCartItems = (payload) => (dispatch) => {
    dispatch(getCartItemsLoading())
    axios.get("http://localhost:8080/cartItems")
    .then((res)=> dispatch(getCartItemsSuccess(res.data)))
    .catch((err)=> dispatch(getCartItemsError(err.data)))
}

const removeCartItemLoading = (payload) => {
    return {
        type: types.REMOVE_CART_ITEMS_LOADING,
        payload
    }
}

const removeCartItemSuccess = (payload) => {
    return {
        type: types.REMOVE_CART_ITEMS_SUCCESS,
        payload
    }
}

const removeCartItemError = (payload) => {
    return {
        type: types.REMOVE_CART_ITEMS_ERROR,
        payload
    }
}

const removeItemFromCart = (payload) => (dispatch) => {
    dispatch(removeCartItemLoading())
    axios.delete("http://localhost:8080/cartItems")
    .then((res)=>dispatch(removeCartItemSuccess()))
    .catch((err)=> dispatch(removeCartItemError(err.data)))
}

export { getCartItems, removeItemFromCart }