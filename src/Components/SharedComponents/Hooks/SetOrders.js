import { useEffect, useState } from "react";

const SetOrders = () => {
  const [isReload, setIsReload] = useState(false);
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsReload(!isReload);
      });
  }, [isReload]);
  return [Orders, setOrders];
};

export default SetOrders;
