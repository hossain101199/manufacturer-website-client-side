import React from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import Loading from "../../SharedComponents/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e"
);

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

  return (
    <div className=" container mx-auto ">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">{order.pname}</h2>
          <p>Your ordered quantity: {order.quantity} Unit</p>
          <p>Each unit price: $ {order.price}</p>
          <p>
            Please pay: $ {parseInt(order.quantity) * parseInt(order.price)}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
      <div className="divider mt-6"></div>
    </div>
  );
};

export default Paymentpage;
