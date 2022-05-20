import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";

import HighlightRows from "./HighlightRows";

const SearchResults = props => {
  const [idCustomer, setIdCustomer] = useState("");
  function findId(id) {
    setIdCustomer(id);
  }
  return (
    <div className="customer-section">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.results.map(item => {
            return <HighlightRows item={item} key={item.id} findId={findId} />;
          })}
        </tbody>
      </table>
      <CustomerProfile id={idCustomer} />
    </div>
  );
};

export default SearchResults;
