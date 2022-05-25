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
    localStorage.removeItem('accessToken');
    toast.info("this session has been log out", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      {/* <li>
        <Link to="/Purchase">Purchase</Link>
      </li> */}
      {user && (
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      )}

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
          <>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label
                  tabIndex="0"
                  className=" online btn btn-ghost btn-circle avatar"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <div className="w-10 ring rounded-full ">
                    <img alt="" src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="indicator">
                    <Link to="#">{user.displayName}</Link>
                    <span className="indicator-item badge text-white">
                      Required
                    </span>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
            <label
              tabIndex="1"
              htmlFor="dashboard-sidebar"
              className="swap swap-rotate lg:hidden"
            >
              <input type="checkbox" />

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
