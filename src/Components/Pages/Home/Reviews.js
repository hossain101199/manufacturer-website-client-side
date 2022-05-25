import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setreviews] = useState([]);
  const [isReload, setIsReload] = useState(false);
  console.log(reviews);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, [isReload]);
  return <div className="">all reviews {reviews.length}
  </div>;
};

export default Reviews;
