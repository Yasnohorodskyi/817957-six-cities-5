import {getRandomInteger, getRandomElement, getRandomList} from "../../utils/commons";
import {TITLES, CITY, DESCRIPTION, PHOTOS, PHOTOS_SMALL, PHOTOS_IN_OFFER, ACCOMODATION_TYPE, RATINGS, AMENITIES, HOST_NAME, REVIEWS_IN_OFFER, OFFERS} from "../../const";
import {generateReviews} from "../reviews/reviews";

const generateOffer = () => {
  return {
    idOffers: getRandomInteger(1000, 9999),
    city: getRandomElement(CITY),
    title: getRandomElement(TITLES),
    description: {
      firstPart: getRandomElement(DESCRIPTION),
      secondPart: getRandomElement(DESCRIPTION),
    },
    photos: {
      photoOffer: getRandomElement(PHOTOS),
      photoSmall: getRandomElement(PHOTOS_SMALL),
      photoList: getRandomList(PHOTOS_IN_OFFER, PHOTOS),
    },
    isPremium: Boolean(getRandomInteger(0, 1)),
    isBookmark: Boolean(getRandomInteger(0, 1)),
    type: getRandomElement(ACCOMODATION_TYPE).title,
    rates: getRandomElement(RATINGS),
    badrooms: Math.floor(Math.random() * 10) + 1,
    guests: Math.floor(Math.random() * 10) + 1,
    price: (Math.floor(Math.random() * 10) + 1) * 100,
    amenities: getRandomList((Math.floor(Math.random() * 10) + 1), AMENITIES),
    host: {
      avatar: `https://www.placecage.com/c/74/74`,
      nameHost: getRandomElement(HOST_NAME),
      isSuper: Boolean(getRandomInteger(0, 1)),
    },
    reviews: generateReviews(REVIEWS_IN_OFFER),
  };
};

const generateOffers = (offersCounter) => {
  const offers = [];

  for (let i = 0; i < offersCounter; i++) {
    offers.push(generateOffer(i));
  }
  return offers;
};

export default generateOffers(OFFERS);
