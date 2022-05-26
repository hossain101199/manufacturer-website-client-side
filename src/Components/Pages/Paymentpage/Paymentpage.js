import React from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import Loading from "../../SharedComponents/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
import SetOrders from "../../SharedComponents/Hooks/SetOrders";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Paymentpage = () => {
  const { orderID } = useParams();

  const url = `https://aitch-s-light.herokuapp.com/orders/${orderID}`;

  const { data: order, isLoading } = useQuery(["booking", orderID], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(order);
  return (
    <div className=" container mx-auto ">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <h2 class="card-title">{order.pname}</h2>
          <p>Your ordered quantity: {order.quantity} Unit</p>
          <p>Each unit price: {order.price} Unit</p>
          <p>
            Please pay: $ {parseInt(order.quantity) * parseInt(order.price)} $
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          {/* <Elements>
              <CheckoutForm order={order} />
            </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Paymentpage;
