import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";
import {offerPropTypes} from "../../utils/prop-types";
import {CARD_TYPE} from "../../const";

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
            cardType={CARD_TYPE.MAIN}
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
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default OffersList;
