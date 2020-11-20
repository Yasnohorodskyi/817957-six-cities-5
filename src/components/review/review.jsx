import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../utils/prop-types";

const Review = (props) => {
  const {review} = props;
  const {
    avatar,
    name,
    rating,
    dateReview,
    textReview,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: 20 * Math.round(rating) + `%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {textReview}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {dateReview}
        </time>
      </div>
    </li>

  );
};

Review.propTypes = {
  review: PropTypes.shape(offerPropTypes).isRequired,
};
export default Review;
