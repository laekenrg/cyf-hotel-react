import React from "react";

const TouristInfoCards = ({ pictures, country, link, review }) => {
  return (
    <div className="card">
      <img src={pictures} className="card-img-top" alt="#" />
      <h3 class="card-tittle">{country}</h3>
      <h5 class="card-review">{review}</h5>
      <div className="card-body">
        <a href={link} className="btn btn-primary" target="_blank">
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
