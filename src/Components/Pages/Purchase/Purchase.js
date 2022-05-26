import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);

  const { productID } = useParams();

  const [selectedproduct, setselectedproduct] = useState({});
  const [reload, setreload] = useState(false);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productID}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setselectedproduct(data));
  }, [reload, productID]);
  return (
    <div>
      Purchase
      <div class="mx-auto container card card-compact md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={selectedproduct.img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{selectedproduct.name}</h2>
          <h3 class="card-title">
            price: $ {selectedproduct.price} (per unit)
          </h3>
          <h4 class="card-title">
            minimum order quantity {selectedproduct.minimumunit}
          </h4>
          <h4 class="card-title">
            available quantity {selectedproduct.availableunit}
          </h4>
          <p>{selectedproduct.description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
