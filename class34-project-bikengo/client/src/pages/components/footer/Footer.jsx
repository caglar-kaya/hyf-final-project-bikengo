import React from "react";
import TextLink from "../../../components/textLink/TextLink";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-content">
          <ul className="footer-ul">
            <li className="footer-li">
              <TextLink path="/terms-of-use" text="Terms of Use" />
            </li>
            <li className="footer-li">
              <TextLink path="/about-us" text="About us" />
            </li>
            <li className="footer-li">
              <TextLink path="/privacy-policy" text="Privacy Policy" />
            </li>
          </ul>
          <ul className="footer-ul">
            <li className="footer-li">
              <TextLink path="/contact-us" text="Contact us" />
            </li>
          </ul>
        </div>
        <div className="socialMedia-icons">
          <a
            href="https://www.facebook.com/BikenGo-106797538676285"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a
            href="https://twitter.com/CBikengo"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a
            href="https://www.pinterest.com/classhyfbikengo/_saved/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-pinterest-square"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <h6>Copyright © 2022 bikeNGo. All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
