import React from "react";
import SetOrders from "../../../SharedComponents/Hooks/SetOrders";

const Allorder = ({ product, index }) => {
  const [Orders, setOrders] = SetOrders();
  const handleDelete = (id) => {
    const url = `https://aitch-s-light.herokuapp.com/product/${id}`;
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
          <img style={{ width: "50px" }} src={product.img} alt="" />
          {product.name}
        </td>
        <td>{product.availableunit} unit </td>
        <td>
          <button type="button" className="btn m-1">
            Update
          </button>
          <label htmlFor={product._id} className="btn modal-button">
            Delete
          </label>
        </td>
      </tr>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={product._id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            for={product._id}
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            are you sure??
            <br />
            you want to Delete this product
          </h3>
          <p className="py-4">{product.name}</p>
          <p className="py-4">{product.availableunit} unit </p>
          <div
            className="modal-action"
            onClick={() => handleDelete(product._id)}
          >
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allorder;
