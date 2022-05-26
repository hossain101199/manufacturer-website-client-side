import React from "react";
import SetOrders from "../../../SharedComponents/Hooks/SetOrders";
import AllOrders from "./AllOrders";

const ManageAllOrders = () => {
  const [Orders] = SetOrders();
  return (
    <div className=" container ">
      All Orders
      <table className=" flex container w-100 table table-hover table-responsive">
        <thead className="container">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">User</th>
            <th scope="col">Order Quantity</th>
            <th scope="col">Status</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((Order, index) => (
            <AllOrders key={Order.id} Order={Order} index={index}></AllOrders>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;
