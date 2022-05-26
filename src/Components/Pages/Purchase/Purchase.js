import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [isReload] = useState(false);
  const [users, setUsers] = useState([]);
  const { productID } = useParams();
  const [selectedproduct, setselectedproduct] = useState({});
  const [error, seterror] = useState("");
  const [isable, setisable] = useState(true);

  useEffect(() => {
    const url = `https://aitch-s-light.herokuapp.com/product/${productID}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setselectedproduct(data));
  }, [isReload, productID]);

  // --------------------------------------------------------------------------------------------------------------
  const [me] = users?.filter((mine) => mine.email === user?.email);
  useEffect(() => {
    fetch("https://aitch-s-light.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [isReload]);

  // --------------------------------------------------------------------------------------------------------------
  const handleQuantity = (e) => {
    if (parseInt(e.target.value) < parseInt(selectedproduct.minimumunit)) {
      seterror(`minimum order quantity is ${selectedproduct.minimumunit}`);
      setisable(false);
      return;
    }
    if (parseInt(e.target.value) > parseInt(selectedproduct.availableunit)) {
      seterror(`maximum order quantity is ${selectedproduct.availableunit}`);
      setisable(false);
      return;
    }
    seterror("");
    setisable(true);
  };
  // ----------------------------------------------------------------------------------

  const handleADDorders = (e) => {
    const img = selectedproduct.img;
    const price = selectedproduct.price;
    const pname = selectedproduct.name;
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const status = "unpaid";
    const orders = {
      img,
      pname,
      name,
      quantity,
      phone,
      email,
      address,
      status,
      price,
    };
    e.preventDefault();
    fetch("https://aitch-s-light.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Order added successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
      });
  };

  return (
    <div className=" container mx-auto ">
      Purchase
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure className="basis-1/2">
          <img src={selectedproduct.img} alt="Album" />
        </figure>
        <div className="basis-1/2 card-body">
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
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl w-auto">
        <form onSubmit={handleADDorders} className="card-body">
          <div className="md:flex gap-x-8">
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                defaultValue={me?.name}
                name="name"
                type="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">quantity</span>
                {error && (
                  <span className=" text-red-600 label-text">{error}</span>
                )}
              </label>

              <input
                onChange={handleQuantity}
                defaultValue={selectedproduct.minimumunit}
                name="quantity"
                type="number"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="md:flex gap-x-8">
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                defaultValue={me?.phone}
                name="phone"
                type="number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={me?.email}
                name="email"
                readOnly
                type="Email"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            defaultValue={me?.address}
            name="address"
            type="text"
            className="input input-bordered"
          />

          <div className="card-actions justify-end">
            <input
              type="submit"
              value="Purchase"
              className={!isable ? "btn btn-disabled" : "btn"}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
