import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";

const MovieDetails = () => {

    const movie = useLoaderData();
    
    const {_id,poster,duration,genre,rating,release,summary,title} = movie;
    const navigate = useNavigate();

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
                fetch(`http://localhost:5000/movies/${_id}`,{
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
                          navigate('/allmovies')
                    }
                })
                }
              });
           }
           const handleFavourite = email => {
              fetch('http://localhost:5000/favouritemovies',{
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify()
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
              })
           }

    return (
        <div className='bg-cyan-200'>
        <Navbar></Navbar>
       <div className='my-6'>
       <div className="card bg-pink-200 mx-auto w-1/3">
  <figure>
    <img className='h-48 w-full object-cover rounded-xl'
      src={poster}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{genre}</p>
    <p>{release}</p>
    <p>{duration}</p>
    <p>{rating}</p>
    <p>{summary}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary"><MdDeleteForever /> Delete Movie</button>
      <button onClick={handleFavourite} className="btn btn-primary"><FaRegHeart /> Add To Favourite</button>
    </div>
    <div className='flex justify-center'>
      <Link to="/allmovies"><button className='btn btn-info'><FaBorderAll /> See All Movies</button></Link>
    </div>
  </div>
</div>
</div>
<Footer></Footer>
</div>
    );
};

export default MovieDetails;