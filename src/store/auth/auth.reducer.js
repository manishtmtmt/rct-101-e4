// Note: Do not update/change the initial state
import * as types from "./auth.types";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case types.AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case types.AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...state.data,
          token: payload,
          isAuthenticated: true,
        },
      };
    }

    case types.AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case types.AUTH_SIGN_OUT: {
      return { 
        ...state,
        data: {
          ...state.data,
          isAuthenticated: false
        }
       };
    }

    default: {
      return state;
    }
  }
};
