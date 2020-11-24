import PropTypes from "prop-types";

// export const reviewPropTypes = PropTypes.shape({
//   review: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     dateReview: PropTypes.string.isRequired,
//     textReview: PropTypes.string.isRequired,
//   }).isRequired,
// }).isRequired;

export const offerPropTypes = PropTypes.shape({

  idOffers: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  offerCoordinates: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.shape({
    firstPart: PropTypes.string.isRequired,
    secondPart: PropTypes.string.isRequired,
  }).isRequired,
  photos: PropTypes.shape({
    photoOffer: PropTypes.string.isRequired,
    photoSmall: PropTypes.string.isRequired,
    photoList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isBookmark: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rates: PropTypes.number.isRequired,
  badrooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    nameHost: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  reviews: PropTypes.shape({
    review: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      dateReview: PropTypes.string.isRequired,
      textReview: PropTypes.string.isRequired,
    }).isRequired,

  }).isRequired,

}).isRequired;

// export const offerPropTypes = PropTypes.shape({
//   offers: PropTypes.shape({
//     offer: PropTypes.shape({
//       idOffers: PropTypes.number.isRequired,
//       city: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       description: PropTypes.shape({
//         firstPart: PropTypes.string.isRequired,
//         secondPart: PropTypes.string.isRequired,
//       }).isRequired,
//       photos: PropTypes.shape({
//         photoOffer: PropTypes.string.isRequired,
//         photoSmall: PropTypes.string.isRequired,
//         photoList: PropTypes.arrayOf(PropTypes.string).isRequired,
//       }).isRequired,
//       isPremium: PropTypes.bool.isRequired,
//       isBookmark: PropTypes.bool.isRequired,
//       type: PropTypes.string.isRequired,
//       rates: PropTypes.number.isRequired,
//       badrooms: PropTypes.number.isRequired,
//       guests: PropTypes.number.isRequired,
//       price: PropTypes.number.isRequired,
//       amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
//       host: PropTypes.shape({
//         avatar: PropTypes.string.isRequired,
//         nameHost: PropTypes.string.isRequired,
//         isSuper: PropTypes.bool.isRequired,
//       }).isRequired,
//       reviews: PropTypes.shape({
//         review: PropTypes.shape({
//           avatar: PropTypes.string.isRequired,
//           name: PropTypes.string.isRequired,
//           rating: PropTypes.number.isRequired,
//           dateReview: PropTypes.string.isRequired,
//           textReview: PropTypes.string.isRequired,
//         }).isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }).isRequired;
