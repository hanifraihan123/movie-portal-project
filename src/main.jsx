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
import PrivateRoute from "./Components/routes/PrivateRoute";
import MovieDetails from "./Components/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: ()=> fetch('http://localhost:5000/movies')
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
    element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>,
  },
  {
    path: "/myfavourite",
    element: <MyFavourite></MyFavourite>,
  },
  {
    path: "/moviedetails/:id",
    element: <MovieDetails></MovieDetails>,
    loader: ({params})=> fetch(`http://localhost:5000/movies/${params.id}`)
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
