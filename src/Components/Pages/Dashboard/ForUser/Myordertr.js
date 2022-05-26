import React, { useEffect, useState } from "react";
import SetOrders from "../../../SharedComponents/Hooks/SetOrders";

const Myordertr = ({ Order, index }) => {
  const [isable, setisable] = useState(true);
  const [Orders, setOrders] = SetOrders();
  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = Orders.filter((Order) => Order._id !== id);
        setOrders(remaining);
      });
  };
  useEffect(() => {
    console.log(isable);
    if (Order.status === "unpaid") {
      setisable(true);
    } else {
      setisable(false);
    }
  }, [Order.status]);
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>{" "}
        <td className="max-w-md whitespace-pre-wrap">
          <img style={{ width: "50px" }} src={Order.img} alt="" />
          {Order.pname}
        </td>
        <td>{Order.quantity} unit </td>
        <td>{Order.status}</td>
        <td>
          <button type="button" className="btn">
            Update
          </button>
          {isable && (
            <label for="my-modal" className="btn modal-button">
              Cancel
            </label>
          )}
        </td>
      </tr>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            are you sure??
            <br />
            you want to cancel this order
          </h3>
          <p class="py-4">{Order.pname}</p>
          <p class="py-4">{Order.quantity} unit </p>
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

export default Myordertr;
