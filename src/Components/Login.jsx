import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

  const {userLogin,googleLogIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email,password)
    .then(result=>{
      console.log(result.user)
      Swal.fire({
        title: 'Success !',
        text: 'User Created Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate('/')
    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(result=> {
      console.log(result.user)
      Swal.fire({
        title: 'Success !',
        text: 'User Created Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      navigate('/')
      
    })
    .catch(error=> {
      console.log(error.message)
    })
  }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleLogin} className="card-body w-1/2 mx-auto bg-teal-200 my-4">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2 space-y-2">
          <button className="btn btn-primary">Login</button>
          <button onClick={handleGoogleLogIn} className="btn btn-warning">Login With Google</button>
        </div>
            <p className="text-center py-2">Create an account ? Please <Link to='/register'><span className="text-red-500">Register</span></Link> </p>
      </form>
        </div>
    );
};

export default Login;