import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user,userLogout } = useContext(AuthContext);

  const handleLogout = () => {
      userLogout()
      .then(()=>{
        console.log('User signout successfully')
      })
      .catch(error=>{
        console.log('Error', error)
      })
  }

  return (
    <div
      className="navbar"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/VTZGp5D/cool-background.png")`,
      }}
    >
      <div className="navbar-start">
        <div className="flex gap-2">
          <img className="h-8 w-8 rounded-full" src="https://i.ibb.co.com/8K2SHKC/images-1.jpg" alt="" />
          <h3 className="font-bold text-xl">Movie Portal</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/allmovies">
            <li>All Movies</li>
          </NavLink>
          <NavLink to="/addmovie">
            <li>Add Movie</li>
          </NavLink>
          <NavLink to="/myfavourite">
            <li>My Favorites</li>
          </NavLink>
          <NavLink to="/contactus">
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        {
          user? <div className="flex gap-2 tooltip tooltip-left items-center" data-tip={user?.displayName}><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /> <button onClick={handleLogout} className="btn btn-secondary">Log Out</button></div> : <>
          <Link to="/login">
          <button className="btn btn-secondary text-white">Login</button>
        </Link>
        <Link to="/register"><button className="btn btn-secondary text-white">Register</button></Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
