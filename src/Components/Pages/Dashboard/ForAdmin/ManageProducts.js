import React from "react";
import SETAllproduct from "../../../SharedComponents/Hooks/SETAllproduct";
import Allorder from "./Allorder";

const ManageProducts = () => {
  const [Allproduct] = SETAllproduct();
  return (
    <div className=" container ">
      My Orders
      <table className=" flex container w-100 table table-hover table-responsive">
        <thead className="container">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product name</th>
            <th scope="col">available product</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Allproduct.map((Order, index) => (
            <Allorder key={Order.id} Order={Order} index={index}></Allorder>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
