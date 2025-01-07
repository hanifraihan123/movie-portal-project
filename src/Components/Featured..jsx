import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { FaBorderAll } from "react-icons/fa";

const Featured = ({movies}) => {

    const newMovies = movies.slice(0,8)

    return (
        <div>
            <h3 className="font-bold text-2xl text-center mt-2 text-purple-500">Featured Movies Section</h3>
            <p className="text-sm text-center py-2 text-slate-500">When The Devil Wears Prada came out in 2006, the movie shone a light on the cut-throat world of fashion and  <br /> over the years has become a pop culture cornerstone. Nearly 20 years on from the film, a musical adaptation has just <br /> opened at the Dominion Theatre in London's West End. The production features music written by Sir Elton John <br /> and stars US singer and actress Vanessa Williams who is making her West End return after her last London <br /> show got cut short by the first Covid lockdown in 2020.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto lg:mx-6 px-4 my-6">
            {
                newMovies.map(movie=><MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
         </div>
         <div className="flex justify-center pb-6">
          <Link to="/allmovies">
            <button className="btn btn-info">
              <FaBorderAll /> See All Movies
            </button>
          </Link>
        </div>
        </div>
    );
};

export default Featured;