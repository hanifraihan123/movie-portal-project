import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import FavouriteMovie from "./FavouriteMovie";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MyFavourite = () => {

  const {user} = useContext(AuthContext);
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetch(`https://movie-portal-server-drab.vercel.app/favouritemovies/${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data)
    })
  },[])

  return (
    <div className="bg-emerald-200">  
       <Navbar></Navbar>
       <h3 className="font-bold text-2xl mt-6 text-center">Your Favourite Movie List Here</h3>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-6 mx-auto my-4">
      {
        movies.map(movie=><FavouriteMovie key={movie._id} movie={movie} movies={movies} setMovies={setMovies}></FavouriteMovie>)
      }
       </div>
       <Footer></Footer>
    </div>
  );
};

export default MyFavourite;
