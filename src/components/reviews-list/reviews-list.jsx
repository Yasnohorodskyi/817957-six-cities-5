import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import ReviewForm from "../review-form/review-form";
import {humanizeDate} from "../../utils/commons";

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      avatar: this.props.guest.avatar,
      name: this.props.guest.name,
      rating: null,
      dateReview: humanizeDate(new Date()),
      textReview: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    const {reviews} = this.props;
    const {guest} = this.props;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">
    Reviews · <span className="reviews__amount">{reviews.length}</span>
        </h2>
        <ul className="reviews__list">
          {reviews.map((review) => (
            <Review
              review = {review}
              key = {review.idReview}
            />
          ))}
        </ul>
        <ReviewForm handleSubmit = {this.handleSubmit} handleFieldChange = {this.handleFieldChange} guest = {guest} />
      </section>
    );
  }
}

ReviewsList.propTypes = {
  guest: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};


export default ReviewsList;
