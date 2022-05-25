import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [isReload, setIsReload] = useState(false);
  const [users, setUsers] = useState([]);
  const [user] = useAuthState(auth);
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
  const handleUpdateItems = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const linkedin = e.target.linkedin.value;
    const education = e.target.education.value;
    const address = e.target.address.value;
    const userInformation = {
      name,
      phone,
      linkedin,
      education,
      address,
    };
    // send data to the server
    fetch(`https://aitch-s-light.herokuapp.com/userInformation/${email}`, {
      method: "PUT",

      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(!isReload);
        e.target.reset();
        toast.success("stock updated successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  // --------------------------------------------------------------------------------------------------------------

  return (
    <div className=" container ">
      My Profile
      <div className="card glass w-auto">
        <figure>
          <img src={user?.photoURL} alt="car!" />
        </figure>
        <form onSubmit={handleUpdateItems} className="card-body">
          <div className="md:flex gap-x-8">
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                name="name"
                defaultValue={me?.name}
                type="name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                defaultValue={me?.email}
                readOnly
                type="Email"
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
                name="phone"
                defaultValue={me?.phone}
                type="number"
                className="input input-bordered w-full"
              />
            </div>
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">LinkedIn profile link</span>
              </label>
              <input
                name="linkedin"
                defaultValue={me?.linkedin}
                type="text"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <label className="label">
            <span className="label-text">Your Education level</span>
          </label>
          <input
            defaultValue={me?.education}
            name="education"
            type="text"
            className="input input-bordered"
          />
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
            <input type="submit" value="Save changes" className="btn"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
