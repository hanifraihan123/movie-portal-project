import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, poster, duration, genre, rating, release, summary, title } =
    movie;

  return (
    <>
    <div className="card bg-orange-200 w-96 shadow-xl">
      <figure>
        <img className="h-36 w-full object-cover" src={poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Movie Name/Title: {title}</h2>
        <p>Genre: {genre}</p>
        <p>Duration: {duration}</p>
        <p>Release: {release}</p>
        <p>Rating: {rating}</p>
        <p>Summary: {summary}</p>
        <div className="card-actions justify-center">
          <Link to={`/moviedetails/${_id}`}>
            <div className="badge bg-lime-200 badge-outline">See Details</div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default MovieCard;
