import React from "react";
function CustomerProfile({ id }) {
  return <p className="customer-data">{id && `customer profile ${id}`}</p>;
}
export default CustomerProfile;
