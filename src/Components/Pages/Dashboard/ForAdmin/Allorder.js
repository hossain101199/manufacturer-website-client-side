import React, { useEffect, useState } from "react";
import SetOrders from "../../../SharedComponents/Hooks/SetOrders";

const Allorder = ({ Order, index }) => {
  const [Orders, setOrders] = SetOrders();
  const handleDelete = (id) => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = Orders.filter((Order) => Order._id !== id);
        setOrders(remaining);
      });
  };

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>{" "}
        <td className="max-w-md whitespace-pre-wrap">
          <img style={{ width: "50px" }} src={Order.img} alt="" />
          {Order.name}
        </td>
        <td>{Order.availableunit} unit </td>
        <td>
          <button type="button" className="btn">
            Update
          </button>
          <label for="my-modal" className="btn modal-button">
            Delete
          </label>
        </td>
      </tr>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            are you sure??
            <br />
            you want to Delete this order
          </h3>
          <p class="py-4">{Order.name}</p>
          <p class="py-4">{Order.availableunit} unit </p>
          <div class="modal-action" onClick={() => handleDelete(Order._id)}>
            <label for="my-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allorder;
