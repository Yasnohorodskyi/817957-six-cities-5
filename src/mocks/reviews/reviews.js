import {getRandomElement, humanizeDate, getRandomInteger} from "../../utils/commons";
import {DESCRIPTION, RATINGS, HOST_NAME} from "../../const";

const generateReview = () => {
  return {
    idReview: getRandomInteger(10000, 99999),
    avatar: `https://www.fillmurray.com/54/54`,
    name: getRandomElement(HOST_NAME),
    rating: Math.round(getRandomElement(RATINGS)),
    dateReview: humanizeDate(new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 100)))),
    textReview: getRandomElement(DESCRIPTION),
  };
};

export const generateReviews = (reviewsCounter) => {
  const reviews = [];

  for (let i = 0; i < reviewsCounter; i++) {
    reviews.push(generateReview(i));
  }
  return reviews;
};

