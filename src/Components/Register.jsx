import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "./Footer";
import logo from '../assets/register.json';
import Lottie from "lottie-react";


const Register = () => {

  const {createUser,googleLogIn,updateUserProfile,setLoading} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    if(!regex.test(password)){
      toast.error("Password should be at least one uppercase, one lowercase, 6 or more character");
      return;
    }

    createUser(email,password)
    .then(result=>{
      setLoading(false)
      if(!result.user){
        toast.error('Invalid Name,Email or Password')
      }
      else{
        updateUserProfile({displayName:name, photoURL:photo})
        .then(()=>{
          toast.success('User Login Successfully')
          navigate('/')
        })
      }
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }

  const handleGoogleLogIn = () => {
    googleLogIn()
    .then(result=>{
      if(result.user){
        toast.success('User Login Successfully')
        navigate('/')
      }
    })
    .catch(error=>{
      toast.error(error.messagee)
    })
  }

    return (
        <div>
            <Navbar></Navbar>
           <div className="lg:flex gap-4 bg-orange-100">
            <div className="flex-1 m-2">
              <Lottie animationData={logo}></Lottie>
            </div>
            <form onSubmit={handleRegister} className="card-body m-2 flex-1 bg-sky-300">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-2 space-y-2">
          <button className="btn btn-primary">Register</button>
          <button onClick={handleGoogleLogIn} className="btn btn-warning"><FaGoogle />Login With Google</button>
        </div>
        <p className="text-center py-2">Already have a account ? Please <Link to='/login'><span className="text-red-500">Login</span></Link> </p>
      </form>
           </div>
      <Toaster />
      <Footer></Footer>
        </div>
    );
};

export default Register;