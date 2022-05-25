import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import NavBar from "./Components/SharedComponents/NavBar/NavBar";
import Footer from "./Components/SharedComponents/Footer/Footer";
import Purchase from "./Components/Pages/Purchase/Purchase";
import RequireAuth from "./Components/SharedComponents/Require/RequireAuth";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyOrders from "./Components/Pages/Dashboard/ForUser/MyOrders";
import AddReview from "./Components/Pages/Dashboard/ForUser/AddReview";
import MyProfile from "./Components/Pages/Dashboard/MyProfile";
import ManageAllOrders from "./Components/Pages/Dashboard/ForAdmin/ManageAllOrders";
import RequireAdmin from "./Components/SharedComponents/Require/RequireAdmin";
import AddProduct from "./Components/Pages/Dashboard/ForAdmin/AddProduct";
import MakeAdmin from "./Components/Pages/Dashboard/ForAdmin/MakeAdmin";
import ManageProducts from "./Components/Pages/Dashboard/ForAdmin/ManageProducts";
import Blogs from "./Components/Pages/Blogs/Blogs";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import Pagenotfound from "./Components/Pages/Pagenotfound/Pagenotfound";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "./Components/SharedComponents/Hooks/verifyAdmin";
import auth from "./firebase.init";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route
          path="Purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="Dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {!admin && <Route index element={<MyOrders />}></Route>}
          {admin && (
            <Route
              index
              element={
                <RequireAdmin>
                  <ManageAllOrders />
                </RequireAdmin>
              }
            ></Route>
          )}
          {!admin && <Route path="AddReview" element={<AddReview />}></Route>}
          {!admin && <Route path="MyProfile" element={<MyProfile />}></Route>}
          <Route
            path="AddProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="MakeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="ManageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="Blogs" element={<Blogs />}></Route>
        <Route path="MyPortfolio" element={<MyPortfolio />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
