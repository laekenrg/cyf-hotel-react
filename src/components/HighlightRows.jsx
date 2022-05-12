import React, { useState } from "react";
import moment from "moment";
const HighlightRows = ({ item }) => {
  const [classBoot, setClassBoot] = useState("table-default");

  function changeColor() {
    setClassBoot(classBoot =>
      classBoot === "table-default" ? "bg-danger" : "table-default"
    );
  }
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
};
export default HighlightRows;
