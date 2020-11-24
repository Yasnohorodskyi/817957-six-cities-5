import React from "react";
import PropTypes from "prop-types";
import FavoritesCityList from "../favorites-city-list/favorites-city-list";
import {CITY} from "../../const";

const FavoritesList = (props) => {
  const {offers} = props;

  const getCityList = (cities, offersLyst) => {
    const initialCityList = [];
    cities.forEach((city) => initialCityList.push(city.title));

    const cityLyst = [];
    offersLyst.forEach((offer) => (initialCityList.includes(offer.city) && offer.isBookmark ? cityLyst.push(offer.city) : ``));
    return Array.from(new Set(cityLyst));
  };

  const cityLyst = getCityList(CITY, offers);

  return (
    <ul className="favorites__list">
      {cityLyst.map((city) => (
        <FavoritesCityList key = {city} offers={offers} cityListName={city} />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default FavoritesList;
