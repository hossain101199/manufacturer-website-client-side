import React from "react";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../SharedComponents/Hooks/verifyAdmin";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className=" container mx-auto ">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <div className="grid m-3 justify-items-end lg:hidden">
            <label
              tabIndex="1"
              htmlFor="dashboard-sidebar"
              className="swap swap-rotate"
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
          </div>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li>
                  <Link to="/Dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/Dashboard/AddReview">Add Review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/Dashboard">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="/Dashboard/ManageProducts">Manage Products</Link>
                </li>
                <li>
                  <Link to="/Dashboard/AddProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/Dashboard/MakeAdmin">All users</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/Dashboard/MyProfile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
