import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const Root = () => {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    navigate("/react-fund/login");
  };

  const register = (event) => {
    event.preventDefault();
    navigate("/react-fund/register");
  };

  return (
    <div className="welcome">
      <h1>Herzlich Willkommen!</h1>
      <br />

      <MyButton onClick={login}>Anmelden</MyButton>
      <h3>oder</h3>
      <MyButton onClick={register}>Account erstellen</MyButton>

      <br />
      <img style={{ width: "350px" }} src="https://www.aulacc.net/pages/images/cand.png" alt="" />
    </div>
  );
};

export default Root;
