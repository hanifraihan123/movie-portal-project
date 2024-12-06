import MovieCard from "./MovieCard";


const Featured = ({movies}) => {


    return (
        <div>
            <h3 className="font-bold text-2xl text-center mt-2 text-purple-500">Featured Movies Section</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 my-6">
            {
                movies.map(movie=><MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
         </div>
        </div>
    );
};

export default Featured;