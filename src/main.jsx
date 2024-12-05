import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllMovies from "./Components/AllMovies";
import AddMovie from "./Components/AddMovie";
import MyFavourite from "./Components/MyFavourite";
import Error from "./Components/Error";
import AuthProvider from "./Components/Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/allmovies",
    element: <AllMovies></AllMovies>,
  },
  {
    path: "/addmovie",
    element: <AddMovie></AddMovie>,
  },
  {
    path: "/myfavourite",
    element: <MyFavourite></MyFavourite>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
