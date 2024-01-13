import React, { useContext, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import PasswordField from "../components/PasswordField";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    return navigate("/");
  };

  return (
    <div className="App">
      <h1>LogIn...</h1>
      <form onSubmit={login}>
        <MyInput
          value={user.email}
          onChange={(e) => setUser({ email: e.target.value })}
          type="text"
          name="email"
          id="email"
          placeholder="Email"
        />
        <PasswordField
          value={user.password}
          onChange={(e) => setUser({ password: e.target.value })}
        />
        <MyButton>Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
