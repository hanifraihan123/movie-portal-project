import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from './Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const MovieDetails = () => {

    const movie = useLoaderData();

    const {user} = useContext(AuthContext)

    const email = user?.email;
    
    const {_id,poster,duration,genre,rating,release,summary,title} = movie;
    const navigate = useNavigate();

    const favouriteMovie = {email,poster,duration,genre,rating,release,summary,title}

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
                fetch(`https://movie-portal-server-drab.vercel.app/movies/${_id}`,{
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
           const handleFavourite = () => {
              fetch('https://movie-portal-server-drab.vercel.app/favouritemovies',{
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(favouriteMovie)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.insertedId){
                  Swal.fire({
                    title: "Success",
                    text: "Movie added in favourite list",
                    icon: "success"
                  });
                  navigate('/myfavourite')
                }
              })
           }

    return (
        <div className='bg-cyan-200'>
       <Helmet>
        <title>Movie Portal || Details</title>
      </Helmet>
        <Navbar></Navbar>
       <div className='pt-20'>
       <div className="card bg-pink-200 mx-auto w-1/2 lg:w-1/3">
  <figure>
    <img className='h-48 w-full object-cover rounded-xl'
      src={poster}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Genre: {genre}</p>
    <p>Release: {release}</p>
    <p>Duration: {duration} min</p>
    <p>Rating: {rating}</p>
    <p>Summary: {summary}</p>
    <div className="card-actions justify-center">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary"><MdDeleteForever /> Delete Movie</button>
      <button onClick={handleFavourite} className="btn btn-primary"><FaRegHeart /> Add To Favourite</button>
    </div>
  </div>
</div>
</div>
<Footer></Footer>
</div>
    );
};

export default MovieDetails;