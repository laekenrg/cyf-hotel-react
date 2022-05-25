import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import { info } from "./data/infDestinos";
import Footer from "./components/Footer";
import infoFooter from "./data/infFooter";
import Restaurant from "./components/Restaurant";
import "./App.css";
console.log(info);
const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="Card-container">
        {info.map(card => (
          <TouristInfoCards
            key={card.nameCountry}
            pictures={card.picture}
            country={card.nameCountry}
            review={card.review}
            link={card.link}
          />
        ))}
      </div>
      <Bookings />
      <Restaurant />
      <Footer inf={infoFooter} />
    </div>
  );
};
//Actividad Terminad
export default App;
