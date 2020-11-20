import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferNeigbourhoodCard from "../offer-neigbourhood-card/offer-neigbourhood-card";
import {OFFERS_NEIGBOURHOOD_START_INDEX, OFFERS_NEIGBOURHOOD_END_INDEX} from "../../const";

class OfferNeigbourhoodList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {offers} = this.props;
    const offerNeigbourhood = offers.slice(OFFERS_NEIGBOURHOOD_START_INDEX, OFFERS_NEIGBOURHOOD_END_INDEX);

    return (
      <div className="cities__places-list places__list tabs__content">
        {offerNeigbourhood.map((offer) => (
          <OfferNeigbourhoodCard
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
    );
  }
}

OfferNeigbourhoodList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OfferNeigbourhoodList;
