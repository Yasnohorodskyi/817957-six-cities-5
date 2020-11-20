import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers/offers";

const Settings = {
  PLACES_COUNT: 317
};

const GUEST = {
  avatar: `https://www.placecage.com/c/54/54`,
  name: `Garret`,
  email: `garret@siala.com`
};

ReactDOM.render(
    <App
      placesCount = {Settings.PLACES_COUNT}
      offers = {offers}
      guest = {GUEST}
    />,
    document.querySelector(`#root`)
);
