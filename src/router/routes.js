import PostIdPage from "../components/PostIdPage";
import { RandomDog, dataLoader } from "../components/RandomDog";
import About from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Root from "../pages/Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <PostIdPage />,
  },
  {
    path: "/dogs",
    element: <RandomDog />,
    loader: dataLoader,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
