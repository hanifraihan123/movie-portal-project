import Swal from "sweetalert2";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Rating } from 'react-simple-star-rating'


const AddMovie = () => {

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const release = form.release.value;
        const rating = form.rating.value;
        const summary = form.summary.value;

        const newMovie = {poster,title,genre,duration,release,rating,summary}
        console.log(newMovie)
        
        fetch('http://localhost:5000/movies',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newMovie)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: 'Success !',
              text: 'Movie Added Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit} className="card-body w-full">
        <div className="flex gap-4">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Movie Poster</span>
          </label>
          <input type="url" name='poster' placeholder="Enter Poster Name" className="input input-bordered" required />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Movie Title</span>
          </label>
          <input type="text" name='title' placeholder="Enter Title Name" className="input input-bordered" required />
        </div>
        </div>
        <div className="flex gap-4">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
              <select name="genre" class="datefield year">
                  <option value="">Genre</option>
                    <option value="Action">Action</option>
                    <option value="Funny">Funny</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Horror">Horror</option>
                    <option value="Thriller">Thriller</option>
              </select>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Duration</span>
          </label>
          <input type="number" name='duration' placeholder="Duration Time" className="input input-bordered" required />
        </div>
        </div>
        <div className="flex gap-4">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
         <select name="release" class="datefield year">
            <option value="">Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
          </select>
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" name='rating' placeholder="Enter Rating Number" className="input input-bordered" required />
        </div>
        </div>
        <label className="label">
            <span className="label-text">Summary</span>
          </label>
        <textarea className="textarea textarea-accent" name='summary' placeholder="Summary"></textarea>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Movie</button>
        </div>
      </form>
      <Footer></Footer>
        </div>
    );
};

export default AddMovie;