import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <form className="card-body w-1/2 mx-auto my-2 bg-sky-300">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="text-center py-2">Already have a account ? Please <Link to='/login'><span className="text-red-500">Login</span></Link> </p>
      </form>
        </div>
    );
};

export default Register;