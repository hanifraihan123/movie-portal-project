import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {

    const {_id,poster,duration,genre,rating,release,summary,title} = movie;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="h-36 w-full object-cover"
            src={poster}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{genre}</p>
          <p>{duration}</p>
          <p>{release}</p>
          <p>{rating}</p>
          <p>{summary}</p>
          <div className="card-actions justify-center">
            <Link to={`/moviedetails/${_id}`}><div className="badge bg-lime-200 badge-outline">See Details</div></Link>
          </div>
        </div>
      </div>
    );
};

export default MovieCard;