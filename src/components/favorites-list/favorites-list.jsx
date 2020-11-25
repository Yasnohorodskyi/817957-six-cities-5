import React from "react";
import PropTypes from "prop-types";
import FavoritesCityList from "../favorites-city-list/favorites-city-list";
import {CITY} from "../../const";
import {offerPropTypes} from "../../utils/prop-types";

const FavoritesList = (props) => {
  const {offers} = props;

  const getCityList = (cities, offersList) => {
    const initialCityList = [];
    cities.forEach((city) => initialCityList.push(city.title));

    const citiesList = [];
    offersList.forEach((offer) => (initialCityList.includes(offer.city) && offer.isBookmark ? citiesList.push(offer.city) : ``));
    return Array.from(new Set(citiesList));
  };

  const cityList = getCityList(CITY, offers);

  return (
    <ul className="favorites__list">
      {cityList.map((city) => (
        <FavoritesCityList key = {city} offers={offers} cityListName={city} />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default FavoritesList;
