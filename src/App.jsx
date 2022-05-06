import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import { info } from "./data/infDestinos";
import Footer from "./components/Footer";
import infoFooter from "./data/infFooter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <div className="Card-container">
        {info.map(card => (
          <TouristInfoCards
            pictures={card.picture}
            country={card.nameCountry}
            review={card.review}
            link={card.link}
          />
        ))}
      </div>
      <Footer inf={infoFooter} />
    </div>
  );
};

export default App;
