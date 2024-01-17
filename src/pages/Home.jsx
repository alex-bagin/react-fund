import React from "react";
import home from "../assets/home.jpg";

const Home = () => {
  return (
    <div className="app">
      <div className="home__inner">
        <h2>Welcome</h2>
        <img src={home} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
