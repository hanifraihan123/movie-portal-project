import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import toast from "react-hot-toast";

const MyFavourite = () => {

  const {user} = useContext(AuthContext);
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/favouritemovies/${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data)
    })
  },[])

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
              fetch(`http://localhost:3000/favouritemovies/${_id}`,{
                  method: 'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                  if(data.deletedCount > 0){
                      // Swal.fire({
                      //     title: "Deleted!",
                      //     text: "Your movie has been deleted.",
                      //     icon: "success"
                      //   });
                      toast.success('Movie deleted from favourite list')
                      const remaining = movies.filter(mov=>mov._id !== _id)
                      setMovies(remaining)
                  }
              })
              }
            });
      }

  return (
    <div className="bg-emerald-200">  
       <Navbar></Navbar>
       <h3 className="font-bold text-2xl pt-24 text-center">Your Favourite Movie List Here</h3>
       <div className="mx-auto my-4">
       <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Rating</th>
        <th>Duration</th>
        <th>Release</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        movies.map((movie,index)=><tr key={movie._id} movie={movie}>
          <th>{index+1}</th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={movie.poster}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td>
            {movie.title}
          </td>
          <td>{movie.genre}</td>
          <td>{movie.rating}</td>
          <td>{movie.duration}</td>
          <td>{movie.release}</td>
          <th>
          <button onClick={()=>handleDelete(movie._id)} className="btn btn-primary"><MdDeleteForever /> Delete Favourite</button>
          </th>
        </tr>)
      }
    </tbody>
  </table>
</div>
       </div>
       <Footer></Footer>
    </div>
  );
};

export default MyFavourite;
