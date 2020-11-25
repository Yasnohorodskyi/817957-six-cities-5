import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-types";
import {PATH} from "../../const";
import {Link} from "react-router-dom";

const OfferNeigbourhoodCard = (props) => {
  const {offer, onMouseOver, onMouseOut} = props;
  const {
    idOffers,
    photos,
    price,
    isBookmark,
    rates,
    title,
    type,
  } = offer;
  return (
    <article className="near-places__card place-card" onMouseOver ={onMouseOver} onMouseOut={onMouseOut}>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`${PATH.OFFER}/${idOffers}`}>
          <img
            className="place-card__image"
            src={`img/` + `${photos.photoOffer}` + `.jpg`}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€` + `${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ` + `${isBookmark ? `place-card__bookmark-button--active` : `` }` + ` button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{`${isBookmark ? `In` : `To` }` + ` bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 20 * Math.round(rates) + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${PATH.OFFER}/${idOffers}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


OfferNeigbourhoodCard.propTypes = {
  offer: offerPropTypes,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
};
export default OfferNeigbourhoodCard;

