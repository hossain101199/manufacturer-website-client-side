import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import SetOrders from "../../../SharedComponents/Hooks/SetOrders";
import Myordertr from "./Myordertr";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [Orders] = SetOrders();
  const myOrders = Orders.filter((myOrders) => myOrders.email === user?.email);
  // ----------------------------------------------------------
  return (
    <div className=" container ">
      <div className="divider mt-6 card-title">My Orders</div>

      <table className=" flex container w-100 table table-hover table-responsive">
        <thead className="container">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((Order, index) => (
            <Myordertr key={Order.id} Order={Order} index={index}></Myordertr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
