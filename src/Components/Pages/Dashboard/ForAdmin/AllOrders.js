import React, { useEffect, useState } from "react";
import SetOrders from "../../../SharedComponents/Hooks/SetOrders";
const AllOrders = ({ Order, index }) => {
  console.log(Order);
  const [isable, setisable] = useState(true);
  const [Orders, setOrders] = SetOrders();
  const handleDelete = (id) => {
    const url = `https://aitch-s-light.herokuapp.com/orders/${id}`;
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
  }, [Order.status, isable]);
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>{" "}
        <td className="max-w-md whitespace-pre-wrap">
          <img style={{ width: "50px" }} src={Order.img} alt="" />
          {Order.pname}
        </td>
        <td>{Order.email}</td>
        <td>{Order.quantity} unit </td>
        <td>{Order.status}</td>
        <td>
          {isable && (
            <>
              <button type="button" className="btn m-1">
                Update
              </button>

              <label htmlFor={Order._id} className="btn modal-button">
                Cancel
              </label>
            </>
          )}
        </td>
      </tr>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={Order._id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            are you sure??
            <br />
            you want to cancel this order
          </h3>
          <p className="py-4">{Order.pname}</p>
          <p className="py-4">{Order.quantity} unit </p>
          <div className="modal-action" onClick={() => handleDelete(Order._id)}>
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
