import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  const search = searchVal => {
    const checkData = bookings.filter(
      data =>
        data.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        data.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(checkData);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;
