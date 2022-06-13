import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSignIn } from "../store/auth/auth.actions";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authSignIn(loginCreds));
    navigate("/")
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          name={"email"}
          type={"email"}
          onChange={handleChange}
          placeholder="Enter Email"
          value={loginCreds.email}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Enter Password"
          value={loginCreds.password}
        />
        <button data-cy="login-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
