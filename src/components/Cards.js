import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Deals!</h1>
      <h1>WEBSITE STILL IN PROCESS WAITING ON AFB APROVAL TO PROCEED WITH PRODUCT SELECTION AND FINALE DISIGN</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* 1st row */}
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Experience your hidden waterfall deep inside"
              label="Experience The Waterfall"
              path="/black-friday"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through your private Island in luxury with this bad boy"
              label="Luxurious Experience"
              path="/black-friday"
            />
          </ul>

          {/* 2nd row */}
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail, and vist those Uncharted Spots that will set your Soul a blaze!"
              label="Mystery"
              path="/black-friday"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Heights that will put Mount Everest to shame"
              label="Adventure"
              path="/black-friday"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Feeling like Desert, hop on this Camel for tour that will make you Roar"
              label="Adrenaline"
              path="/black-friday"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
