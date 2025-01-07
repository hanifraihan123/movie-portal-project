import { Link } from "react-router-dom";


const AllMovieCard = ({movie}) => {

    const {_id,poster,duration,genre,title} = movie;

    return (
        <div className="card card-compact bg-lime-200 shadow-xl">
        <figure>
          <img
            src={poster}
            alt="Shoes"
            className="rounded-xl h-40 object-cover w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {title}</h2>
          <p>Genre: {genre}</p>
          <p>Duration: {duration} min</p>
          <div className="card-actions justify-center">
            <Link to={`/moviedetails/${_id}`}><button className="btn btn-primary">See Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default AllMovieCard;