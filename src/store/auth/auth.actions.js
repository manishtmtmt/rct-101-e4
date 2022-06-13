import * as types from "./auth.types";
import axios from "axios";

const authSignInLoading = (payload) => {
  return {
    type: types.AUTH_SIGN_IN_LOADING,
    payload,
  };
};

const authSignInSuccess = (payload) => {
  return {
    type: types.AUTH_SIGN_IN_SUCCESS,
    payload,
  };
};

const authSignInError = (payload) => {
  return {
    type: types.AUTH_SIGN_IN_ERROR,
    payload,
  };
};

const authSignIn = (data) => (dispatch) => {
  dispatch(authSignInLoading());
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => dispatch(authSignInSuccess(res.data)))
    .catch((err) => dispatch(authSignInError(err.data)));
};

const authSignOut = () => {
  return { type: types.AUTH_SIGN_OUT };
};

export { authSignIn, authSignOut };
