import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("auth");
    return navigate("/");
  };
  return (
    <div className={classes.navbar}>
      {isAuth && (
        <>
          <div className={classes.navbar__logout}>
            <MyButton onClick={logout}>Logout</MyButton>
          </div>
          <div className={classes.navbar__links}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/posts"}>Posts</Link>
            <Link to={"/dogs"}>Dogs</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
