import PostIdPage from "../components/PostIdPage";
import { RandomDog } from "../pages/RandomDog";
import About from "../pages/About";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Root from "../pages/Root";
import Registration from "../pages/Registration";

export const privateRoutes = [
  { path: "/", index: "index", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/dogs", element: <RandomDog /> },
  { path: "*", element: <ErrorBoundary /> },
];

export const publicRoutes = [
  { path: "/", element: <Root /> },
  { path: "/register", element: <Registration /> },
  { path: "/login", element: <Login /> },
  { path: "*", errorElement: <ErrorBoundary /> },
];
