import React, { useEffect, useState } from "react";
import srar from "../../Image/star-solid.svg";

const ReviewCard = ({ review }) => {
  const [rating, setRating] = useState(<></>);
  useEffect(() => {
    if (review.rating === 1) {
      setRating(
        <>
          <img src={srar} alt="" className=" h-5 " />
        </>
      );
    }
    if (review.rating === 2) {
      setRating(
        <>
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
        </>
      );
    }
    if (review.rating === 3) {
      setRating(
        <>
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
        </>
      );
    }
    if (review.rating === 4) {
      setRating(
        <>
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
        </>
      );
    }
    if (review.rating === 5) {
      setRating(
        <>
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
          <img src={srar} alt="" className=" h-5" />
        </>
      );
    }
  }, [review.rating]);
  return (
    <div className=" container group hover:bg-sky-500 hover:ring-sky-500 card card-compact md:w-96 bg-base-100 shadow-xl my-9 ">
      <div className="card-body">
        <h2 className="card-title text-black ">{rating}</h2>
        <p className="group-hover:text-white">{review.describe}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
