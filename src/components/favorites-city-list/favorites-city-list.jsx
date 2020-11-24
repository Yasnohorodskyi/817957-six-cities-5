import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FavoritesOfferCard from "../favorites-offer-card/favorites-offer-card";

class FavoritesCityList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {offers, cityListName} = this.props;

    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{cityListName}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offers.filter((offer) => offer.city === cityListName && offer.isBookmark).map((offer) => (
            <FavoritesOfferCard
              offer={offer}
              key={offer.idOffers}
              onMouseOver={() => {
                this.setState(() => ({activeOffer: offer}));
              }}
              onMouseOut={() => {
                this.setState(() => ({activeOffer: null}));
              }}
            />
          ))}

        </div>
      </li>
    );
  }
}

FavoritesCityList.propTypes = {
  cityListName: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoritesCityList;
