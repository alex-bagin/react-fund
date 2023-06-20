import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      {isAuth ? (
        <Route>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              index={route.index}
              path={route.path}
              element={route.element}
              loader={route.loader}
              action={route.action}
              errorElement={route.errorElement}
            />
          ))}
        </Route>
      ) : (
        <Route>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              index={route.index}
              path={route.path}
              element={route.element}
              loader={route.loader}
              errorElement={route.errorElement}
            />
          ))}
        </Route>
      )}
    </Routes>
  );
};

export default AppRouter;
