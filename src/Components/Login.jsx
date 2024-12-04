import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <form className="card-body w-1/2 mx-auto bg-teal-200 my-4">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            <p className="text-center py-2">Create an account ? Please <Link to='/register'><span className="text-red-500">Register</span></Link> </p>
      </form>
        </div>
    );
};

export default Login;