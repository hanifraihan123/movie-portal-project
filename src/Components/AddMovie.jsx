import Footer from "./Footer";
import Navbar from "./Navbar";


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
          <input type="text" name='poster' placeholder="Enter Poster Name" className="input input-bordered" required />
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
          <input type="text" name='genre' placeholder="Genre" className="input input-bordered" required />
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
          <input type="number" name='release' placeholder="Enter Release Year" className="input input-bordered" required />
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