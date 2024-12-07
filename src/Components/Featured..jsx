import MovieCard from "./MovieCard";


const Featured = ({movies}) => {

    const newMovies = movies.slice(0,6)

    return (
        <div>
            <h3 className="font-bold text-2xl text-center mt-2 text-purple-500">Featured Movies Section</h3>
            <p className="text-sm text-center py-2 text-slate-500">When The Devil Wears Prada came out in 2006, the movie shone a light on the cut-throat world of fashion and over the years has become a pop culture cornerstone. <br /> Nearly 20 years on from the film, a musical adaptation has just opened at the Dominion Theatre in London's West End. <br /> The production features music written by Sir Elton John and stars US singer and actress Vanessa Williams who is making her West End return after her last London <br /> show got cut short by the first Covid lockdown in 2020.</p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mx-6 mx-4 my-6">
            {
                newMovies.map(movie=><MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
         </div>
        </div>
    );
};

export default Featured;