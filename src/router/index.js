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
  { path: "/react-fund/", index: "index", element: <Home /> },
  { path: "/react-fund/about", element: <About /> },
  { path: "/react-fund/posts", element: <Posts /> },
  { path: "/react-fund/posts/:id", element: <PostIdPage /> },
  { path: "/react-fund/dogs", element: <RandomDog /> },
  { path: "*", element: <ErrorBoundary /> },
];

export const publicRoutes = [
  { path: "/react-fund/", element: <Root /> },
  { path: "/react-fund/register", element: <Registration /> },
  { path: "/react-fund/login", element: <Login /> },
  { path: "*", errorElement: <ErrorBoundary /> },
];
