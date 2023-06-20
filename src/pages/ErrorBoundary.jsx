import { useContext } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

export const ErrorBoundary = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const toHome = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const toLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <h1 style={{ margin: "30px 0", color: "red" }}>Oops! Die Seite wurde nicht gefunden!</h1>
      {isAuth ? (
        <MyButton onClick={toHome}>Zur Homepage</MyButton>
      ) : (
        <MyButton onClick={toLogin}>Zum Login</MyButton>
      )}
    </div>
  );
};
