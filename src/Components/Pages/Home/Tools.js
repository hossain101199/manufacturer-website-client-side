import React, { useEffect, useState } from "react";
import HomeItem from "./HomeItem";

const Tools = () => {
  const [Products, setProducts] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [page, setpage] = useState(0);
  const [pagesize, setpagesize] = useState(3);
  useEffect(() => {
    fetch(
      `https://aitch-s-light.herokuapp.com/products?page=${page}&size=${pagesize}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, pagesize]);

  useEffect(() => {
    fetch("https://aitch-s-light.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.products;
        const pages = Math.ceil(count / pagesize);
        setpageCount(pages);
      });
  }, [pagesize]);
  return (
    <div className=" container mx-auto ">
      <div className="divider mt-6 card-title">Tools</div>
      <div className="grid md:grid-cols-3 gap-4">
        {Products.map((Product, index) => (
          <HomeItem key={index} Prorduct={Product}></HomeItem>
        ))}
      </div>
      <div className="btn-group justify-center m-10 mx-auto">
        {[...Array(pageCount).keys()].map((number) => (
          <input
            type="radio"
            name="options"
            data-title={number + 1}
            className="btn"
            key={number}
            onClick={() => setpage(number)}
          />
        ))}
        <span> __ </span>
        <ul>
          <select onChange={(e) => setpagesize(e.target.value)} className="btn">
            <option value="3" defaultValue>
              3
            </option>
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </ul>
      </div>
    </div>
  );
};

export default Tools;
