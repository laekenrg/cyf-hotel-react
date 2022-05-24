import React, { useState, useEffect } from "react";
function CustomerProfile({ id }) {
  const [customer, setCustomer] = useState({});
  const datosApi = "https://cyf-react.glitch.me/customers/";
  useEffect(() => {
    fetch(datosApi + id)
      .then(res => res.json())
      .then(json => setCustomer(json));
  }, [id]);
  console.log(datosApi);
  return (
    <ul>
      <li>ID : {customer.id}</li>
      <li>Email: {customer.email}</li>
      <li>VIP: {customer.vip ? "Yes" : "No"}</li>
      <li>Phone Number : {customer.phoneNumber}</li>
    </ul>
  );
}
export default CustomerProfile;
