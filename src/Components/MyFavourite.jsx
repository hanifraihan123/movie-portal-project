import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import FavouriteMovie from "./FavouriteMovie";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MyFavourite = () => {

  const {user} = useContext(AuthContext);
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/favouritemovies/${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data)
    })
  },[])

  return (
    <div className="bg-emerald-200">  
       <Navbar></Navbar>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 my-4">
      {
        movies.map(movie=><FavouriteMovie key={movie._id} movie={movie}></FavouriteMovie>)
      }
       </div>
       <Footer></Footer>
    </div>
  );
};

export default MyFavourite;
