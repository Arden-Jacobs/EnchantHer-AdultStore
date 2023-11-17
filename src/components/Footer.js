import React from "react";
import Button from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Willy World Community newsletter to receive our best deals,
          and stand a chance to win THE BIG ONE literally
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
        <div className="footer-bottom">
          <small class="website-rights">
            Willy World © 2023 | All rights reserved
          </small>
        </div>
    </div>
  );
};

export default Footer;
