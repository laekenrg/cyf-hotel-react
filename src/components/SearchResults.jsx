import React from "react";

import HighlightRows from "./HighlightRows";

const SearchResults = props => {
  return (
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
        </tr>
      </thead>
      <tbody>
        {props.results.map(item => {
          return <HighlightRows item={item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
