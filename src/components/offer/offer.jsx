import React from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list";
import OfferNeigbourhoodList from "../offer-neighbourhood-list/offer-neighbourhood-list";
import {offerPropTypes} from "../../utils/prop-types";
import Header from "../header/header";
import Map from "../map/map";

const Offer = (props) => {
  const {offer, offers, guest} = props;
  const {
    idOffers,
    isPremium,
    photos,
    price,
    isBookmark,
    rates,
    title,
    type,
    badrooms,
    guests,
    amenities,
    host,
    description,
  } = offer;

  const offerNeigbourhood = [];
  offers.forEach((item) => (item.idOffers !== idOffers ? offerNeigbourhood.push(item) : ``));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.photoList.map((photo, i) => (
                <div key = {`photo-${i}`} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={`img/` + `${photo}` + `.jpg`}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button ` + `${isBookmark ? `property__bookmark-button--active` : `` }` + ` button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{`${isBookmark ? `In` : `To` }` + ` bookmarks`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: 20 * Math.round(rates) + `%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rates}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${badrooms}` + ` Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ` + `${guests}` + ` adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{`€` + `${price}`}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.map((amenity, i) => (
                    <li key= {`amenity-${i}`} className="property__inside-item">{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className= {`property__avatar-wrapper ` + `${host.isSuper ? `property__avatar-wrapper--pro` : `` }` + ` user__avatar-wrapper`}>
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatar}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.nameHost}</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description.firstPart}
                  </p>
                  <p className="property__text">
                    {description.secondPart}
                  </p>
                </div>
              </div>
              <ReviewsList reviews = {offer.reviews} guest = {guest}/>

            </div>
          </div>
          <section id="map" className="property__map map">
            <Map offers={offerNeigbourhood}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferNeigbourhoodList offers ={offerNeigbourhood}/>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
};

Offer.propTypes = {
  offer: offerPropTypes,
  offers: PropTypes.arrayOf(offerPropTypes),
  guest: PropTypes.object.isRequired,
};

export default Offer;
