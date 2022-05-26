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
    <div class="mx-auto container card card-compact md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h3 class="card-title">price: $ {price} (per unit)</h3>
        <h4 class="card-title">minimum order quantity {minimumunit}</h4>
        <h4 class="card-title">available quantity {availableunit}</h4>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button
            onClick={() => navigateToPurchase(_id)}
            class="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
