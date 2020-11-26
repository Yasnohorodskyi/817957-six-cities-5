import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";
import {CARD_TYPE} from "../../const";
import {offerPropTypes} from "../../utils/prop-types";

class OfferNeigbourhoodList extends PureComponent {
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
            cardType={CARD_TYPE.OFFER}
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
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default OfferNeigbourhoodList;
