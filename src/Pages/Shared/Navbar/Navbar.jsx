import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isSmallDeviceNavbarOpen, setIsSmallDeviceNavbarOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/all-toys"}>All-Toys</Link>
      </li>

      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to={"/my-toys"}>My-Toys</Link>
          </li>
          <li>
            <Link to={"/add-a-toy"}>Add-A-Toy</Link>
          </li>
          <li>
            <img className="btn" src={user.photoURL} alt="" />
          </li>
          <li>
            <button className="btn btn-ghost" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar sticky z-10 top-0 bg-gradient-to-r from-purple-500 to-pink-500  max-w-screen-xl lg:justify-between font-bold text-3xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-white"
              onClick={() =>
                setIsSmallDeviceNavbarOpen(!isSmallDeviceNavbarOpen)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`${
                isSmallDeviceNavbarOpen ? "block" : "hidden"
              } menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-gray-200">
            <span>
              VroomVroom<span className="text-red-600">Toys</span>
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
