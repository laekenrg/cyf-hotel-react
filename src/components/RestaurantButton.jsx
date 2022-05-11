import React from "react";
const RestaurantButton = ({ order }) => {
  return (
    <button onClick={order} className="btn btn-primary">
      Add
    </button>
  );
};
export default RestaurantButton;
