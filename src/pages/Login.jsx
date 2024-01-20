/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("login: isAuth: ", isAuth);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    localStorage.setItem("auth", true);
    setIsAuth(true);
    return navigate("/react-fund/");
  };

  return (
    <section className="app container">
      <div className="login__inner">
        <h1>LogIn...</h1>
        <form onSubmit={login}>
          <MyInput
            value={user.email}
            onChange={(e) => setUser({ email: e.target.value })}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <MyInput
            placeholder="Passwort"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ password: e.target.value })}
            required
          />
          <MyButton>Login</MyButton>
        </form>
      </div>
    </section>
  );
};

export default Login;
