// Note: Do not update/change the initial state
import * as types from './cart.types'

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState, {type, payload}) => {
  switch(type){
    case types.GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        getCartItems: {
          ...state.getCartItems,
          loading: true,
          error: false,
        }
      }
    }

    case types.GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        getCartItems: {
          ...state.getCartItems,
          loading: false,
          error: false,
        },
        data: payload
      }
    }

    case types.GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        getCartItems: {
          ...state.getCartItems,
          loading: false,
          error: false,
        }
      }
    }

    default: {
      return state;
    }
  }
};
