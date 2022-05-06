import React from "react";
const Footer = props => {
  return (
    <footer>
      <ul class="footer-list">
        {props.inf.map((inf, index) => (
          <li key={index}>{inf}</li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
