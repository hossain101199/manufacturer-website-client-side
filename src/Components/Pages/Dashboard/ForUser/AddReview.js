import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const [describe, setdescribe] = useState("");
  const [error, seterror] = useState("");
  const Ruser = user.email;
  console.log(user);
  const ratings = (e) => {
    setRating(e);
    seterror("");
  };
  const handledescribe = (e) => {
    var describe = e.target.value;
    return setdescribe(describe);
  };
  const handleADDreview = (e) => {
    const review = { Ruser, rating, describe };
    console.log();
    e.preventDefault();
    if (rating === 0) {
      return seterror("you have to select at least one star");
    } else {
      fetch("https://aitch-s-light.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("review added successfully!", {
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
    }
  };

  return (
    <div>
      Add A Review
      <div className="card glass w-auto">
        <form onSubmit={handleADDreview} className="card-body">
          <div className="md:flex gap-x-8">
            <div className="basis-1/2">
              <div className="rating">
                <input
                  onClick={() => ratings(1)}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  onClick={() => ratings(2)}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  onClick={() => ratings(3)}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  onClick={() => ratings(4)}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  onClick={() => ratings(5)}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              {error && <p className=" text-red-600 ">{error}</p>}
            </div>
            <div className="basis-1/2"></div>
          </div>
          <textarea
            onChange={handledescribe}
            name="describe"
            className="textarea textarea-bordered"
            placeholder="describe your experience"
            required
          ></textarea>
          <div className="card-actions justify-end">
            <input type="submit" value="Add Review" className="btn"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
