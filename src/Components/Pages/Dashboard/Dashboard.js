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
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li>
                  <Link to="/Dashboard">MyOrders</Link>
                </li>
                <li>
                  <Link to="/Dashboard/AddReview">AddReview</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/Dashboard">ManageAllOrders</Link>
                </li>
                <li>
                  <Link to="/Dashboard/ManageProducts">ManageProducts</Link>
                </li>
                <li>
                  <Link to="/Dashboard/AddProduct">AddProduct</Link>
                </li>
                <li>
                  <Link to="/Dashboard/MakeAdmin">All users</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/Dashboard/MyProfile">MyProfile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
