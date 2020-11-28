import React from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer";
import {offerPropTypes} from "../../utils/prop-types";
import {CARD_TYPE} from "../../const";

const OffersList = (props) => {

  const {offers, onMouseOver, onMouseOut} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CardOffer
          offer={offer}
          key={offer.idOffers}
          cardType={CARD_TYPE.MAIN}
          onMouseOver ={() => {
            onMouseOver(offer);
          }}
          onMouseOut={()=> {
            onMouseOut();
          }}
        />
      ))}
    </div>
  );

};

OffersList.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerPropTypes),
};

export default OffersList;
