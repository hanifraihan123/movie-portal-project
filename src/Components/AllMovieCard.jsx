

const AllMovieCard = ({movie}) => {

    const {_id,poster,duration,genre,rating,release,summary,title} = movie;

    return (
        <div className="card card-compact bg-lime-200 w-96 shadow-xl">
        <figure>
          <img
            src={poster}
            alt="Shoes"
            className="rounded-xl h-40 object-cover w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {title}</h2>
          <p>Genre: {genre}</p>
          <p>Duration: {duration}</p>
          <p>Rating: {rating}</p>
          <p>Release: {release}</p>
          <p>Summary: {summary}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    );
};

export default AllMovieCard;