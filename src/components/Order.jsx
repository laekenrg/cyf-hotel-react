import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [order, setOrder] = useState(0);
  function orderFoot() {
    setOrder(order + 1);
  }
  return (
    <li>
      {orderType}: {order} <RestaurantButton order={orderFoot} />
    </li>
  );
};
export default Order;
