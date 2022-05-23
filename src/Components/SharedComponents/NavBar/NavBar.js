import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  // ---------------------------------------------------------
  useEffect(() => {
    if (loading) {
      <Loading></Loading>;
    }
  }, [loading]);
  // ---------------------------------------------------------
  useEffect(() => {
    if (error) {
      toast.error(error?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);
  const menuItems = (
    <>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/Purchase">Purchase</Link>
      </li>
      <li>
        <Link to="/Dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/Blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/MyPortfolio">MyPortfolio</Link>
      </li>
      {!user && (
        <li>
          <Link to="/Login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-transparent">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Aitch's Light
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        {user && (
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="#">{user.displayName}</Link>
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
