import React from "react";
import PropTypes from "prop-types";
import FavoritesCityList from "../favorites-city-list/favorites-city-list";
import {CITY} from "../../const";
import {offerPropTypes} from "../../utils/prop-types";

const FavoritesList = (props) => {
  const {offers} = props;

  const getCityList = (initialCityList, offersLyst) => {
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
  offer: PropTypes.shape(offerPropTypes).isRequired,
};

export default FavoritesList;
