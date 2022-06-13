import * as types from './product.types'
import axios from 'axios'

const getProductsLoading = (payload) => {
    return {
        type: types.GET_PRODUCTS_LOADING,
        payload
    }
}

const getProductsSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload
    }
}

const getProductsError = (payload) => {
    return {
        type: types.GET_PRODUCTS_ERROR,
        payload
    }
}

const getProducts = (payload) => (dispatch) => {
    dispatch(getProductsLoading());
    axios.get('http://localhost:8080/products')
    .then((res)=> dispatch(getProductsSuccess(res.data)))
    .catch((err)=> dispatch(getProductsError(err.data)))
}

export { getProducts }