import React from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ footCountNumber, orderNumber, orderType }) => {
  return (
    <li>
      {orderType}: {footCountNumber} <RestaurantButton order={orderNumber} />
    </li>
  );
};
export default Order;
