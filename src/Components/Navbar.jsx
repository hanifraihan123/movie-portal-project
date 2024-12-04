import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar" style={{ backgroundImage: `url("https://i.ibb.co.com/VTZGp5D/cool-background.png")` }}>
        <div className="navbar-start">
          <div>
            <h3 className="font-bold text-xl">Movie Portal</h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 px-1">
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/allmovies'><li>All Movies</li></NavLink>
            <NavLink to='/addmovie'><li>Add Movie</li></NavLink>
            <NavLink to='/myfavourite'><li>My Favorites</li></NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
        <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
          <Link to='/login'><button className="btn btn-secondary text-white">Login</button></Link>
        </div>
      </div>
    );
};

export default Navbar;