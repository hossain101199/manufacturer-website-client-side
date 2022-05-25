import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("https://aitch-s-light.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, [reviews]);
  return (
    <div className=" container mx-auto ">
      <div class="divider">Customer Reviews</div>
      <div className=" md:flex gap-14 justify-center ">
        {reviews.map((review, index) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
