import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

  const {createUser,googleLogIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = {name,email}

    createUser(email,password)
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
      console.log('error', error.message)
    })
  }

  const handleGoogleLogIn = () => {
    googleLogIn()
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
      console.log(error.messagee)
    })
  }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister} className="card-body w-1/2 mx-auto my-2 bg-sky-300">
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
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-2 space-y-2">
          <button className="btn btn-primary">Register</button>
          <button onClick={handleGoogleLogIn} className="btn btn-warning">Login With Google</button>
        </div>
        <p className="text-center py-2">Already have a account ? Please <Link to='/login'><span className="text-red-500">Login</span></Link> </p>
      </form>
        </div>
    );
};

export default Register;