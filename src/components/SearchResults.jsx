import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [classBoot, setClassBoot] = useState("table-default");

  function changeColor() {
    setClassBoot(classBoot =>
      classBoot === "table-default" ? "bg-danger" : "table-default"
    );
  }
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
          const dateIn = moment(item.checkInDate);
          const dateOut = moment(item.checkOutDate);

          return (
            <tr className={classBoot} onClick={changeColor} key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>{dateOut.diff(dateIn, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
