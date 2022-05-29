import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ Prorduct }) => {
  const { img, _id, name, price, minimumunit, availableunit, description } =
    Prorduct;

  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/Purchase/${id}`);
  };
  return (
    <div className="mx-auto container card card-compact md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-title">price: $ {price} (per unit)</h3>
        <h4 className="card-title">minimum order quantity {minimumunit}</h4>
        <h4 className="card-title">available quantity {availableunit}</h4>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button onClick={() => navigateToPurchase(_id)} className="btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
