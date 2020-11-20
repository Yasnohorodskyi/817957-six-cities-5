import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";
import {offerPropTypes} from "../../utils/prop-types";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <CardOffer
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

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  offer: PropTypes.shape(offerPropTypes),
};

export default OffersList;
