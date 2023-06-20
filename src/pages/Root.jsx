import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";

const Root = () => {
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  const register = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "80vh",
        alignItems: "center",
      }}
    >
      <h1>Herzlich Willkommen!</h1>
      <h3>Melden Sie sich bitte jetzt an!</h3>
      <MyButton onClick={login}>Anmelden</MyButton>
      <p>oder</p>
      <MyButton onClick={register}>Account erstellen</MyButton>
      <img style={{ width: "350px" }} src="https://www.aulacc.net/pages/images/cand.png" alt="" />
    </div>
  );
};

export default Root;
