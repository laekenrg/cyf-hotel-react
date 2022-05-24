import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const search = searchVal => {
    const checkData = bookings.filter(
      data =>
        data.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        data.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(checkData);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        setErrorMessage(err.error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="App-content">
      {bookings ? (
        <div className="container">
          <h2>{errorMessage}</h2>
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      ) : null}
    </div>
  );
};

export default Bookings;
