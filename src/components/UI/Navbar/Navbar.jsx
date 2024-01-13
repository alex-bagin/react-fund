import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
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
    <nav className={classes.navbar}>
      {isAuth && (
        <>
          <div className={classes.navbar__logout}>
            <MyButton onClick={logout}>Logout</MyButton>
          </div>
          <div className={classes.navbar__links}>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              Posts
            </NavLink>
            <NavLink
              to="/dogs"
              className={({ isActive, isPending }) =>
                isPending ? classes.pending : isActive ? classes.active : ""
              }
            >
              Dogs
            </NavLink>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
