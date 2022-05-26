import { useEffect, useState } from "react";

const SetOrders = () => {
  const [isReload, setIsReload] = useState(false);
  const [Orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(" https://aitch-s-light.herokuapp.com/orders", {
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
