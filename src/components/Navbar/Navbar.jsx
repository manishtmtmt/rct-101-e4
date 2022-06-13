import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSignOut } from "../../store/auth/auth.actions";
import { getCartItems } from "../../store/cart/cart.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const { data } = useSelector((state)=> state.cart)
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authSignOut())
    navigate("/")
  }

  useEffect(()=>{
    dispatch(getCartItems())
  },[dispatch])

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/">Logo</Link>
        {/* {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin}>Login</button> } */}
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">
          {isAuthenticated ? data.length : 0}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleLogout}>
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
