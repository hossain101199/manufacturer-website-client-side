import { useEffect, useState } from "react";

const SETAllproduct = () => {
  const [isReload, setIsReload] = useState(false);
  const [Allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllproduct(data);
        setIsReload(!isReload);
      });
  }, [isReload]);
  return [Allproduct, setAllproduct];
};

export default SETAllproduct;
