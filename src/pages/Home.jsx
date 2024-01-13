import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="App">
      <h1>Herzlich Willkommen bei ReactJS!!!</h1>
      <img
        style={{ border: "1px solid blue", width: 800, height: 600, marginTop: 30 }}
        src={home}
        alt="Home"
      />
    </div>
  );
};

export default Home;
