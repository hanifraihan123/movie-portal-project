import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AllMovieCard from "./AllMovieCard";


const AllMovies = () => {

    const movies = useLoaderData();

    return (
        <div className="bg-fuchsia-200">
            <Navbar></Navbar>
            <h3 className="text-center text-xl font-bold text-orange-500 pt-4">All Movies Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 my-4">
            {
                 movies.map(movie=><AllMovieCard key={movie._id} movie={movie}></AllMovieCard>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllMovies;