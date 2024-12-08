import Swal from "sweetalert2";


const FavouriteMovie = ({movie}) => {

    const {_id,poster,duration,genre,rating,release,summary,title} = movie;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/favouritemovies/${_id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your movie has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }

    return (
      <div className="card card-compact justify-center my-8 mx-auto bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="h-36 w-full object-cover" src={poster} alt="Shoes"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{duration}</p>
          <p>{genre}</p>
          <p>{rating}</p>
          <p>{release}</p>
          <p>{summary}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete Favourite</button>
          </div>
        </div>
      </div>
    );
};

export default FavouriteMovie;