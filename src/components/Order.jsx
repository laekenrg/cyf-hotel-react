import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType, link }) => {
  const [order, setOrder] = useState(0);
  function orderFoot() {
    setOrder(order + 1);
  }
  return (
    <li className="food-list">
      <img className="img-food-list" src={link} alt="food-img" />
      <br />
      <h5>
        {orderType}: {order}
      </h5>
      <RestaurantButton order={orderFoot} />
    </li>
  );
};
export default Order;
