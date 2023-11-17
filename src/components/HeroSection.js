import React from "react";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="./videos/video-2.mp4" autoPlay loop muted />
      <h1>THEE UNACHIEVABLE AWAITS</h1>
      <p>
        Want to satisfy your wildest desire that these demo men can't hope to
        reach?
        <br />
        Let us help you reach that meta-physical state that's just to
        deluctable.
      </p>
    </div>
  );
};

export default HeroSection;
