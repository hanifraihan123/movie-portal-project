import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "./Footer";
import logo from '../assets/login.json';
import Lottie from "lottie-react";


const Login = () => {

  const {userLogin,googleLogIn,setLoading} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if(!regex.test(password)){
      toast.error("Password should be at least one uppercase, one lowercase, 6 or more character");
      return;
    }

    userLogin(email,password)
    .then(result=>{
     if(!result.user){
      toast.error('Invalid Email or Password')
      setLoading(false)
      return
     }
     else{
      toast.success('User Login Successfully')
      navigate('/')
     }
      
    })
    .catch(error=>{
      toast.error(error.message)
      setLoading(false)
    })
  }

  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(result=> {
      if(result.user){
        toast.success('User Login Successfully')
        navigate('/')
      }
    })
    .catch(error=> {
      toast.error(error.message)
    })
  }

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:flex flex-col lg:flex-row gap-4 bg-blue-100">
              <div className="flex-1 m-4">
                  <Lottie animationData={logo}></Lottie>
              </div>
              <form onSubmit={handleLogin} className="card-body bg-teal-200 m-4 flex-1">
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
          <button onClick={handleGoogleLogIn} className="btn btn-warning"><FaGoogle />Login With Google</button>
        </div>
            <p className="text-center py-2">Create an account ? Please <Link to='/register'><span className="text-red-500">Register</span></Link> </p>
      </form>
            </div>
      <Toaster
      position="top-center"
      reverseOrder={false}
      />
      <Footer></Footer>
        </div>
    );
};

export default Login;